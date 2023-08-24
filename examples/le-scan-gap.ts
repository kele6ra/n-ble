import { Utils } from './utils/Utils';

import { Gap } from '../src/gap/Gap';
import { Gatt } from '../src/gatt/Gatt';
import {
  LeScanFilterDuplicates,
  LeOwnAddressType,
  LeScanningFilterPolicy,
  LeScanType,
} from '../src/hci/HciLeController';
import { amendProfileWithUuidNames, uuidInfo } from '../src/utils/Profile';
import { GattService } from '../src/gatt/GattService';
import { GattCharacteristic } from '../src/gatt/GattCharacteristic';
import { GattDescriptor } from '../src/gatt/GattDescriptor';
import { AdvData } from '../src/gap/AdvData';

const PDI_NOTIFY_SERVICE = '01000000000000000000000000000080';
const PDI_NOTIFY_CHARACTERISTIC = '02000000000000000000000000000080';
const PDI_WRITE_CHARACTERISTIC = '04000000000000000000000000000080';

(async () => {
  try {
    const adapter = await Utils.createHciAdapter({
      deviceType: 'usb',
      usb: { vid: 0x2fe3, pid: 0x000b },
      // usb: { vid: 0x2fe3, pid: 0x000d },
      // usb: { vid: 0x2fe3, pid: 0x000e },
      // usb: { vid: 0x0b05, pid: 0x190e }, // BT5
      // usb: { vid: 0x0b05, pid: 0x17cb }, // BT4
    });
    await Utils.defaultAdapterSetup(adapter.Hci);

    const gap = new Gap(adapter.Hci);
    await gap.init();

    await gap.setScanParameters({
      ownAddressType: LeOwnAddressType.RandomDeviceAddress,
      scanningFilterPolicy: LeScanningFilterPolicy.All,
      scanningPhy: {
        Phy1M: {
          type: LeScanType.Passive,
          intervalMs: 30,
          windowMs: 30
        },
        PhyCoded: {
          type: LeScanType.Passive,
          intervalMs: 30,
          windowMs: 30
        },
      },
    });
    await gap.startScanning({ filterDuplicates: LeScanFilterDuplicates.Enabled });  //comment for advertising test
    // await gap.startScanning({ filterDuplicates: LeScanFilterDuplicates.Disabled }); //uncomment for advertising test
    console.log('scanning...');

    gap.on('GapLeScanState', (scanning) => {
      console.log('scanning', scanning);
    });

    let connecting = false;

    adapter.Hci.on('LeExtendedAdvertisingReport', (report) => {
      console.log("HCI report");
      console.log(report.data);
    });

    gap.on('GapLeAdvReport', async (report) => {
      if (connecting) { return; }

      if (report.address.toString() !== '61:09:01:DE:00:42') {
        return;
      }

      // console.log("Gap report"); //uncomment for advertising test
      // console.log(report.address.toString(), report.data.completeLocalName, report.rssi, report.scanResponse); //uncomment for advertising test
      // console.log(report.data); //uncomment for advertising test
      connecting = true; //comment for advertising test
      console.log('connecting...');  //comment for advertising test
      await gap.stopScanning();  //comment for advertising test
      await gap.connect(report.address);  //comment for advertising test
    });

    gap.on('GapConnected', async (event) => {
      connecting = false;

      console.log(
        'connected',
        event.connectionHandle,
        event.connectionParams,
        event.versionInfo,
        Utils.manufacturerNameFromCode(event.versionInfo.manufacturerName),
        event.leRemoteFeatures.toString(),
      );

      const rssi = await adapter.Hci.readRssi(event.connectionHandle);
      console.log(`RSSI: ${rssi} dBm`);

      const att = gap.getATT(event.connectionHandle);
      if (!att) {
        throw new Error('ATT layer not exists');
      }

      const gatt = new Gatt(att);
      const profile = await gatt.discover();
      const profileAmended = amendProfileWithUuidNames(profile);

      console.log(JSON.stringify(profileAmended, null, 2));
      let nh: { service: GattService.AsObject, characteristic: GattCharacteristic.AsObject, descriptor: GattDescriptor.AsObject } | null = null;

      for (const service of profileAmended.services) {
        if (service.service.uuid !== PDI_NOTIFY_SERVICE) {
          continue;
        }
        for (const char of service.characteristics) {
          if (char.characteristic.properties.notify === false) {
            continue;
          }
          for (const descriptor of char.descriptors) {
            nh = { service: service.service, characteristic: char.characteristic, descriptor: descriptor};
            break;
          }
          if (nh) { break; }
        }
        if (nh) { break; }
      }

      console.log(nh);

      if (nh) {
        await gatt.startCharacteristicsNotifications(nh.characteristic, false);
        gatt.on('GattNotification', (s, c, d, b) => {
          console.log(`
            ${s.uuid}, ${uuidInfo(s.uuid)?.for}
            ${c.uuid}, ${uuidInfo(c.uuid)?.for}
            ${d.uuid}, ${uuidInfo(d.uuid)?.for}
            buffer ${b.toString('hex')}
          `);
        });

      }

      setTimeout(async () => {
        await gap.disconnect(event.connectionHandle);
      }, 60_000);
    });

    gap.on('GapDisconnected', async (reason) => {
      connecting = false;
      console.log('DisconnectionComplete', reason);

      await gap.setScanParameters({
        ownAddressType: LeOwnAddressType.RandomDeviceAddress,
        scanningFilterPolicy: LeScanningFilterPolicy.All,
        scanningPhy: {
          Phy1M: {
            type: LeScanType.Active,
            intervalMs: 30,
            windowMs: 30
          },
          PhyCoded: {
            type: LeScanType.Active,
            intervalMs: 30,
            windowMs: 30
          },
        },
      });
      await gap.startScanning({ filterDuplicates: LeScanFilterDuplicates.Enabled });
    });
  } catch (e) {
    const err = e as Error;
    console.log(err.message);
  }
})();

import { AttErrorCode } from './Att';
import { AttOpcode } from './AttOpcode';

export interface AttErrorRspMsg {
  requestOpcodeInError:   number;       // s:1, The request that generated this ATT_ERROR_RSP PDU
  attributeHandleInError: number;       // s:2, The attribute handle that generated this ATT_ERROR_RSP PDU
  errorCode:              AttErrorCode; // s:1, The reason why the request has generated an ATT_ERROR_RSP PDU
}

export class AttErrorRsp {
  private static readonly size = 5;

  static serialize(data: AttErrorRspMsg): Buffer {
    const buffer = Buffer.allocUnsafe(this.size);
    let o = 0;
    o = buffer.writeUIntLE(AttOpcode.ErrorRsp,          o, 1);
    o = buffer.writeUIntLE(data.requestOpcodeInError,   o, 1);
    o = buffer.writeUIntLE(data.attributeHandleInError, o, 2);
    o = buffer.writeUIntLE(data.errorCode,              o, 1);
    return buffer;
  }

  static deserialize(buffer: Buffer): AttErrorRspMsg|null {
    if (buffer.readUInt8(0) !== AttOpcode.ErrorRsp ||
        buffer.length       !== this.size) {
      return null;
    }
    return {
       requestOpcodeInError:   buffer.readUIntLE(0, 1),
       attributeHandleInError: buffer.readUIntLE(1, 2),
       errorCode:              buffer.readUIntLE(3, 1),
    };
  }
}

export class AttMtuExchangeReq {
  private static readonly size = 3;

  static serialize(mtu: number): Buffer {
    const buffer = Buffer.allocUnsafe(this.size);
    let o = 0;
    o = buffer.writeUIntLE(AttOpcode.ExchangeMtuReq, o, 1);
    o = buffer.writeUIntLE(mtu,                      o, 2);
    return buffer;
  }

  static deserialize(buffer: Buffer): number|null {
    if (buffer.readUInt8(0) !== AttOpcode.ExchangeMtuReq ||
        buffer.length       !== this.size) {
      return null;
    }
    return buffer.readUIntLE(1, 2);
  }
}

export class AttMtuExchangeRsp {
  private static readonly size = 3;

  static serialize(mtu: number): Buffer {
    const buffer = Buffer.allocUnsafe(this.size);
    let o = 0;
    o = buffer.writeUIntLE(AttOpcode.ExchangeMtuRsp, o, 1);
    o = buffer.writeUIntLE(mtu,                      o, 2);
    return buffer;
  }

  static deserialize(buffer: Buffer): number|null {
    if (buffer.readUInt8(0) !== AttOpcode.ExchangeMtuRsp ||
        buffer.length       !== this.size) {
      return null;
    }
    return buffer.readUIntLE(1, 2);
  }
}

export interface AttFindInformationReqMsg {
  startingHandle: number; // First requested handle number
  endingHandle:   number; // Last requested handle number
}

export class AttFindInformationReq {
  private static readonly size = 5;

  static serialize(req: AttFindInformationReqMsg): Buffer {
    const buffer = Buffer.allocUnsafe(this.size);
    let o = 0;
    o = buffer.writeUIntLE(AttOpcode.FindInformationReq,  o, 1);
    o = buffer.writeUIntLE(req.startingHandle,            o, 2);
    o = buffer.writeUIntLE(req.endingHandle,              o, 2);
    return buffer;
  }

  static deserialize(buffer: Buffer): AttFindInformationReqMsg|null {
    if (buffer.readUInt8(0) !== AttOpcode.FindInformationReq ||
        buffer.length       !== this.size) {
      return null;
    }
    return {
      startingHandle: buffer.readUIntLE(1, 2),
      endingHandle:   buffer.readUIntLE(3, 2),
    };
  }
}

export interface AttFindInformationRspEntry {
  handle: number;
  uuid: Buffer;
}

export type AttFindInformationRspMsg = AttFindInformationRspEntry[];

export class AttFindInformationRsp {
  private static readonly minSize = 6;
  private static readonly uuidSizes = [ undefined, 2, 16 ];

  static serialize(req: unknown): Buffer {
    const buffer = Buffer.allocUnsafe(this.minSize);
    // TODO
    return buffer;
  }

  static deserialize(buffer: Buffer): AttFindInformationRspMsg|null {
    if (buffer.readUInt8(0) !== AttOpcode.FindInformationRsp ||
        buffer.length        <  this.minSize) {
      return null;
    }

    // check uuid size
    const format = buffer.readUInt8(1);
    const uuidSize = this.uuidSizes[format];
    if (!uuidSize) {
      return null;
    }
    if (((buffer.length - 2) % uuidSize) !== 0) {
      return null;
    }

    const result: AttFindInformationRspMsg = [];

    let o = 2;
    while (o < buffer.length) {
      const handle = buffer.readUIntLE(o, 2);       o += 2;
      const uuid   = buffer.slice(o, o + uuidSize); o += uuidSize;

      result.push({ handle, uuid: uuid.reverse(), });
    }

    return result;
  }
}

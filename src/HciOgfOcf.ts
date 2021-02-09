export enum HciOgf {
  LinkControlCommands                                 = 0x01,
  LinkPolicyCommands                                  = 0x02,
  ControlAndBasebandCommands                          = 0x03,
  InformationParameters                               = 0x04,
  StatusParameters                                    = 0x05,
  TestingCommands                                     = 0x06,
  LeControllerCommands                                = 0x08,
}

export enum HciOcfLinkControlCommands {
  Inquiry                                             = 0x0001, // Inquiry
  InquiryCancel                                       = 0x0002, // Inquiry Cancel
  PeriodicInquiryMode                                 = 0x0003, // Periodic Inquiry Mode
  ExitPeriodicInquiryMode                             = 0x0004, // Exit Periodic Inquiry Mode
  CreateConnection                                    = 0x0005, // Create Connection
  Disconnect                                          = 0x0006, // Disconnect
  CreateConnectionCancel                              = 0x0008, // Create Connection Cancel
  AcceptConnectionRequest                             = 0x0009, // Accept Connection Request
  RejectConnectionRequest                             = 0x000A, // Reject Connection Request
  LinkKeyRequestReply                                 = 0x000B, // Link Key Request Reply
  LinkKeyRequestNegativeReply                         = 0x000C, // Link Key Request Negative Reply
  PinCodeRequestReply                                 = 0x000D, // PIN Code Request Reply
  PinCodeRequestNegativeReply                         = 0x000E, // PIN Code Request Negative Reply
  ChangeConnectionPacketType                          = 0x000F, // Change Connection Packet Type
  AuthenticationRequested                             = 0x0011, // Authentication Requested
  SetConnectionEncryption                             = 0x0013, // Set Connection Encryption
  ChangeConnectionLinkKey                             = 0x0015, // Change Connection Link Key
  MasterLinkKey                                       = 0x0017, // Master Link Key
  RemoteNameRequest                                   = 0x0019, // Remote Name Request
  RemoteNameRequestCancel                             = 0x001A, // Remote Name Request Cancel
  ReadRemoteSupportedFeatures                         = 0x001B, // Read Remote Supported Features
  ReadRemoteExtendedFeatures                          = 0x001C, // Read Remote Extended Features
  ReadRemoteVersionInformation                        = 0x001D, // Read Remote Version Information
  ReadClockOffset                                     = 0x001F, // Read Clock Offset
  ReadLmpHandle                                       = 0x0020, // Read LMP Handle
  SetupSynchronousConnection                          = 0x0028, // Setup Synchronous Connection
  AcceptSynchronousConnectionRequest                  = 0x0029, // Accept Synchronous Connection Request
  RejectSynchronousConnectionRequest                  = 0x002A, // Reject Synchronous Connection Request
  IoCapabilityRequestReply                            = 0x002B, // IO Capability Request Reply
  UserConfirmationRequestReply                        = 0x002C, // User Confirmation Request Reply
  UserConfirmationRequestNegativeReply                = 0x002D, // User Confirmation Request Negative Reply
  UserPasskeyRequestReply                             = 0x002E, // User Passkey Request Reply
  UserPasskeyRequestNegativeReply                     = 0x002F, // User Passkey Request Negative Reply
  RemoteOobDataRequestReply                           = 0x0030, // Remote OOB Data Request Reply
  RemoteOobDataRequestNegativeReply                   = 0x0033, // Remote OOB Data Request Negative Reply
  IoCapabilityRequestNegativeReply                    = 0x0034, // IO Capability Request Negative Reply
  CreatePhysicalLink                                  = 0x0035, // Create Physical Link
  AcceptPhysicalLink                                  = 0x0036, // Accept Physical Link
  DisconnectPhysicalLink                              = 0x0037, // Disconnect Physical Link
  CreateLogicalLink                                   = 0x0038, // Create Logical Link
  AcceptLogicalLink                                   = 0x0039, // Accept Logical Link
  DisconnectLogicalLink                               = 0x003A, // Disconnect Logical Link
  LogicalLinkCancel                                   = 0x003B, // Logical Link Cancel
  FlowSpecModify                                      = 0x003C, // Flow Spec Modify
  EnhancedSetupSynchronousConnection                  = 0x003D, // Enhanced Setup Synchronous Connection
  EnhancedAcceptSynchronousConnectionRequest          = 0x003E, // Enhanced Accept Synchronous Connection Request
  TruncatedPage                                       = 0x003F, // Truncated Page
  TruncatedPageCancel                                 = 0x0040, // Truncated Page Cancel
  SetConnectionlessSlaveBroadcast                     = 0x0041, // Set Connectionless Slave Broadcast
  SetConnectionlessSlaveBroadcastReceive              = 0x0042, // Set Connectionless Slave Broadcast Receive
  StartSynchronizationTrain                           = 0x0043, // Start Synchronization Train
  ReceiveSynchronizationTrain                         = 0x0044, // Receive Synchronization Train
  RemoteOobExtendedDataRequestReply                   = 0x0045, // Remote OOB Extended Data Request Reply
}

export enum HicOcfLinkPolicyCommands {
  HoldMode                                            = 0x0001, // Hold Mode
  SniffMode                                           = 0x0003, // Sniff Mode
  ExitSniffMode                                       = 0x0004, // Exit Sniff Mode
  QosSetup                                            = 0x0007, // QoS Setup
  RoleDiscovery                                       = 0x0009, // Role Discovery
  SwitchRole                                          = 0x000B, // Switch Role
  ReadLinkPolicySettings                              = 0x000C, // Read Link Policy Settings
  WriteLinkPolicySettings                             = 0x000D, // Write Link Policy Settings
  ReadDefaultLinkPolicySettings                       = 0x000E, // Read Default Link Policy Settings
  WriteDefaultLinkPolicySettings                      = 0x000F, // Write Default Link Policy Settings
  FlowSpecification                                   = 0x0010, // Flow Specification
  SniffSubrating                                      = 0x0011, // Sniff Subrating
}

export enum HciOcfControlAndBasebandCommands {
  SetEventMask                                        = 0x0001, // *
  Reset                                               = 0x0003, // *
  SetEventFilter                                      = 0x0005,
  Flush                                               = 0x0008,
  ReadPinType                                         = 0x0009,
  WritePinType                                        = 0x000A,
  ReadStoredLinkKey                                   = 0x000D,
  WriteStoredLinkKey                                  = 0x0011,
  DeleteStoredLinkKey                                 = 0x0012,
  WriteLocalName                                      = 0x0013,
  ReadLocalName                                       = 0x0014,
  ReadConnectionAcceptTimeout                         = 0x0015,
  WriteConnectionAcceptTimeout                        = 0x0016,
  ReadPageTimeout                                     = 0x0017,
  WritePageTimeout                                    = 0x0018,
  ReadScanEnable                                      = 0x0019,
  WriteScanEnable                                     = 0x001A,
  ReadPageScanActivity                                = 0x001B,
  WritePageScanActivity                               = 0x001C,
  ReadInquiryScanActivity                             = 0x001D,
  WriteInquiryScanActivity                            = 0x001E,
  ReadAuthenticationEnable                            = 0x001F,
  WriteAuthenticationEnable                           = 0x0020,
  ReadClassOfDevice                                   = 0x0023,
  WriteClassOfDevice                                  = 0x0024,
  ReadVoiceSetting                                    = 0x0025,
  WriteVoiceSetting                                   = 0x0026,
  ReadAutomaticFlushTimeout                           = 0x0027,
  WriteAutomaticFlushTimeout                          = 0x0028,
  ReadNumBroadcastRetransmissions                     = 0x0029,
  WriteNumBroadcastRetransmissions                    = 0x002A,
  ReadHoldModeActivity                                = 0x002B,
  WriteHoldModeActivity                               = 0x002C,
  ReadTransmitPowerLevel                              = 0x002D,
  ReadSynchronousFlowControlEnable                    = 0x002E,
  WriteSynchronousFlowControlEnable                   = 0x002F,
  SetControllerToHostFlowControl                      = 0x0031,
  HostBufferSize                                      = 0x0033,
  HostNumberOfCompletedPackets                        = 0x0035,
  ReadLinkSupervisionTimeout                          = 0x0036,
  WriteLinkSupervisionTimeout                         = 0x0037,
  ReadNumberOfSupportedIac                            = 0x0038,
  ReadCurrentIacLap                                   = 0x0039,
  WriteCurrentIacLap                                  = 0x003A,
  SetAfhHostChannelClassification                     = 0x003F,
  ReadInquiryScanType                                 = 0x0042,
  WriteInquiryScanType                                = 0x0043,
  ReadInquiryMode                                     = 0x0044,
  WriteInquiryMode                                    = 0x0045,
  ReadPageScanType                                    = 0x0046,
  WritePageScanType                                   = 0x0047,
  ReadAfhChannelAssessmentMode                        = 0x0048,
  WriteAfhChannelAssessmentMode                       = 0x0049,
  ReadExtendedInquiryResponse                         = 0x0051,
  WriteExtendedInquiryResponse                        = 0x0052,
  RefreshEncryptionKey                                = 0x0053,
  ReadSimplePairingMode                               = 0x0055,
  WriteSimplePairingMode                              = 0x0056,
  ReadLocalOOBData                                    = 0x0057,
  ReadInquiryResponseTransmitPowerLevel               = 0x0058,
  WriteInquiryTransmitPowerLevel                      = 0x0059,
  SendKeypressNotification                            = 0x0060,
  ReadDefaultErroneousDataReporting                   = 0x005A,
  WriteDefaultErroneousDataReporting                  = 0x005B,
  EnhancedFlush                                       = 0x005F,
  ReadLogicalLinkAcceptTimeout                        = 0x0061,
  WriteLogicalLinkAcceptTimeout                       = 0x0062,
  SetEventMaskPage2                                   = 0x0063, // *
  ReadLocationData                                    = 0x0064,
  WriteLocationData                                   = 0x0065,
  ReadFlowControlMode                                 = 0x0066,
  WriteFlowControlMode                                = 0x0067,
  ReadEnhancedTransmitPowerLevel                      = 0x0068,
  ReadBestEffortFlushTimeout                          = 0x0069,
  WriteBestEffortFlushTimeout                         = 0x006A,
  ShortRangeMode                                      = 0x006B,
  ReadLeHostSupport                                   = 0x006C,
  WriteLeHostSupport                                  = 0x006D,
  SetMwsChannelParameters                             = 0x006E,
  SetExternalFrameConfiguration                       = 0x006F,
  SetMwsSignaling                                     = 0x0070,
  SetMwsTransportLayer                                = 0x0071,
  SetMwsScanFrequencyTable                            = 0x0072,
  SetMwsPatternConfiguration                          = 0x0073,
  SetReservedLtAddr                                   = 0x0074,
  DeleteReservedLtAddr                                = 0x0075,
  SetConnectionlessSlaveBroadcastData                 = 0x0076,
  ReadSynchronizationTrainParameters                  = 0x0077,
  WriteSynchronizationTrainParameters                 = 0x0078,
  ReadSecureConnectionsHostSupport                    = 0x0079,
  WriteSecureConnectionsHostSupport                   = 0x007A,
  ReadAuthenticatedPayloadTimeout                     = 0x007B,
  WriteAuthenticatedPayloadTimeout                    = 0x007C,
  ReadLocalOobExtendedData                            = 0x007D,
  ReadExtendedPageTimeout                             = 0x007E,
  WriteExtendedPageTimeout                            = 0x007F,
  ReadExtendedInquiryLength                           = 0x0080,
  WriteExtendedInquiryLength                          = 0x0081,
  SetEcosystemBaseInterval                            = 0x0082,
  ConfigureDataPath                                   = 0x0083,
}

export enum HciOcfInformationParameters {
  ReadLocalVersionInformation                         = 0x0001, // *
  ReadLocalSupportedCommands                          = 0x0002, // *
  ReadLocalSupportedFeatures                          = 0x0003, // *
  ReadLocalExtendedFeatures                           = 0x0004,
  ReadBufferSize                                      = 0x0005,
  ReadBdAddr                                          = 0x0009, // *
  ReadDataBlockSize                                   = 0x000A,
  ReadLocalSupportedCodecsV1                          = 0x000B,
  ReadLocalSupportedCodecsV2                          = 0x000D,
  ReadLocalSimplePairingOptions                       = 0x000C,
  ReadLocalSupportedCodecCapabilities                 = 0x000E,
  ReadLocalSupportedControllerDelay                   = 0x000F,
}

export enum HciOcfStatusParameters {
  ReadFailedContactCounter                            = 0x0001, // Read Failed Contact Counter
  ResetFailedContactCounter                           = 0x0002, // Reset Failed Contact Counter
  ReadLinkQuality                                     = 0x0003, // Read Link Quality
  ReadRssi                                            = 0x0004, // Read RSSI
  ReadAfhChannelMap                                   = 0x0006, // Read AFH Channel Map
  ReadClock                                           = 0x0007, // Read Clock
  ReadEncryptionKeySize                               = 0x0008, // Read Encryption Key Size
  ReadLocalAmpInfo                                    = 0x0009, // Read Local AMP Info
  ReadLocalAmpAssoc                                   = 0x000A, // Read Local AMP ASSOC
  WriteRemoteAmpAssoc                                 = 0x000B, // Write Remote AMP ASSOC
  GetMwsTransportLayerConfiguration                   = 0x000C, // Get MWS Transport Layer Configuration
  SetTriggeredClockCapture                            = 0x000D, // Set Triggered Clock Capture
}

export enum HciOcfTestingCommands {
  ReadLoopbackMode                                    = 0x0001, // Read Loopback Mode
  WriteLoopbackMode                                   = 0x0002, // Write Loopback Mode
  EnableDeviceUnderTestMode                           = 0x0003, // Enable Device Under Test Mode
  WriteSimplePairingDebugMode                         = 0x0004, // Write Simple Pairing Debug Mode
  EnableAmpReceiverReports                            = 0x0007, // Enable AMP Receiver Reports
  AmpTestEnd                                          = 0x0008, // AMP Test End
  AmpTest                                             = 0x0009, // AMP Test
  WriteSecureConnectionsTestMode                      = 0x000A, // Write Secure Connections Test Mode
}

export enum HciOcfLeControllerCommands {
  SetEventMask                                        = 0x0001, // * LE Set Event Mask
  ReadBufferSizeV1                                    = 0x0002, // * LE Read Buffer Size
  ReadBufferSizeV2                                    = 0x0060, // * LE Read Buffer Size
  ReadLocalSupportedFeatures                          = 0x0003, // * LE Read Local Supported Features
  SetRandomAddress                                    = 0x0005, // * LE Set Random Address
  SetAdvertisingParameters                            = 0x0006, // * LE Set Advertising Parameters
  ReadAdvertisingPhysicalChannelTxPower               = 0x0007, // * LE Read Advertising Physical Channel Tx Power
  SetAdvertisingData                                  = 0x0008, // * LE Set Advertising Data
  SetScanResponseData                                 = 0x0009, // * LE Set Scan Response Data
  SetAdvertisingEnable                                = 0x000A, // * LE Set Advertising Enable
  SetScanParameters                                   = 0x000B, // * LE Set Scan Parameters
  SetScanEnable                                       = 0x000C, // * LE Set Scan Enable
  CreateConnection                                    = 0x000D, // * LE Create Connection
  CreateConnectionCancel                              = 0x000E, // * LE Create Connection Cancel
  ReadWhiteListSize                                   = 0x000F, // * LE Read White List Size
  ClearWhiteList                                      = 0x0010, // * LE Clear White List
  AddDeviceToWhiteList                                = 0x0011, // * LE Add Device To White List
  RemoveDeviceFromWhiteList                           = 0x0012, // * LE Remove Device From White List
  ConnectionUpdate                                    = 0x0013, // * LE Connection Update
  SetHostChannelClassification                        = 0x0014, // * LE Set Host Channel Classification
  ReadChannelMap                                      = 0x0015, // * LE Read Channel Map
  ReadRemoteFeatures                                  = 0x0016, // * LE Read Remote Features
  Encrypt                                             = 0x0017, // * LE Encrypt
  Rand                                                = 0x0018, // * LE Rand
  EnableEncryption                                    = 0x0019, // LE Enable Encryption
  LongTermKeyRequestReply                             = 0x001A, // LE Long Term Key Request Reply
  LongTermKeyRequestNegativeReply                     = 0x001B, // LE Long Term Key Request Negative Reply
  ReadSupportedStates                                 = 0x001C, // * LE Read Supported States
  ReceiverTestV1                                      = 0x001D, // LE Receiver Test
  ReceiverTestV2                                      = 0x0033, // LE Receiver Test
  ReceiverTestV3                                      = 0x004F, // LE Receiver Test
  TransmitterTestV1                                   = 0x001E, // LE Transmitter Test
  TransmitterTestV2                                   = 0x0034, // LE Transmitter Test
  TransmitterTestV3                                   = 0x0050, // LE Transmitter Test
  TransmitterTestV4                                   = 0x007B, // LE Transmitter Test
  TestEnd                                             = 0x001F, // LE Test End
  RemoteConnectionParameterRequestReply               = 0x0020, // LE Remote Connection Parameter Request Reply
  RemoteConnectionParameterRequestNegativeReply       = 0x0021, // LE Remote Connection Parameter Request Negative Reply
  SetDataLength                                       = 0x0022, // LE Set Data Length
  ReadSuggestedDefaultDataLength                      = 0x0023, // * LE Read Suggested Default Data Length
  WriteSuggestedDefaultDataLength                     = 0x0024, // * LE Write Suggested Default Data Length
  ReadLocalP256PublicKey                              = 0x0025, // LE Read Local P-256 Public Key
  GenerateDhKeyV1                                     = 0x0026, // LE Generate DHKey
  GenerateDhKeyV2                                     = 0x005E, // LE Generate DHKey
  AddDeviceToResolvingList                            = 0x0027, // LE Add Device To Resolving List
  RemoveDeviceFromResolvingList                       = 0x0028, // LE Remove Device From Resolving List
  ClearResolvingList                                  = 0x0029, // * LE Clear Resolving List
  ReadResolvingListSize                               = 0x002A, // * LE Read Resolving List Size
  ReadPeerResolvableAddress                           = 0x002B, // LE Read Peer Resolvable Address
  ReadLocalResolvableAddress                          = 0x002C, // LE Read Local Resolvable Address
  SetAddressResolutionEnable                          = 0x002D, // LE Set Address Resolution Enable
  SetResolvablePrivateAddressTimeout                  = 0x002E, // LE Set Resolvable Private Address Timeout
  ReadMaximumDataLength                               = 0x002F, // * LE Read Maximum Data Length
  ReadPhy                                             = 0x0030, // * LE Read PHY
  SetDefaultPhy                                       = 0x0031, // * LE Set Default PHY
  SetPhy                                              = 0x0032, // LE Set PHY
  SetAdvertisingSetRandomAddress                      = 0x0035, // * LE Set Advertising Set Random Address
  SetExtendedAdvertisingParameters                    = 0x0036, // * LE Set Extended Advertising Parameters
  SetExtendedAdvertisingData                          = 0x0037, // * LE Set Extended Advertising Data
  SetExtendedScanResponseData                         = 0x0038, // * LE Set Extended Scan Response Data
  SetExtendedAdvertisingEnable                        = 0x0039, // LE Set Extended Advertising Enable
  ReadMaximumAdvertisingDataLength                    = 0x003A, // LE Read Maximum Advertising Data Length
  ReadNumberOfSupportedAdvertisingSets                = 0x003B, // * LE Read Number of Supported Advertising Sets
  RemoveAdvertisingSet                                = 0x003C, // LE Remove Advertising Set
  ClearAdvertisingSets                                = 0x003D, // LE Clear Advertising Sets
  SetPeriodicAdvertisingParameters                    = 0x003E, // LE Set Periodic Advertising Parameters
  SetPeriodicAdvertisingData                          = 0x003F, // LE Set Periodic Advertising Data
  SetPeriodicAdvertisingEnable                        = 0x0040, // LE Set Periodic Advertising Enable
  SetExtendedScanParameters                           = 0x0041, // * LE Set Extended Scan Parameters
  SetExtendedScanEnable                               = 0x0042, // * LE Set Extended Scan Enable
  ExtendedCreateConnection                            = 0x0043, // LE Extended Create Connection
  PeriodicAdvertisingCreateSync                       = 0x0044, // LE Periodic Advertising Create Sync
  PeriodicAdvertisingCreateSyncCancel                 = 0x0045, // LE Periodic Advertising Create Sync Cancel
  PeriodicAdvertisingTerminateSync                    = 0x0046, // LE Periodic Advertising Terminate Sync
  AddDeviceToPeriodicAdvertiserList                   = 0x0047, // LE Add Device To Periodic Advertiser List
  RemoveDeviceFromPeriodicAdvertiserList              = 0x0048, // LE Remove Device From Periodic Advertiser List
  ClearPeriodicAdvertiserList                         = 0x0049, // LE Clear Periodic Advertiser List
  ReadPeriodicAdvertiserListSize                      = 0x004A, // LE Read Periodic Advertiser List Size
  ReadTransmitPower                                   = 0x004B, // LE Read Transmit Power
  ReadRfPathCompensation                              = 0x004C, // LE Read RF Path Compensation
  WriteRfPathCompensation                             = 0x004D, // LE Write RF Path Compensation
  SetPrivacyMode                                      = 0x004E, // LE Set Privacy Mode
  SetConnectionlessCteTransmitParameters              = 0x0051, // LE Set Connectionless CTE Transmit Parameters
  SetConnectionlessCteTransmitEnable                  = 0x0052, // LE Set Connectionless CTE Transmit Enable
  SetConnectionlessIqSamplingEnable                   = 0x0053, // LE Set Connectionless IQ Sampling Enable
  SetConnectionCteReceiveParameters                   = 0x0054, // LE Set Connection CTE Receive Parameters
  SetConnectionCteTransmitParameters                  = 0x0055, // LE Set Connection CTE Transmit Parameters
  ConnectionCteRequestEnable                          = 0x0056, // LE Connection CTE Request Enable
  ConnectionCteResponseEnable                         = 0x0057, // LE Connection CTE Response Enable
  ReadAntennaInformation                              = 0x0058, // LE Read Antenna Information
  SetPeriodicAdvertisingReceiveEnable                 = 0x0059, // LE Set Periodic Advertising Receive Enable
  PeriodicAdvertisingSyncTransfer                     = 0x005A, // LE Periodic Advertising Sync Transfer
  PeriodicAdvertisingSetInfoTransfer                  = 0x005B, // LE Periodic Advertising Set Info Transfer
  SetPeriodicAdvertisingSyncTransferParameters        = 0x005C, // LE Set Periodic Advertising Sync Transfer Parameters
  SetDefaultPeriodicAdvertisingSyncTransferParameters = 0x005D, // LE Set Default Periodic Advertising Sync Transfer Parameters
  ModifySleepClockAccuracy                            = 0x005F, // LE Modify Sleep Clock Accuracy
  ReadIsoTxSync                                       = 0x0061, // LE Read ISO TX Sync
  SetCigParameters                                    = 0x0062, // LE Set CIG Parameters
  SetCigParametersTest                                = 0x0063, // LE Set CIG Parameters Test
  CreateCis                                           = 0x0064, // LE Create CIS
  RemoveCig                                           = 0x0065, // LE Remove CIG
  AcceptCisRequest                                    = 0x0066, // LE Accept CIS Request
  RejectCisRequest                                    = 0x0067, // LE Reject CIS Request
  CreateBig                                           = 0x0068, // LE Create BIG
  CreateBigTest                                       = 0x0069, // LE Create BIG Test
  TerminateBig                                        = 0x006A, // LE Terminate BIG
  BigCreateSync                                       = 0x006B, // LE BIG Create Sync
  BigTerminateSync                                    = 0x006C, // LE BIG Terminate Sync,
  RequestPeerSca                                      = 0x006D, // LE Request Peer SCA (Sleep Clock Accuracy)
  SetupIsoDataPath                                    = 0x006E, // LE Setup ISO Data Path
  RemoveIsoDataPath                                   = 0x006F, // LE Remove ISO Data Path
  IsoTransmitTest                                     = 0x0070, // LE ISO Transmit Test
  IsoReceiveTest                                      = 0x0071, // LE ISO Receive Test
  IsoReadTestCounters                                 = 0x0072, // LE ISO Read Test Counters
  IsoTestEnd                                          = 0x0073, // LE ISO Test End
  SetHostFeature                                      = 0x0074, // LE Set Host Feature
  ReadIsoLinkQuality                                  = 0x0075, // LE Read ISO Link Quality
  EnhancedReadTransmitPowerLevel                      = 0x0076, // LE Enhanced Read Transmit Power Level
  ReadRemoteTransmitPowerLevel                        = 0x0077, // LE Read Remote Transmit Power Level
  SetPathLossReportingParameters                      = 0x0078, // LE Set Path Loss Reporting Parameters
  SetPathLossReportingEnable                          = 0x0079, // LE Set Path Loss Reporting Enable
  SetTransmitPowerReportingEnable                     = 0x007A, // LE Set Transmit Power Reporting Enable
}

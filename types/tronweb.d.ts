declare module 'tronweb';

declare global {
    interface Window {
        tronWeb?: {
            ready?: boolean;
        };
    }
}


// export declare module "tronweb" {
//   import { BigNumber } from "bignumber.js";
//   import {
//     Account,
//     AccountMnemonic,
//     AssetTRC10,
//     AssetUpdate,
//     BlockInfo,
//     BlockInput,
//     BlockTransaction,
//     BytesLike,
//     ChainParameter,
//     ContractExecutionParams,
//     CreateRandomOptions,
//     DelegatedResourceAccount,
//     DelegatedResourceList,
//     EnergyEstimate,
//     EventResult,
//     Exchange,
//     Header,
//     HexString,
//     JsonFragment,
//     KeyValue,
//     Miner,
//     NodeInfo,
//     Proposal,
//     Resource,
//     SideOptions,
//     TokenInfo,
//     Transaction,
//     TransactionResult,
//     TriggerConstantContractResult,
//     TronAccountResource,
//     TronContract,
//     TronContractResult,
//     TronWebConstructor,
//     TrxAccount,
//   } from "tronweb/interfaces";
//   export class TronWeb {
//     address: typeof TronWeb.address;
//     transactionBuilder: typeof TronWeb.transactionBuilder;
//     trx: typeof TronWeb.trx;
//     utils: typeof TronWeb.utils & {
//       transaction: typeof TronWeb.utils.transaction;
//     };
//     constructor(
//       fullNode: string,
//       solidityNode: string,
//       eventServer: string | boolean,
//       privateKey?: string | boolean
//     );
//     constructor(
//       fullNode: string,
//       solidityNode: string,
//       eventServer: string | boolean,
//       sideOptions: SideOptions,
//       privateKey?: string | boolean
//     );
//     constructor(obj: TronWebConstructor);
//     contract(data: JsonFragment[], address: string): TronContract;
//     setHeader(header: Header): void | Error;
//     currentProvider(): any;
//     currentProviders(): any;
//     getEventByTransactionID(transactionID: string): Promise<Transaction | any>;
//     getEventResult(
//       contractAddress: string,
//       options?: Object
//     ): Promise<EventResult[] | any>;
//     isConnected(): Object;
//     isValidProvider(provider: any): any;
//     setAddress(address: string): void | Error;
//     setDefaultBlock(blockID?: BlockInput): void | string | boolean;
//     setEventServer(eventServer: any): void | Error;
//     setFullNode(fullNode: any): void | Error;
//     setPrivateKey(privateKey: string): void | Error;
//     setSolidityNode(solidityNode: any): void | Error;
//     createAccount(): Promise<Account | any>;
//     createRandom(options?: CreateRandomOptions): Promise<AccountMnemonic | any>;
//     fromAscii(string: any, padding: any): any;
//     fromDecimal(value: number | string): string;
//     fromSun(sun: string | number): string;
//     fromUtf8(string: string): string;
//     fromMnemonic(
//       mnemonic: string,
//       path?: string,
//       wordlist?: string
//     ): AccountMnemonic | Error;
//     isAddress(address: string): boolean;
//     sha3(string: string, prefix?: boolean): HexString;
//     toAscii(hex: HexString): string;
//     toBigNumber(amount: number | string | HexString): BigNumber | Object;
//     toDecimal(value: string | HexString): number | string;
//     toHex(val: string | number | object | [] | BigNumber): HexString;
//     toSun(trx: number): string;
//     toUtf8(hex: string): string;
//     BigNumber(val: number | string | HexString): BigNumber;
//   }
//   export namespace TronWeb {
//     namespace transactionBuilder {
//       function addUpdateData(
//         unsignedTransaction: JSON | Object,
//         memo: string
//       ): Promise<Transaction | Object>;
//       function applyForSR(
//         address: string,
//         url: string,
//         options?: number
//       ): Promise<Transaction | Object>;
//       function createAccount(
//         address: string,
//         options?: JSON | Object
//       ): Promise<Transaction | Object>;
//       function createAsset(
//         options: AssetTRC10,
//         issuerAddress: string
//       ): Promise<Transaction | Object>;
//       function createProposal(
//         parameters: KeyValue[],
//         issuerAddress: string,
//         options?: number
//       ): Promise<Transaction | Object>;
//       function createSmartContract(
//         options: ContractExecutionParams,
//         issuerAddress: string
//       ): Promise<Transaction | Object>;
//       function createToken(
//         options: AssetTRC10,
//         issuerAddress: string
//       ): Promise<Transaction | Object>;
//       function delegateResource(
//         amount: number,
//         receiverAddress: string,
//         resource: string,
//         address: string,
//         lock: boolean,
//         options?: Object
//       ): Promise<Object>;
//       function deleteProposal(
//         proposalID: number,
//         issuerAddress: string,
//         options?: number
//       ): Promise<Transaction | Object>;
//       function estimateEnergy(
//         contractAddress: string | HexString,
//         functionSelector: string,
//         options: Object,
//         parameter: any[],
//         issuerAddress: string | HexString
//       ): Promise<EnergyEstimate>;
//       function extendExpiration(
//         transaction: Transaction | JSON | Object,
//         extension: number
//       ): Promise<Transaction>;
//       function freezeBalance(
//         amount: number,
//         duration: number,
//         resource: Resource,
//         ownerAddress: string,
//         receiverAddress: string,
//         options?: number
//       ): Promise<Transaction>;
//       function freezeBalanceV2(
//         amount: number,
//         resource: Resource,
//         ownerAddress: string,
//         options?: Object
//       ): Promise<Transaction | Object>;
//       function injectExchangeTokens(
//         exchangeID: number,
//         tokenID: string,
//         tokenAmount: number,
//         ownerAddress: string,
//         options?: number
//       ): Promise<Transaction>;
//       function purchaseAsset(
//         issuerAddress: string,
//         tokenID: string,
//         amount: number,
//         buyer?: string,
//         options?: number
//       ): Promise<Transaction | Object>;
//       function purchaseToken(
//         issuerAddress: string,
//         tokenID: string,
//         amount: number,
//         buyer?: string,
//         options?: number
//       ): Promise<Transaction | Object>;
//       function sendAsset(
//         to: string,
//         amount: number,
//         tokenID: string,
//         from: string,
//         options: number
//       ): Promise<Transaction | Object>;
//       function sendToken(
//         to: string,
//         amount: number | string,
//         tokenID: string,
//         pk?: string
//       ): Promise<Transaction | Object>;
//       function sendTrx(
//         to: string,
//         amount: number,
//         from: string,
//         options: number
//       ): Promise<Transaction | Object>;
//       function tradeExchangeTokens(
//         exchangeID: number,
//         tokenID: string,
//         tokenAmountSold: number,
//         tokenAmountExpected: number,
//         ownerAddress: string,
//         options: number
//       ): Promise<Transaction | Object>;
//       function triggerConfirmedConstantContract(
//         contractAddress: string,
//         functions: string,
//         options: Object,
//         parameter: any[],
//         issuerAddress: string
//       ): Promise<TransactionResult | Object>;
//       function triggerConstantContract(
//         contractAddress: string,
//         functions: string,
//         options: Object,
//         parameter: any[],
//         issuerAddress: string
//       ): Promise<TriggerConstantContractResult | Object>;
//       function triggerSmartContract(
//         contractAddress: string,
//         functions: string,
//         options: Object,
//         parameter: any[],
//         issuerAddress: string
//       ): Promise<TriggerConstantContractResult | Object>;
//       function undelegateResource(
//         amount: number,
//         receiverAddress: string,
//         resource: string,
//         address: string,
//         options?: Object
//       ): Promise<Object>;
//       function unfreezeBalance(
//         resource: Resource,
//         address: string,
//         receiver: string,
//         options: number
//       ): Promise<Transaction | Object>;
//       function unfreezeBalanceV2(
//         amount: number,
//         resource: Resource,
//         address: string,
//         options: Object
//       ): Promise<Object>;
//       function updateSetting(
//         contract_address: string,
//         consume_user_resource_percent: number,
//         owner_address: string,
//         options: number
//       ): Promise<Transaction | Object>;
//       function updateAccountPermissions(
//         owner_address: string,
//         ownerPermissions: Object,
//         witnessPermissions: Object | null,
//         activesPermissions: Object[]
//       ): Promise<Transaction | Object>;
//       function updateAsset(
//         options: AssetUpdate,
//         issuerAddress: string
//       ): Promise<Transaction | Object>;
//       function updateBrokerage(
//         brokerage: number,
//         ownerAddress: string
//       ): Promise<Transaction | Object>;
//       function updateEnergyLimit(
//         contract_address: string,
//         origin_energy_limit: number,
//         owner_address: string,
//         options: number
//       ): Promise<Transaction | Object>;
//       function updateToken(
//         options: AssetUpdate,
//         issuerAddress: string
//       ): Promise<Transaction | Object>;
//       function vote(
//         votes: Object,
//         voterAddress: string,
//         option: number
//       ): Promise<Transaction | Object>;
//       function voteProposal(
//         proposalID: number,
//         hasApproval: string,
//         voterAddress: string,
//         options: number
//       ): Promise<Transaction | Object>;
//       function withdrawBlockRewards(
//         address: string,
//         options: number
//       ): Promise<Transaction | Object>;
//       function withdrawExchangeTokens(
//         exchangeID: number,
//         tokenID: string,
//         tokenAmount: number,
//         ownerAddress: string,
//         options: number
//       ): Promise<Transaction | Object>;
//       function withdrawExpireUnfreeze(address: string): Promise<Object>;
//     }
//     namespace trx {
//       function getAccount(address: HexString | string): Promise<TrxAccount>;
//       function getAccountResources(
//         address: HexString | string
//       ): Promise<TronAccountResource>;
//       function getApprovedList(r: Transaction): Promise<TransactionResult>;
//       function getAvailableUnfreezeCount(
//         address: string | HexString,
//         options?: Object
//       ): Promise<Object>;
//       function getBalance(address: string | HexString): Promise<number>;
//       function getBandwidth(address: string | HexString): Promise<Object>;
//       function getBlock(block?: number | string): Promise<BlockInfo>;
//       function getBlockByHash(blockHash: string): Promise<BlockInfo>;
//       function getBlockByNumber(blockID: number): Promise<BlockInfo>;
//       function getBlockRange(start: number, end: number): Promise<BlockInfo[]>;
//       function getBlockTransactionCount(
//         block: number | string
//       ): Promise<Object | number>;
//       function getBrokerage(address: string | HexString): Promise<number | any>;
//       function getCanDelegatedMaxSize(
//         address: string | HexString,
//         resource?: Resource,
//         options?: Object
//       ): Promise<Object>;
//       function getCanWithdrawUnfreezeAmount(
//         address: string | HexString,
//         timestamp?: number,
//         options?: Object
//       ): Promise<Object>;
//       function getChainParameters(): Promise<ChainParameter[] | any>;
//       function getConfirmedTransaction(transactionID: string): Promise<Object>;
//       function getContract(
//         contractAddress: string | HexString
//       ): Promise<TronContractResult | TronContract | Object>;
//       function getCurrentBlock(): Promise<BlockInfo>;
//       function getDelegatedResourceV2(
//         fromAddress: string | HexString,
//         toAddress: string | HexString,
//         options?: Object
//       ): Promise<DelegatedResourceList | Object>;
//       function getDelegatedResourceAccountIndexV2(
//         address: string | HexString,
//         options?: Object
//       ): Promise<DelegatedResourceAccount | Object>;
//       function getExchangeByID(exchangeID: number): Promise<Exchange | Object>;
//       function getNodeInfo(): Promise<NodeInfo | Object>;
//       function getReward(address: string | HexString): Promise<number>;
//       function getSignWeight(
//         tx: Transaction
//       ): Promise<TransactionResult | Object>;
//       function getTokenByID(
//         tknID: string | number
//       ): Promise<TokenInfo | Object>;
//       function getTokenFromID(tokenID: string | number): Promise<TokenInfo>;
//       function getTokenListByName(
//         name: string
//       ): Promise<TokenInfo[] | Object[]>;
//       function getTokensIssuedByAddress(
//         address: string | HexString
//       ): Promise<Object>;
//       function getTransaction(
//         transactionID: string
//       ): Promise<BlockTransaction | Object>;
//       function getTransactionFromBlock(
//         block: number | string,
//         index: number
//       ): Promise<BlockTransaction[] | Object[] | BlockTransaction | Object>;
//       function getTransactionInfo(
//         transactionID: string
//       ): Promise<Transaction | Object>;
//       function getUnconfirmedBalance(address: string): Promise<number>;
//       function getUnconfirmedBrokerage(address: string): Promise<number>;
//       function getUnconfirmedReward(address: string): Promise<number>;
//       function getUnconfirmedTransactionInfo(
//         txid: string
//       ): Promise<Transaction | Object>;
//       function listExchanges(): Promise<Exchange[] | Object[]>;
//       function listExchangesPaginated(
//         limit: number,
//         offset: number
//       ): Promise<Exchange[] | Object[]>;
//       function listNodes(): Promise<string[] | Object>;
//       function listProposals(): Promise<Proposal[] | Object[] | Object>;
//       function listSuperRepresentatives(): Promise<Miner[] | Object[]>;
//       function listTokens(
//         limit?: number,
//         offset?: number
//       ): Promise<TokenInfo[] | Object[]>;
//       function sendRawTransaction(
//         signedTransaction: JSON | Object,
//         options?: any
//       ): Promise<TransactionResult | Object>;
//       function sendHexTransaction(
//         signedHexTransaction: string | HexString
//       ): Promise<Transaction | Object>;
//       function sendToken(
//         to: string,
//         amount: number,
//         tokenID: string,
//         from: string,
//         options: number
//       ): Promise<TransactionResult | Object>;
//       function sendTransaction(
//         to: string,
//         amount: number,
//         pk?: string
//       ): Promise<TransactionResult | Object>;
//       function sign(
//         transaction: Object,
//         privateKey: string
//       ): Promise<Transaction | Object>;
//       function sign(str: string, privateKey: string): Promise<string>;
//       function signMessageV2(
//         msg: string | BytesLike,
//         privateKey: string
//       ): Promise<string>;
//       function timeUntilNextVoteCycle(): Promise<number>;
//       function multiSign(
//         tx: JSON | Object,
//         pk: string,
//         permissionId: number
//       ): Promise<Transaction | Object>;
//       function verifyMessage(
//         message: string | HexString,
//         signature: string,
//         address: string
//       ): Promise<boolean>;
//       function verifyMessageV2(
//         message: string | HexString,
//         signature: string
//       ): Promise<string>;
//       function _signTypedData(
//         domain: JSON | Object,
//         types: JSON | Object,
//         value: JSON | Object,
//         privateKey: string
//       ): Promise<string>;
//       function verifyTypedData(
//         domain: JSON | Object,
//         types: JSON | Object,
//         value: JSON | Object,
//         signature: string,
//         address: string
//       ): Promise<boolean | Error>;
//     }
//     namespace address {
//       function fromHex(hex: string): string;
//       function fromPrivateKey(pk: string): string;
//       function toHex(base58: string): string;
//     }
//     namespace utils {
//       namespace transaction {
//         function txJsonToPb(tx: JSON | Object): Object;
//         function txPbToTxID(tx: JSON | Object): string;
//       }
//     }
//   }
//   export default TronWeb;
// }

// export declare module "tronweb/interfaces" {
//   /**
//    *  A string which is prefixed with ``0x`` and followed by any number
//    *  of case-agnostic hexadecimal characters.
//    *
//    *  It must match the regular expression ``/0x[0-9A-Fa-f]*\/``.
//    */
//   type HexString = string;
//   /**
//    *  A [[HexString]] whose length is even, which ensures it is a valid
//    *  representation of binary data.
//    */
//   type DataHexString = string;
//   /**
//    *  An object that can be used to represent binary data.
//    */
//   type BytesLike = DataHexString | Uint8Array;
//   /**
//    *  About frgaments...
//    *
//    *  @_subsection api/abi/abi-coder:Fragments  [about-fragments]
//    */
//   /**
//    *  A type description in a JSON API.
//    */
//   interface JsonFragmentType {
//     /**
//      *  The parameter name.
//      */
//     readonly name?: string;
//     /**
//      *  If the parameter is indexed.
//      */
//     readonly indexed?: boolean;
//     /**
//      *  The type of the parameter.
//      */
//     readonly type?: string;
//     /**
//      *  The internal Solidity type.
//      */
//     readonly internalType?: string;
//     /**
//      *  The components for a tuple.
//      */
//     readonly components?: ReadonlyArray<JsonFragmentType>;
//   }
//   /**
//    *  A fragment for a method, event or error in a JSON API.
//    */
//   interface JsonFragment {
//     /**
//      *  The name of the error, event, function, etc.
//      */
//     readonly name?: string;
//     /**
//      *  The type of the fragment (e.g. ``event``, ``"function"``, etc.)
//      */
//     readonly type?: string;
//     /**
//      *  If the event is anonymous.
//      */
//     readonly anonymous?: boolean;
//     /**
//      *  If the function is payable.
//      */
//     readonly payable?: boolean;
//     /**
//      *  If the function is constant.
//      */
//     readonly constant?: boolean;
//     /**
//      *  The mutability state of the function.
//      */
//     readonly stateMutability?: string;
//     /**
//      *  The input parameters.
//      */
//     readonly inputs?: ReadonlyArray<JsonFragmentType>;
//     /**
//      *  The output parameters.
//      */
//     readonly outputs?: ReadonlyArray<JsonFragmentType>;
//     /**
//      *  The gas limit to use when sending a transaction for this function.
//      */
//     readonly gas?: string;
//   }
//   type Resource = "BANDWIDTH" | "ENERGY";
//   type BlockInput = "latest" | "earliest" | number;
//   interface Account {
//     address: {
//       base58: string;
//       hex: string;
//     };
//     privateKey: string;
//     publicKey: string;
//     __proto__: Object;
//   }
//   interface AccountMnemonic {
//     mnemonic: {
//       phrase: string;
//       path: string;
//       locale: string;
//     };
//     privateKey: string;
//     publicKey: string;
//     address: string;
//   }
//   interface CreateRandomOptions {
//     path: string;
//     extraEntropy: string;
//     locale: string;
//   }
//   interface Transaction {
//     block: number;
//     timestamp: number;
//     contract: string;
//     name: string;
//     transaction: string;
//     result: {
//       r: string;
//       afterSeed: string;
//       s: string;
//       index: string;
//       previousSeed: string;
//       updater: string;
//       timestamp: string;
//     };
//     resourceNode: string;
//   }
//   interface EventResult {
//     block: number;
//     timestamp: number;
//     contract: string;
//     name: string;
//     transaction: string;
//     result: {
//       index: string;
//       rng: string;
//       timestamp: string;
//     };
//     resourceNode: string;
//   }
//   interface TrxAccount {
//     address: string;
//     balance: number;
//     frozen: {
//       frozen_balance: number;
//       expire_time: number;
//     }[];
//     create_time: number;
//     latest_opration_time: number;
//     latest_consume_free_time: number;
//     account_resource: {
//       frozen_balance_for_energy: {
//         frozen_balance: number;
//         expire_time: number;
//       };
//       latest_consume_time_for_energy: number;
//     };
//     owner_permission: {
//       permission_name: string;
//       threshold: number;
//       keys: [[Object] | Object];
//     };
//     active_permission: {
//       type: string;
//       id: number;
//       permission_name: string;
//       threshold: number;
//       operations: string;
//       keys: [Array<any>];
//     }[];
//     assetV2: {
//       key: string;
//       value: number;
//     }[];
//     free_asset_net_usageV2: {
//       key: string;
//       value: number;
//     }[];
//   }
//   interface ParameterValueOnTriggerSC {
//     data: string;
//     token_id: number;
//     owner_address: string;
//     call_token_value: number;
//     contract_address: string;
//   }
//   interface RawDataContract {
//     parameter: {
//       value:
//         | {
//             amount: number;
//             owner_address: string;
//             to_address: string;
//           }
//         | ParameterValueOnTriggerSC
//         | Object;
//       type_url: string;
//     };
//     type: string;
//   }
//   interface Transaction {
//     visible: boolean;
//     signature?: string[];
//     txID: string;
//     raw_data: {
//       contract: RawDataContract[] | Object[];
//       ref_block_bytes: string;
//       ref_block_hash: string;
//       expiration: number;
//       timestamp: number;
//       fee_limit?: number;
//     };
//     raw_data_hex: string;
//   }
//   interface TransactionResult {
//     result:
//       | {
//           [key: string]: any;
//         }
//       | boolean;
//     approved_list?: string[];
//     transaction:
//       | {
//           result: {
//             result: boolean;
//           };
//           txid: string;
//           transaction: {
//             signature: any[];
//             txID: string;
//             raw_data: object[];
//             raw_data_hex: string;
//           };
//         }
//       | Transaction;
//   }
//   interface TronAccountResource {
//     freeNetLimit: number;
//     netLimit: number;
//     assetNetUsed: {
//       key: string;
//       value: number;
//     }[];
//     assetNetLimit: {
//       key: string;
//       value: number;
//     }[];
//     totalNetLimit: number;
//     totalNetWeight: number;
//     energyLimit: number;
//     totalEnergyLimit: number;
//     totalEnergyWeight: number;
//   }
//   interface BlockTransaction {
//     txID: string;
//     raw_data: Object[];
//     raw_data_hex: string;
//     ret?: any[];
//     signature?: any[];
//   }
//   interface BlockInfo {
//     blockID: string;
//     block_header: {
//       raw_data: {
//         number?: number;
//         txTrieRoot: string;
//         witness_address: string;
//         parentHash: string;
//         timestamp?: number;
//         version?: number;
//       };
//       witness_signature: string;
//     };
//     transactions?: BlockTransaction[];
//   }
//   interface KeyValue {
//     key: string;
//     value?: number;
//   }
//   interface ChainParameter extends KeyValue {}
//   interface DelegatedResource {
//     from: string;
//     to: string;
//     frozen_balance_for_bandwidth: number;
//   }
//   interface DelegatedResourceList {
//     delegatedResource: DelegatedResource[];
//   }
//   interface DelegatedResourceAccount {
//     account: string | HexString;
//     toAccounts: string[] | HexString[];
//   }
//   interface Exchange {
//     exchange_id: number;
//     creator_address: string | HexString;
//     create_time: number;
//     first_token_id: string;
//     first_token_balance: number;
//     second_token_id: string;
//     second_token_balance: number;
//   }
//   interface ConfigNodeInfo {
//     activeNodeSize: number;
//     allowAdaptiveEnergy: number;
//     allowCreationOfContracts: number;
//     backupListenPort: number;
//     backupMemberSize: number;
//     backupPriority: number;
//     codeVersion: string;
//     dbVersion: number;
//     discoverEnable: boolean;
//     listenPort: number;
//     maxConnectCount: number;
//     maxTimeRatio: number;
//     minParticipationRate: number;
//     minTimeRatio: number;
//     p2pVersion: string;
//     passiveNodeSize: number;
//     sameIpMaxConnectCount: number;
//     sendNodeSize: number;
//     supportConstant: boolean;
//     versionName: string;
//     versionNum: string;
//   }
//   interface MachineInfo {
//     cpuCount: number;
//     cpuRate: number;
//     deadLockThreadCount: number;
//     deadLockThreadInfoList: any[];
//     freeMemory: number;
//     javaVersion: string;
//     jvmFreeMemory: number;
//     jvmTotalMemoery: number;
//     memoryDescInfoList: any[];
//     osName: string;
//     processCpuRate: number;
//     threadCount: number;
//     totalMemory: number;
//   }
//   interface PeerInfo {
//     active: boolean;
//     avgLatency: number;
//     blockInPorcSize: number;
//     connectTime: number;
//     disconnectTimes: number;
//     headBlockTimeWeBothHave: number;
//     headBlockWeBothHave: string;
//     host: string;
//     inFlow: number;
//     lastBlockUpdateTime: number;
//     lastSyncBlock: string;
//     localDisconnectReason: string;
//     needSyncFromPeer: boolean;
//     needSyncFromUs: boolean;
//     nodeCount: number;
//     nodeId: string;
//     port: number;
//     remainNum: number;
//     remoteDisconnectReason: string;
//     score: number;
//     syncBlockRequestedSize: number;
//     syncFlag: boolean;
//     syncToFetchSize: number;
//     syncToFetchSizePeekNum: number;
//     unFetchSynNum: number;
//   }
//   interface NodeInfo {
//     activeConnectCount: number;
//     beginSyncNum: number;
//     block: string;
//     cheatWitnessInfoMap: any;
//     configNodeInfo: ConfigNodeInfo;
//     currentConnectCount: number;
//     machineInfo: MachineInfo;
//     passiveConnectCount: number;
//     peerList: PeerInfo[];
//     solidityBlock: string;
//     totalFlow: number;
//   }
//   interface TokenInfo {
//     owner_address: string;
//     name: string;
//     abbr: string;
//     total_supply: number;
//     trx_num: number;
//     precision: number;
//     num: number;
//     start_time: number;
//     end_time: number;
//     description: string;
//     url: string;
//     id: string;
//   }
//   interface Transaction {
//     id: string;
//     fee: number;
//     blockNumber: number;
//     blockTimeStamp: number;
//     contractResult: string[];
//     contract_address: string;
//     receipt: {
//       origin_energy_usage: number;
//       energy_usage_total: number;
//       net_fee: number;
//       result: string;
//     };
//     log: {
//       address: string;
//       topics: string[];
//       data: string;
//     }[];
//     internal_transactions?: {
//       hash: string;
//       caller_address: string;
//       transferTo_address: string;
//       callValueInfo: string[];
//       note: string;
//     }[];
//   }
//   interface Proposal {
//     proposal_id: number;
//     proposer_address: string;
//     parameters: {
//       [key: string]: any;
//     }[];
//     expiration_time: number;
//     create_time: number;
//     approvals: string[];
//     state: "APPROVED" | "DISAPPROVED" | "IN_VOTING";
//   }
//   interface Miner {
//     address: string;
//     voteCount: number;
//     url: string;
//     totalProduced: number;
//     totalMissed: number;
//     latestBlockNum: number;
//     latestSlotNum: number;
//     isJobs: boolean;
//   }
//   interface AssetTRC10 {
//     name: string;
//     abbreviation: string;
//     description: string;
//     url: string;
//     totalSupply: number;
//     trxRatio: number;
//     tokenRatio: number;
//     saleStart: number;
//     saleEnd: number;
//     freeBandwidth: number;
//     freeBandwidthLimit: number;
//     frozenAmount: number;
//     frozenDuration: number;
//     precision: number;
//     permission_id?: number;
//   }
//   interface ContractExecutionParams {
//     feeLimit: number;
//     callValue: number;
//     tokenId?: string;
//     tokenValue?: number;
//     userFeePercentage: number;
//     originEnergyLimit: number;
//     abi: string;
//     bytecode: string;
//     parameters?: string;
//     name: string;
//     permissionId?: number;
//   }
//   interface EnergyEstimate {
//     result: Object;
//     energy_required: number;
//   }
//   interface TriggerConstantContractResult {
//     result: {
//       result: boolean;
//     };
//     energy_used: number;
//     constant_result: string[];
//     logs: {
//       address: string;
//       data: string;
//       topics: string[];
//     }[];
//     transaction: {
//       ret: {}[];
//       visible: boolean;
//       txID: string;
//       raw_data: {
//         contract: {
//           parameter: {
//             value: {
//               data: string;
//               owner_address: string;
//               contract_address: string;
//             };
//             type_url: string;
//           };
//           type: string;
//         }[];
//         ref_block_bytes: string;
//         ref_block_hash: string;
//         expiration: number;
//         timestamp: number;
//       };
//       raw_data_hex: string;
//     };
//   }
//   interface Header {
//     ["string"]: string;
//   }
//   interface TronWebConstructor {
//     fullHost: string;
//     headers?: Header;
//     privateKey?: string;
//   }
//   interface SideOptions {
//     fullNode: string;
//     solidityNode: string;
//     eventServer: string;
//     mainGatewayAddress: string;
//     sideGatewayAddress: string;
//     sideChainId: string;
//   }
//   interface AssetUpdate {
//     description?: string;
//     url?: string;
//     freeBandwidth: number;
//     freeBandwidthLimit: number;
//     permissionId?: number;
//   }
//   interface TronContract {
//     tronWeb: Object;
//     injectPromise: Function;
//     address: string;
//     abi: JsonFragment[] | [];
//     eventListener: boolean;
//     bytecode: boolean | string;
//     deployed: boolean | string;
//     lastBlock: boolean | string | number;
//     methods: Object;
//     methodInstances: Object;
//     props: [];
//   }
//   interface TronContractResult {
//     contract_address: string;
//     origin_address: string;
//     abi: JsonFragment[] | [] | Object;
//     bytecode: boolean | string;
//     name: string;
//   }
// }

export enum Web3Errors {
    UNSUPPORTED_CHAIN = 'Unsupported chain',
    PROVIDER_UNAVAILABLE = 'Provider unavailable',
    SIGNER_UNAVAILABLE = 'Signer unavailable',
    WALLET_NOT_CONNECTED = 'Wallet application is not connected',
    UNSUPPORTED_REQUEST = 'Requests are not supported by your wallet application',
}

export enum RpcProviderType {
    JSON,
    BATCH,
}

export enum WalletApplications {
    METAMASK,
}
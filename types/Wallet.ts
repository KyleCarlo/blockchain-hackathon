export interface WalletStatus {
  connected: boolean;
  address: string;
}

export interface WalletConnectionProps {
  walletStatus: WalletStatus;
  connectWallet: () => void;
  disconnectWallet: () => void;
  isConnecting: boolean;
}

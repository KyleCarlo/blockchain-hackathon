"use client";

import { WalletConnectionProps } from "@/types/Wallet";

export default function WalletConnection({
  walletStatus,
  connectWallet,
  disconnectWallet,
  isConnecting,
}: WalletConnectionProps) {
  return (
    <div>
      <p>Wallet Status</p>
      <div>
        {walletStatus.connected ? (
          <div>Connected to wallet: {walletStatus.address}</div>
        ) : (
          <div>Not Connected</div>
        )}
      </div>
      <div>
        {walletStatus.connected ? (
          <button onClick={disconnectWallet} className="btn btn-error">
            Disconnect Wallet
          </button>
        ) : (
          <button
            onClick={connectWallet}
            disabled={isConnecting}
            className="btn btn-primary"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

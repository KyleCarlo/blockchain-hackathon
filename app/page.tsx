"use client";

import { useState, useEffect } from "react";
import WalletConnection from "@/components/wallet-connection";
import type { WalletStatus } from "@/types/Wallet";
import { injected } from "wagmi/connectors";
import { useAccount, useDisconnect, useConnect } from "wagmi";

export default function Home() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletStatus, setWalletStatus] = useState<WalletStatus>({
    connected: false,
    address: "",
  });
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  const connectWallet = async () => {
    setIsConnecting(true);
    try {
      connect({ connector: injected() });
    } catch (error: unknown) {
      console.error("Failed to connect wallet:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = async () => {
    disconnect();
    setIsConnecting(false);
    setWalletStatus({
      connected: false,
      address: "",
    });
  };

  useEffect(() => {
    if (isConnected && address) {
      setWalletStatus({
        connected: true,
        address,
      });
    } else {
      setWalletStatus({
        connected: false,
        address: "",
      });
    }
  }, [isConnected, address]);

  return (
    <div>
      <h1>TrustPort</h1>
      <WalletConnection
        walletStatus={walletStatus}
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
        isConnecting={isConnecting}
      />
      {walletStatus.connected && <div></div>}
    </div>
  );
}

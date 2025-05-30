"use client";

import { useState, useEffect } from "react";
import WalletConnection from "@/components/wallet-connection";
import type { WalletStatus } from "@/types/Wallet";
import { injected } from "wagmi/connectors";
import { useAccount, useDisconnect, useConnect } from "wagmi";
// import { abi } from "@/utils/abi";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
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
      // Redirect to store page after connecting wallet
      router.push("/store");
    } else {
      setWalletStatus({
        connected: false,
        address: "",
      });
    }
  }, [isConnected, address, router]);

  return (
    <div className="h-dvh flex flex-col items-center justify-center gap-y-4">
      {/* <h1>TrustPort</h1>
      <WalletConnection
        walletStatus={walletStatus}
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
        isConnecting={isConnecting}
      />
      {walletStatus.connected && <div></div>} */}
      <h1 className="text-lg font-bold text-[2rem] mb-4">TrustPort</h1>
      <div className="flex flex-col gap-y-4">
        <input type="text" placeholder="Username" className="input" />
        <button className="btn btn-primary">Register</button>
      </div>
      <div className="w-1/4 flex gap-x-4 justify-center items-center">
        <div className="w-[50px] border-2 border-white h-[2px]"></div>
        <span>or</span>
        <div className="w-[50px] border-2 border-white h-[2px]"></div>
      </div>
      <div className="flex flex-col gap-y-4">
        <WalletConnection
          walletStatus={walletStatus}
          connectWallet={connectWallet}
          disconnectWallet={disconnectWallet}
          isConnecting={isConnecting}
        />
      </div>
    </div>
  );
}
  
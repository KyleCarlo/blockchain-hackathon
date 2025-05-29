import "./globals.css";
import { Provider } from "./provider";
import { getConfig } from "@/utils/config";
import { cookieToInitialState } from "wagmi";
import { headers } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const cookieHeader = headerList.get("cookie");
  const initialState = cookieToInitialState(getConfig(), cookieHeader);

  return (
    <html lang="en">
      <body>
        <Provider initialState={initialState}>{children}</Provider>
      </body>
    </html>
  );
}

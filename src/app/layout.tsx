import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import "@stream-io/video-react-sdk/dist/css/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={"${inter.className} bg-dark-2"}>{children}</body>
    </html>
  );
}

import React, {ReactNode} from 'react'
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/yoom-logo.svg",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
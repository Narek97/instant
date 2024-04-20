import type { Metadata } from "next";
import "./layout.scss";
import "@/assets/styles/base.scss";
import React from "react";
import RecoilProvider from "@/providers/recoil-provider";
import ThemProvider from "@/providers/them-provider";

export const metadata: Metadata = {
  title: "Instant answers",
  description: "answers",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="base-layout">
        <RecoilProvider>
          <ThemProvider>
            <>{children}</>
          </ThemProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "@/assets/styles/base.scss";
import React from "react";
import HoverMenuPanelLayout from "@/layouts/hover-menu-panel-layout";

export const metadata: Metadata = {
  title: "Surveys",
  description: "surveys-page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HoverMenuPanelLayout>{children}</HoverMenuPanelLayout>
    </>
  );
}

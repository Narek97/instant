import React from "react";
import NotFoundPage from "@/pages/not-found-page/not-found-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
};

const NotFound = () => {
  return (
    <>
      <NotFoundPage />
    </>
  );
};

export default NotFound;

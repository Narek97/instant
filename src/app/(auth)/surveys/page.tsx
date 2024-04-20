import React from "react";
import type { Metadata } from "next";
import SurveysPage from "@/pages/surveys-page/surveys-page";

export const metadata: Metadata = {
  title: "Surveys",
};

const Surveys = () => {
  return (
    <>
      <SurveysPage />
    </>
  );
};

export default Surveys;

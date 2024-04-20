"use client";
import React, { useMemo, useState } from "react";
import "./surveys-page.scss";
import CustomTable from "@/components/ui/custom-table/custom-table";
import SurveyRow from "@/components/templates/table-rows/survey-row/survey-row";
import { TableColumnType } from "@/ts/types";
import useSWR from "swr";
import { APP_URL } from "@/constants/env";
import { axiosGetFetcher } from "@/utils/swr-fetcher";
import CustomError from "@/components/ui/custome-error/custome-error";
import CustomLoader from "@/components/ui/custom-loader/custom-loader";

const SurveysPage = () => {
  const [surveys, setSurveys] = useState<Array<SurveyData> | null>(null);

  const {
    isLoading: isLoadingSurveys,
    data: dataSurveys,
    error: errorSurveys,
  } = useSWR(`${APP_URL}/api/get-surveys?page=1&perPage=10`, axiosGetFetcher, {
    onSuccess: (data) => {
      setSurveys(data.surveys);
    },
  });

  const columns = useMemo((): Array<TableColumnType> => {
    return [
      { id: "external_survey_id", name: "SurveyId" },
      { id: "survey_name", name: "Survey name" },
      { id: "current_quota", name: "Audience" },
      { id: "country", name: "Country" },
      { id: "team_name", name: "Workspace Name" },
      { id: "channel_name", name: "Channel Name" },
      { id: "qp_user_id", name: "QP UserID" },
      { id: "qp_user_email", name: "QP Email" },
      { id: "url", name: "URL" },
    ];
  }, []);

  const rows = useMemo(
    () => (surveys ? surveys : dataSurveys?.surveys),
    [dataSurveys],
  );

  return (
    <div className={"surveys"}>
      <h2 className={"surveys--title"}>Surveys</h2>
      {isLoadingSurveys ? (
        <CustomLoader />
      ) : (
        <>
          {errorSurveys ? (
            <>
              <CustomError error={errorSurveys.message} />
            </>
          ) : (
            <>
              {dataSurveys.count ? (
                <>
                  <CustomTable
                    columns={columns}
                    rows={rows}
                    rowFunction={(row: SurveyData) => <SurveyRow row={row} />}
                  />
                </>
              ) : (
                <div className={"no-data"}>No data yet</div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SurveysPage;

import React, { useMemo, useState } from "react";
import "./error-logs.scss";
import CustomTable from "@/components/ui/custom-table/custom-table";
import { TableColumnType } from "@/ts/types";
import Delete from "@/assets/icons/delete.svg";
import ErrorLogRow from "@/components/templates/table-rows/error-logs-row/error-logs-row";
import CustomLoader from "@/components/ui/custom-loader/custom-loader";
import CustomError from "@/components/ui/custome-error/custome-error";
import SurveyRow from "@/components/templates/table-rows/survey-row/survey-row";
import useSWR from "swr";
import { APP_URL } from "@/constants/env";
import { axiosGetFetcher } from "@/utils/swr-fetcher";

const ErrorLogs = () => {
  const [errorLogs, setErrorLogs] = useState<Array<ErrorLog> | null>(null);

  const {
    isLoading: isLoadingErrorLogs,
    data: dataErrorLogs,
    error: errorErrorLogs,
  } = useSWR(
    `${APP_URL}/api/get-error-logs?page=1&perPage=10`,
    axiosGetFetcher,
    {
      onSuccess: (data) => {
        setErrorLogs(data.errors);
      },
    },
  );

  const onHandleDeleteClick = () => {
    console.log("ok");
  };

  const columns = useMemo((): Array<TableColumnType> => {
    return [
      { id: "status", name: "Status" },
      { id: "message", name: "Message" },
      { id: "type", name: "Type" },
      { id: "path", name: "path" },
      { id: "method", name: "Method" },
      { id: "date", name: "Date" },
      {
        id: "action",
        name: "",
        renderFunction: () => (
          <>
            <button aria-label={"delete"} onClick={onHandleDeleteClick}>
              <Delete fill={"#ffffff"} />
            </button>
          </>
        ),
      },
    ];
  }, []);

  const rows = useMemo(
    () => (errorLogs ? errorLogs : dataErrorLogs?.errors),
    [dataErrorLogs],
  );

  return (
    <div className={"error-logs"}>
      {isLoadingErrorLogs ? (
        <CustomLoader />
      ) : (
        <>
          {errorErrorLogs ? (
            <>
              <CustomError error={errorErrorLogs.message} />
            </>
          ) : (
            <>
              {dataErrorLogs.count ? (
                <>
                  <CustomTable
                    columns={columns}
                    rows={rows || []}
                    rowFunction={(row: ErrorLog) => <ErrorLogRow row={row} />}
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

export default ErrorLogs;

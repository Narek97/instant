import React, { useMemo, useState } from "react";
import "./api-logs.scss";
import CustomTable from "@/components/ui/custom-table/custom-table";
import { TableColumnType } from "@/ts/types";
import Delete from "@/assets/icons/delete.svg";
import ApiLogsRow from "@/components/templates/table-rows/api-logs-row/api-logs-row";
import CustomLoader from "@/components/ui/custom-loader/custom-loader";
import CustomError from "@/components/ui/custome-error/custome-error";
import useSWR from "swr";
import { APP_URL } from "@/constants/env";
import { axiosGetFetcher } from "@/utils/swr-fetcher";

const ApiLogs = () => {
  const [apiLogs, setApiLogs] = useState<Array<ErrorLog> | null>(null);

  const {
    isLoading: isLoadingApiLogs,
    data: dataApiLogs,
    error: errorApiLogs,
  } = useSWR(`${APP_URL}/api/get-api-logs?page=1&perPage=10`, axiosGetFetcher, {
    onSuccess: (data) => {
      setApiLogs(data.errors);
    },
  });

  const onHandleDeleteClick = () => {
    console.log("ok");
  };

  const columns = useMemo((): Array<TableColumnType> => {
    return [
      { id: "platform", name: "Platform" },
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
    () => (apiLogs ? apiLogs : dataApiLogs?.errors),
    [dataApiLogs],
  );

  return (
    <div className={"api-logs"}>
      {isLoadingApiLogs ? (
        <CustomLoader />
      ) : (
        <>
          {errorApiLogs ? (
            <>
              <CustomError error={errorApiLogs.message} />
            </>
          ) : (
            <>
              {dataApiLogs.count ? (
                <>
                  <CustomTable
                    columns={columns}
                    rows={rows}
                    rowFunction={(row: ApiLog) => <ApiLogsRow row={row} />}
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

export default ApiLogs;

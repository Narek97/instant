import React, { useCallback, useMemo, useState } from 'react'
import './api-logs.scss'
import CustomTable from '@/components/ui/custom-table/custom-table'
import { TableColumnType } from '@/ts/types'
import Delete from '@/assets/icons/delete.svg'
import ApiLogsRow from '@/components/templates/table-rows/api-logs-row/api-logs-row'
import CustomLoader from '@/components/ui/custom-loader/custom-loader'
import CustomError from '@/components/ui/custome-error/custome-error'
import useSWR from 'swr'
import { APP_URL } from '@/constants/env'
import { axiosGetFetcher, axiosPostFetcher } from '@/utils/swr-fetcher'
import { ApiLog, ErrorLog } from '@/ts/types/admin'
import useSWRMutation from 'swr/mutation'
import CustomModal from '@/components/ui/custom-modal/custom-modal'
import DeleteModalFrame from '@/components/reusable/delete-modal-frame/delete-modal-frame'
import Pagination from '@/components/reusable/pagination/pagination'

const ApiLogs = () => {
  const [apiLogs, setApiLogs] = useState<Array<ErrorLog> | null>(null)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const {
    isLoading: isLoadingApiLogs,
    data: dataApiLogs,
    error: errorApiLogs,
    mutate: mutateApiLogs,
  } = useSWR(
    `${APP_URL}/api/api-logs/get-all?page=1&perPage=10`,
    axiosGetFetcher,
    {
      onSuccess: (data) => {
        setApiLogs(data.errors)
      },
    }
  )

  const { isMutating: isLoadingDeleteErrorLogs, trigger: deleteErrorLogs } =
    useSWRMutation(`${APP_URL}/api/api-logs/delete-all`, axiosPostFetcher, {
      onSuccess: async () => {
        await mutateApiLogs()
        setApiLogs([])
        setIsOpenDeleteModal(false)
      },
    })

  const onHandleDelete = useCallback(async () => {
    await deleteErrorLogs({
      method: 'DELETE',
    })
  }, [deleteErrorLogs])

  const onHandleToggleDeleteModal = useCallback(() => {
    setIsOpenDeleteModal((prev) => !prev)
  }, [])

  const onHandleChangePage = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  const columns = useMemo((): Array<TableColumnType> => {
    return [
      { id: 'platform', name: 'Platform' },
      { id: 'status', name: 'Status' },
      { id: 'message', name: 'Message' },
      { id: 'type', name: 'Type' },
      { id: 'path', name: 'path' },
      { id: 'method', name: 'Method' },
      { id: 'date', name: 'Date' },
      {
        id: 'action',
        name: '',
        renderFunction: () => (
          <>
            <button aria-label={'delete'} onClick={onHandleToggleDeleteModal}>
              <Delete fill={'#ffffff'} />
            </button>
          </>
        ),
      },
    ]
  }, [onHandleToggleDeleteModal])

  const rows = useMemo(
    () => (apiLogs ? apiLogs : dataApiLogs?.errors),
    [apiLogs, dataApiLogs?.errors]
  )

  return (
    <div className={'api-logs'}>
      {isOpenDeleteModal && (
        <CustomModal
          isOpen={isOpenDeleteModal}
          handleClose={onHandleToggleDeleteModal}
        >
          <DeleteModalFrame
            isLoading={isLoadingDeleteErrorLogs}
            handleClose={onHandleToggleDeleteModal}
            handleDelete={onHandleDelete}
            item={{
              name: 'logs',
              type: 'all api logs',
            }}
          />
        </CustomModal>
      )}

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
                  {dataApiLogs.count > 10 ? (
                    <Pagination
                      allCount={dataApiLogs.count}
                      currentPage={currentPage}
                      perPage={10}
                      changePage={onHandleChangePage}
                    />
                  ) : null}
                </>
              ) : (
                <div className={'no-data'}>No data yet</div>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}

export default ApiLogs

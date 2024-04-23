import React, { useCallback, useMemo, useState } from 'react'
import './error-logs.scss'
import CustomTable from '@/components/ui/custom-table/custom-table'
import { TableColumnType } from '@/ts/types'
import Delete from '@/assets/icons/delete.svg'
import ErrorLogRow from '@/components/templates/table-rows/error-logs-row/error-logs-row'
import CustomLoader from '@/components/ui/custom-loader/custom-loader'
import CustomError from '@/components/ui/custome-error/custome-error'
import useSWR from 'swr'
import { APP_URL } from '@/constants/env'
import { axiosGetFetcher, axiosPostFetcher } from '@/utils/swr-fetcher'
import { ErrorLogType } from '@/ts/types/admin'
import CustomModal from '@/components/ui/custom-modal/custom-modal'
import DeleteModalFrame from '@/components/reusable/delete-modal-frame/delete-modal-frame'
import useSWRMutation from 'swr/mutation'
import Pagination from '@/components/reusable/pagination/pagination'

const ErrorLogs = () => {
  const [errorLogs, setErrorLogs] = useState<Array<ErrorLogType> | null>(null)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const {
    isLoading: isLoadingErrorLogs,
    data: dataErrorLogs,
    error: errorErrorLogs,
    mutate: mutateErrorLogs,
  } = useSWR(
    `${APP_URL}/api/error-logs/get-all?page=${currentPage}&perPage=10`,
    axiosGetFetcher,
    {
      onSuccess: (data) => {
        setErrorLogs(data.errors)
      },
    }
  )

  const { isMutating: isLoadingDeleteErrorLogs, trigger: deleteErrorLogs } =
    useSWRMutation(`${APP_URL}/api/error-logs/delete-all`, axiosPostFetcher, {
      onSuccess: async () => {
        await mutateErrorLogs()
        setErrorLogs([])
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
    () => (errorLogs ? errorLogs : dataErrorLogs?.errors),
    [dataErrorLogs?.errors, errorLogs]
  )

  return (
    <div className={'error-logs'}>
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
              type: 'all error logs',
            }}
          />
        </CustomModal>
      )}

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
                    rowFunction={(row: ErrorLogType) => (
                      <ErrorLogRow row={row} />
                    )}
                  />
                  {dataErrorLogs.count > 10 ? (
                    <Pagination
                      allCount={dataErrorLogs.count}
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

export default ErrorLogs

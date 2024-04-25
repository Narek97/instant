import React, { FC } from 'react'
import { StyledTableCell } from '@/components/ui/custom-table/custom-table'
import dayjs from 'dayjs'
import { ErrorLogType } from '@/ts/types/admin'

interface IErrorLogRow {
  row: ErrorLogType
}

const ErrorLogRow: FC<IErrorLogRow> = ({ row }) => {
  return (
    <>
      <StyledTableCell>{row.status}</StyledTableCell>
      <StyledTableCell>{row.message}</StyledTableCell>
      <StyledTableCell>{row.type}</StyledTableCell>
      <StyledTableCell>{row.path}</StyledTableCell>
      <StyledTableCell>{row.method}</StyledTableCell>
      <StyledTableCell>
        {dayjs(row?.created_at).format('MMMM D YYYY, h:mm a')}
      </StyledTableCell>
      <StyledTableCell></StyledTableCell>
    </>
  )
}

export default ErrorLogRow

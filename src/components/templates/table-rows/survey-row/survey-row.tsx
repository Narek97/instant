import React, { FC } from 'react'
import { StyledTableCell } from '@/components/ui/custom-table/custom-table'
import { SurveyData } from '@/ts/types/surveys'

interface ISurveyRow {
  row: SurveyData
}

const SurveyRow: FC<ISurveyRow> = ({ row }) => {
  return (
    <>
      <StyledTableCell>{row.external_survey_id}</StyledTableCell>
      <StyledTableCell>{row.survey_name}</StyledTableCell>
      <StyledTableCell>{`${row.current_quota}/${row.quota}`}</StyledTableCell>
      <StyledTableCell>{row.country}</StyledTableCell>
      <StyledTableCell>{row.channel?.team?.team_name || '-'}</StyledTableCell>
      <StyledTableCell>{row.channel?.channel_name || '-'}</StyledTableCell>
      <StyledTableCell>{row.author?.qp_user_id || '-'}</StyledTableCell>
      <StyledTableCell>{row.author?.qp_user_email || '-'}</StyledTableCell>
      <StyledTableCell>
        <a
          href={row.url}
          target="_blank"
          rel="noreferrer"
          style={{ color: '#1B87E6' }}
        >
          {row.url}
        </a>
      </StyledTableCell>
    </>
  )
}

export default SurveyRow

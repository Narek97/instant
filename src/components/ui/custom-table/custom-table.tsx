"use client";
import React, { FC, memo } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TableColumnType } from "@/ts/types";
import ErrorBoundary from "@/components/reusable/error-boundary/error-boundary";

interface ICustomTable {
  columns: Array<TableColumnType>;
  rows: Array<any & { id: number }>;
  rowFunction: (row: any) => React.ReactNode;
}

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#878f99",
    color: "#ffffff",
    textWrap: "nowrap",
    fontFamily: "Fira Sans, sans-serif",
    lineHeight: "normal",
  },
  [`&.${tableCellClasses.body}`]: {
    color: "#545e6b",
    fontSize: 12,
    textWrap: "nowrap",
    fontFamily: "Fira Sans, sans-serif",
    borderBottom: "4px solid rgb(242, 242, 244)",
    lineHeight: "normal",
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {},
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CustomTable: FC<ICustomTable> = ({
  columns = [],
  rows = [],
  rowFunction,
}) => {
  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <StyledTableCell key={column.id} align={column.align || "left"}>
                  {column.renderFunction
                    ? column.renderFunction()
                    : column.name}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <ErrorBoundary key={row.id || index}>
                <StyledTableRow>{rowFunction(row)}</StyledTableRow>
              </ErrorBoundary>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default memo(CustomTable);

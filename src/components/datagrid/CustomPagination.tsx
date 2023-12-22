"use client";
import MuiPagination from "@mui/material/Pagination";
import {
  useGridSelector,
  useGridApiContext,
  gridPageCountSelector,
  GridPagination,
} from "@mui/x-data-grid";

const Pagination = ({ page, onPageChange, className }: any) => {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event, newPage - 1);
      }}
    />
  );
};

export const CustomPagination = () => (
  <GridPagination ActionsComponent={Pagination} />
);

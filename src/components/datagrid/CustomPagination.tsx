'use client';
import MuiPagination from '@mui/material/Pagination';
import {
  GridPagination,
  gridPageCountSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';

interface PaginationProps {
  page: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  className?: string;
}

const Pagination = ({ page, onPageChange, className }: PaginationProps) => {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    // Convert to a MouseEvent or ignore the event type
    onPageChange(null, newPage - 1);
  };

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={handlePageChange}
    />
  );
};

export const CustomPagination = () => (
  <GridPagination ActionsComponent={Pagination} />
);

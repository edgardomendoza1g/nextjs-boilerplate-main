import { GridSkeletonCell } from '@mui/x-data-grid';

export const DataGridSkeleton = () => {
  return (
    <div
      style={{
        display: 'grid',
        marginLeft: '5px',
        marginTop: '5px',
        gridTemplateColumns: 'auto auto auto auto auto auto auto auto auto',
        gridTemplateRows: 'auto auto auto auto auto auto auto',
        gap: '0px'
      }}>
      {/* first Row */}
      <GridSkeletonCell width={100} contentWidth={100} field="col1" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col2" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col3" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col4" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col5" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col6" align="center" />
      {/* Second Row */}
      <GridSkeletonCell width={100} contentWidth={100} field="col1" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col2" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col3" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col4" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col5" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col6" align="center" />
      {/* thrid Row */}
      <GridSkeletonCell width={100} contentWidth={100} field="col1" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col2" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col3" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col4" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col5" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col6" align="center" />
      {/* four Row */}
      <GridSkeletonCell width={100} contentWidth={100} field="col1" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col2" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col3" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col4" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col5" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col6" align="center" />
      {/* fifth Row */}
      <GridSkeletonCell width={100} contentWidth={100} field="col1" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col2" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col3" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col4" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col5" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col6" align="center" />
      {/* sixth Row */}
      <GridSkeletonCell width={100} contentWidth={100} field="col1" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col2" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col3" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col4" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col5" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col6" align="center" />
      {/* seventh Row */}
      <GridSkeletonCell width={100} contentWidth={100} field="col1" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col2" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col3" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col4" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col5" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col6" align="center" />
      {/* eight Row */}
      <GridSkeletonCell width={100} contentWidth={100} field="col1" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col2" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col3" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col4" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col5" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col6" align="center" />
      {/* nine Row */}
      <GridSkeletonCell width={100} contentWidth={100} field="col1" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col2" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col3" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col4" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col5" align="center" />
      <GridSkeletonCell width={100} contentWidth={100} field="col6" align="center" />
    </div>
  );
};

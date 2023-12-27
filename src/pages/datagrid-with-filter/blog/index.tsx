import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  Modal,
  Stack,
  Theme,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { DataGrid, GridColumnHeaders, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { CustomBreadcrumbs } from 'components/breadcrumbs/CustomBreadcrumbs';
import { CustomPagination } from 'components/datagrid/CustomPagination';
import DashboardLayout from 'components/layouts/Layout';
import { DataGridSkeleton } from 'components/skeletons/DataGridSkeleton/DataGridSkeleton';
import { localeText } from 'constants/datagridConstants';
import * as React from 'react';

const DataGridDemo = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100000,
    editable: true,
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = React.useState(true);
  const [helpType, setHelpType] = React.useState('normal');

  const endpoints = [
    {
      title: 'Endpoint 1',
      description: 'Descripción del Endpoint 1',
    },
    {
      title: 'Endpoint 2',
      description: 'Descripción del Endpoint 2',
    },
    {
      title: 'Endpoint 3',
      description: 'Descripción del Endpoint 3',
    },
  ];

  return (
    <>
      <DashboardLayout>
        <Box>
          <Stack
            direction={{ xs: 'row', sm: 'row' }}
            alignItems={'center'}
            justifyContent={'flex-start'}
            mb={0}
            ml={0}
          >
            <Typography variant="h4">DataGrid con Paginación</Typography>

            <IconButton aria-label="delete" onClick={handleOpen} color="error">
              <HelpOutlineIcon />
            </IconButton>
          </Stack>
          <CustomBreadcrumbs />
          <Modal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleClose}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                minWidth: '90%',
                bgcolor: 'background.paper',
                borderColor: 'red',
                borderWidth: '0px',
                borderStyle: 'dashed',
                borderRadius: '30px 30px 30px 30px',
                p: 5,
                margin: '0px',
                marginBottom: 3,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Información de ayuda
              </Typography>
              <Divider />
              {helpType === 'normal' && (
                <Typography
                  id="unstyled-modal-description"
                  textAlign={'justify'}
                >
                  Este será un texto de ayuda en general sobre la vista y la
                  información que contiene la misma, contendrá diferente
                  infromacion general que le ayudara al usuario final en caso de
                  dudas sobre la vista en cuestión
                </Typography>
              )}
              {helpType === 'tecnica' && (
                <Typography id="unstyled-modal-description">
                  Información sobre endpoints en esta vista:
                  <List>
                    {endpoints.map((endpoint, index) => (
                      <ListItem key={index}>
                        <strong>{endpoint.title}</strong>:{' '}
                        {endpoint.description}
                      </ListItem>
                    ))}
                  </List>
                </Typography>
              )}
              <Stack justifyContent={'space-evenly'} direction={{ sm: 'row' }}>
                <Button
                  variant="contained"
                  color="info"
                  sx={{ marginBottom: 1 }}
                  onClick={() => setHelpType('normal')}
                >
                  Ayuda Normal
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setHelpType('tecnica')}
                >
                  Ayuda Técnica
                </Button>
              </Stack>
            </Box>
          </Modal>
          <DataGrid
            {...data}
            loading={data.rows.length === 0}
            isCellEditable={() => true}
            initialState={{
              ...data.initialState,
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            autoHeight
            pageSizeOptions={[5, 10, 25]}
            getRowHeight={() => 'auto'}
            slots={{
              toolbar: GridToolbar,
              pagination: CustomPagination,
              loadingOverlay: DataGridSkeleton,
              columnHeaders: GridColumnHeaders,
            }}
            slotProps={{
              filterPanel: {
                // Display columns by ascending alphabetical order
                columnsSort: 'asc',
                filterFormProps: {
                  // Customize inputs by passing props
                  logicOperatorInputProps: {
                    variant: 'outlined',
                    size: 'small',
                  },
                  columnInputProps: {
                    variant: 'outlined',
                    size: 'small',
                    sx: { mt: 'auto' },
                  },
                  operatorInputProps: {
                    variant: 'outlined',
                    size: 'small',
                    sx: { mt: 'auto' },
                  },
                  valueInputProps: {
                    InputComponentProps: {
                      variant: 'outlined',
                      size: 'small',
                    },
                  },
                  deleteIconProps: {
                    sx: {
                      '& .MuiSvgIcon-root': {
                        color: '#fff',
                        borderColor: '#d32f2f',
                        borderWidth: 1,
                        backgroundColor: 'red',
                        borderRadius: 1,
                        marginBottom: 1,
                        width: 24,
                        height: 24,
                      },
                    },
                  },
                },
                sx: {
                  // Customize inputs using css selectors
                  '& .MuiDataGrid-filterForm': {
                    mx: 0,
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  },
                  '& .MuiDataGrid-filterFormLogicOperatorInput': {
                    mb: 2,
                    width: 300,
                  },
                  '& .MuiDataGrid-filterFormColumnInput': { mb: 2, width: 300 },
                  '& .MuiDataGrid-filterFormOperatorInput': {
                    mb: 2,
                    width: 300,
                  },
                  '& .MuiDataGrid-filterFormValueInput': { mb: 2, width: 300 },
                },
              },
            }}
            rowSpacingType={'margin'}
            checkboxSelection
            disableRowSelectionOnClick
            localeText={localeText}
            sx={{
              borderColor: (theme: Theme) =>
                `${alpha(theme.palette.grey[600], 0.5)}`,
              borderWidth: '3px',
              marginBottom: '0px',
              paddingBottom: '0px',
              backgroundColor: (theme: Theme) =>
                `${alpha(theme.palette.grey['900'], 0.01)}`,
              color: (theme: Theme) => theme.palette.primary.dark,
              border: (theme: Theme) =>
                `solid 1px ${alpha(theme.palette.divider, 0.5)}`,
              boxShadow: (theme: Theme) =>
                `1px 1px 6px 0px ${alpha(theme.palette.grey[600], 0.2)}`,
            }}
          />
        </Box>
      </DashboardLayout>
    </>
  );
};

export default DataGridDemo;

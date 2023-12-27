import SimpleBar from 'simplebar-react';
// @mui
import { Theme, alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const StyledRootScrollbar = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden'
}));

interface ExtendedSimpleBarProps extends React.ComponentProps<typeof SimpleBar> {
  timeout?: number
}

export const StyledScrollbar = styled(SimpleBar)<ExtendedSimpleBarProps>(({ theme }: { theme: Theme }) => ({
  maxHeight:                '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48)
    },
    '&.simplebar-visible:before': {
      opacity: 1
    }
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6
  },
  '& .simplebar-mask': {
    zIndex: 'inherit'
  }
}));

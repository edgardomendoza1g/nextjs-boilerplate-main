import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { FC, useState } from 'react';
import Iconify from '../iconify/Iconify';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';

const NAV_WIDTH = 310;
const HEADER_MOBILE = 56;
const HEADER_DESKTOP = 64;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 0}px)`
  }
}));

const StyledToolbar = styled(Toolbar)(() => {
  const theme = useTheme();
  return {
    height: HEADER_MOBILE,
    backgroundColor: '#f3f3f3',
    [theme.breakpoints.up('lg')]: {
      height: HEADER_DESKTOP
    }
  };
});

interface HeaderProps {
  onOpenNav: () => void
}

const Header: FC<HeaderProps> = ({ onOpenNav }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            color: 'text.primary',
            margin: 0,
            marginLeft: -2.18,
            padding: 0,
            borderWidth: 0,
            borderColor: 'red',
            borderStyle: 'solid',
            display: { lg: 'none' }
          }}>
          <Iconify sx={{ width: 35, height: 35 }} icon="eva:menu-fill" />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 4
          }}>
          <LanguagePopover />
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
};

export default Header;

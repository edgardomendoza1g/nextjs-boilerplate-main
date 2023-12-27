import { Box, Drawer } from '@mui/material';
import useResponsive from 'hooks/useResponsive';
import { useEffect } from 'react';
import Logo from '../logo/Logo';
import Scrollbar from '../scrollbar/Scrollbar';
import navConfig from './config';
import NavSection from './section/NavSection';

const NAV_WIDTH = 310;

interface NavProps {
  openNav: boolean;
  onCloseNav: () => void;
}

const Nav: React.FC<NavProps> = ({ openNav, onCloseNav }) => {
  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = (
    <>
      <Box
        sx={{
          px: 0,
          py: 0,
          width: '100%',
          marginTop: 0,
          marginBottom: 0,
          display: 'flex',
          justifyContent: 'center',
          borderWidth: 0,
          borderBottomWidth: 0,
          borderColor: 'GREY[600]',
          borderStyle: 'solid',
          borderRadius: 0,
          backgroundColor: '#f3f3f3',
        }}
      >
        <Logo />
      </Box>
      <Scrollbar
        sx={{
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ marginTop: 2 }}>
          <NavSection data={navConfig} />
        </Box>
      </Scrollbar>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              borderWidthLeft: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              borderWidthRight: 0,
              borderStyle: 'solid',
              borderColor: 'GREY[600]',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH, backgroundImage: 'none' },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
};

export default Nav;

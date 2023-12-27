'use client';

import { useState } from 'react';

import {
  ChevronRight as ChevronRightIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  Stack,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import { StyledNavItem, StyledNavItemIcon, StyledNavText } from './styles';

interface NavItemsProps {
  title: string;
  path?: string;
  icon?: React.ReactNode;
  children?: NavItemsProps[];
}

interface NavSectionProps {
  data: NavItemsProps[];
}

const NavSection: React.FC<NavSectionProps> = ({ data = [], ...other }) => {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 0 }}>
        {data.map((item: NavItemsProps) => (
          <NavItem key={item.title} {...item} />
        ))}
      </List>
    </Box>
  );
};

const NavItem: React.FC<NavItemsProps> = ({ title, path, icon, children }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const handleClickSubMenu = () => {
    if (hasChildren) {
      setOpenSubMenu(!openSubMenu);
    } else if (path) {
      router.push(path);
    }
  };

  const renderSubmenu = () => {
    if (children) {
      return (
        <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
          <List component="div" sx={{ paddingLeft: 1.2, paddingY: 0 }}>
            {children.map((child) => (
              <NavItem key={child.title} {...child} />
            ))}
          </List>
        </Collapse>
      );
    }
    return null;
  };

  const hasChildren = children && children.length > 0;
  const router = useRouter();

  const isActive = router.pathname === path;
  const theme = useTheme();
  const actualWidth = 170;

  return (
    <>
      <ListItemButton
        disableGutters
        sx={{
          padding: 0,
          marginBottom: 1,
          marginX: 2,
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
          borderBottomRightRadius: '5px',
          borderBottomLeftRadius: '5px',
        }}
        onClick={handleClickSubMenu}
      >
        <StyledNavItem
          sx={{
            fontWeight: 'fontWeightBold',
            backgroundColor:
              isActive && !hasChildren ? 'action.selected' : theme.shadows[5],
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
            borderBottomLeftRadius: '5px',
            borderStyle: 'solid',
            borderColor: 'red',
            borderWidth: 0,
          }}
        >
          <Stack direction="row" justifyContent="center" spacing={0}>
            <StyledNavItemIcon
              sx={{
                borderWidth: 0,
                borderStyle: 'solid',
                justifyContent: 'center',
              }}
            >
              {icon && icon}
            </StyledNavItemIcon>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: 48,
                width: hasChildren ? `${actualWidth}-2px` : actualWidth,
                justifyContent: 'center',
                alignContent: 'center',
                margin: 0,
                padding: 0,
                borderWidth: 0,
                borderStyle: 'solid',
              }}
            >
              <StyledNavText>{title}</StyledNavText>
            </Box>
          </Stack>
          {hasChildren && (
            <ListItemIcon sx={{ borderWidth: 0, borderStyle: 'solid' }}>
              {openSubMenu ? <ExpandMoreIcon /> : <ChevronRightIcon />}
            </ListItemIcon>
          )}
        </StyledNavItem>
      </ListItemButton>
      {renderSubmenu()}
    </>
  );
};

export default NavSection;

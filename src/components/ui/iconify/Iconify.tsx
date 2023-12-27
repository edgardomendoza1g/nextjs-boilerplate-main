import { CSSProperties, forwardRef } from 'react';
// icons
import { Icon, IconifyIcon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------
interface IconifyProps {
  icon: string | IconifyIcon;
  width?: number | string;
  sx?: CSSProperties;
  [key: string]: unknown;
}

const Iconify = forwardRef<HTMLDivElement, IconifyProps>(
  ({ icon, width = 25, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  )
);

Iconify.displayName = 'Iconify'; // Manually setting the displayName

export default Iconify;

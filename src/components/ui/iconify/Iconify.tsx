import React, { forwardRef, CSSProperties } from "react";
// icons
import { Icon, IconifyIcon } from "@iconify/react";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------
interface IconifyProps {
  icon: string | IconifyIcon;
  width?: number | string;
  sx?: CSSProperties;
  [key: string]: any;
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

export default Iconify;

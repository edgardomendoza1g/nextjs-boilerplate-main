import React, { CSSProperties, ReactNode, memo } from "react";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

interface ScrollbarProps {
  sx?: CSSProperties;
  children?: ReactNode;
}

const Scrollbar: React.FC<ScrollbarProps> = ({ children, sx, ...other }) => {
  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  // Estilos para el desplazamiento
  const scrollStyles: CSSProperties = {
    overflowY: 'auto', // 'auto' en móviles y 'scroll' en escritorio
    maxHeight: '100%', // Ajusta esto según tus necesidades
  };

  return (
    <Box sx={{ ...scrollStyles, ...sx }} {...other}>
      {children}
    </Box>
  );
};

export default memo(Scrollbar);

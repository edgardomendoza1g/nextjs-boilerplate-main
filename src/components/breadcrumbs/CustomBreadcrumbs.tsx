"use client";
import { Breadcrumbs, Link, Typography } from "@mui/material";

export const CustomBreadcrumbs = () => {
  return (
    <Breadcrumbs
      separator="›"
      sx={{
        marginY: 1,
        "& a": {
          textDecoration: "none", // Remove text decoration (underline) by default
          position: "relative", // Create a relative positioning context
          "&:hover": {
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "1px", // Adjust the height of the underline
              background: "currentColor", // Use the text color as the underline color
            },
          },
        },
      }}
      aria-label="breadcrumb"
    >
      <Link color="inherit" href="/dashboard">
        DataGrid con Filtros
      </Link>
      <Link color="inherit" href="/dashboard">
        Components
      </Link>
      <Typography color="textPrimary">Vista General</Typography>
    </Breadcrumbs>
  );
};

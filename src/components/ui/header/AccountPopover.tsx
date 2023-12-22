import { useMsal } from "@azure/msal-react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  MenuItem,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { loginRequest } from "azure-active-directory-b2c/config/authConfig";
import { MouseEvent, useState } from "react";

// Define the types for your state
type GraphData = {
  displayName?: string;
  mail?: string;
  jobTitle?: string;
};

const MENU_OPTIONS = [
  {
    label: "Inicio",
    icon: "eva:home-fill",
  },
  {
    label: "Perfil",
    icon: "eva:person-fill",
  },
  {
    label: "Ajustes",
    icon: "eva:settings-2-fill",
  },
];

const AccountPopover: React.FC = () => {
  const [open, setOpen] = useState<HTMLElement | null>(null);
  const [graphData, setGraphData] = useState<GraphData | null>(null);
  const [photo, setPhoto] = useState<string | undefined>();
  const { instance, accounts } = useMsal();

  const handleOpen = async (event: MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken, graphConfig.me).then((response) => setGraphData(response));
        callMsGraph(response.accessToken, graphConfig.mePhotoEndpoint).then((response) => setPhoto(response));
      });
  };

  const handleClosePopOverMenu = () => {
    setOpen(null);
  };

  const handleLogOut = () => {
    instance
      .logoutRedirect({
       postLogoutRedirectUri:'/',
      })
      .catch((e) => {
      console.log(e)
    })
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={photo} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClosePopOverMenu}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 230,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {graphData?.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {graphData?.mail}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {graphData?.jobTitle}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label}>{option.label}</MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={handleLogOut} sx={{ m: 1 }}>
          Cerrar sesión
        </MenuItem>
      </Popover>
    </>
  );
};

export default AccountPopover;

import { Theme, styled } from "@mui/material/styles";
import Header from "components/ui/header/Header";
import Nav from "components/ui/nav/Nav";
import { ReactNode, useState } from "react";


const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 64;

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

interface MainProps {
  theme: Theme;
}

const Main = styled("div")(({ theme }: MainProps) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 0,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  borderColor: theme.palette.primary.light,
  borderWidth: 0,
  borderLeftWidth: 0.5,
  borderStyle: "none",
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 10,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

interface DashboardLayoutProps {
  children?: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [open, setOpen] = useState(false);

  return (
   
        <StyledRoot>
          <Header onOpenNav={() => setOpen(true)} />
          <Nav openNav={open} onCloseNav={() => setOpen(false)} />
          <Main>{children}</Main>
        </StyledRoot>
    
  );
}

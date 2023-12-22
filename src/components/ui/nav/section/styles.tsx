// @mui
import { styled } from "@mui/material/styles";
import {
  ListItemIcon,
  ListItemButton,
  Typography,
  ListItemButtonProps,
  ListItemIconProps,
  TypographyProps,
} from "@mui/material";

// ----------------------------------------------------------------------
interface StyledNavItemProps extends ListItemButtonProps {}

export const StyledNavItem = styled((props: StyledNavItemProps) => (
  <ListItemButton {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  display: "flex",
  flexDirection: "row",
  height: 48,
  textTransform: "capitalize",
  color: theme.palette.text.primary,
  borderRadius: 0,
  alignItems: "center",
  justifyContent: "space-between",
  borderWidth: 0,
  borderStyle: "dotted",
  margin: 0,
  padding: 0,
}));

interface StyledNavItemIconProps extends ListItemIconProps {}

export const StyledNavItemIcon = styled((props: StyledNavItemIconProps) => (
  <ListItemIcon {...props} />
))({
  width: 48,
  height: 48,
  padding: 11,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  color: "common.white",
});

interface StyledNavTextProps extends TypographyProps {}

export const StyledNavText = styled((props: StyledNavTextProps) => (
  <Typography {...props} />
))(({ theme }) => ({
  textAlign: "left",
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 0,
  borderStyle: "solid",
  minWidth: "100%",
  margin: 0,
  padding: 0,
}));

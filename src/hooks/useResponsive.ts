// useResponsive.ts
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Breakpoint } from "@mui/material/styles";

type QueryType = "up" | "down" | "between" | "only";

export default function useResponsive(
  query: QueryType,
  start: Breakpoint,
  end?: Breakpoint
): boolean {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start));
  const mediaBetween = end
    ? useMediaQuery(theme.breakpoints.between(start, end))
    : false;
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (query === "between") {
    return mediaBetween;
  }

  return mediaOnly;
}

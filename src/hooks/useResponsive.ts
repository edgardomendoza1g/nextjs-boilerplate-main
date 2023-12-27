import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type QueryType = 'up' | 'down' | 'between' | 'only';

export default function useResponsive(
  query: QueryType,
  start: Breakpoint,
  end: Breakpoint = 'xl' // Default value to ensure it's always a valid Breakpoint
): boolean {
  const theme = useTheme();

  // Call useMediaQuery hooks unconditionally
  const mediaUp = useMediaQuery(theme.breakpoints.up(start));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start));
  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  // Return based on query type
  switch (query) {
    case 'up':
      return mediaUp;
    case 'down':
      return mediaDown;
    case 'between':
      // For 'between', return true only if end is different from the default
      return end !== 'xl' ? mediaBetween : false;
    case 'only':
    default:
      return mediaOnly;
  }
}

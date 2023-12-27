import { CSSProperties, forwardRef } from 'react';
// @mui
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

// ----------------------------------------------------------------------
interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  disabledLink?: boolean;
  sx?: CSSProperties;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const logoSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 292.89 174.78">
    <style type="text/css">
      .st0{fill:#F32735;}
    </style>
    <g>
      <g>
        <path d="M96.28,51.15l-30.31,79.58l-41.67-0.36l-0.45-79.92l28.46,0.54l-2.2,55.18l18.3-55.25L96.28,51.15z M92.69,69.73
          l-9.44,60.58l19.84,0.47l9.43-61.16L92.69,69.73z M229.25,70.91l-9.44,60.57l19.83,0.48l9.44-61.16L229.25,70.91z M166.46,83.3
          l-5.18,34.47c-2.74,15.5-23.13,13.58-23.13,13.58l-27.58-0.52L120,69.6l36.51,0.10C169.73,70.12,166.46,83.3,166.46,83.3z
           M142.35,79.94l-4.34-0.12l-5.51,39.98c0,0,6.88,1.79,9.82-5.09l4.29-29.85C146.62,84.87,147.23,79.70,142.35,79.94z
           M217.41,108.76l-3.64,22.98l-18.68-0.17l3.35-23.55c-0.49-7.77-7.71-5.25-7.71-5.25l-4.56,28.72l-19.84-0.17l8.87-61.45L212,69.9
          c8.62,0.94,9.19,10.14,9.19,10.14l-0.63,6.9C217.58,98.7,210.3,99.5,210.3,99.5C219.23,100.73,217.41,108.76,217.41,108.76z
           M194.89,78.87l-1.28,0.35l-1.94,15.21c0,0,6.93,1.5,9.87-6.24C201.54,88.19,203.93,77.81,194.89,78.87z"/>
        <path class="st0" d="M225.36,52.48l13.4,15.06c0,0,13.1-18.84,42.82-48.93c0,0-18.63,9.46-39.17,25.38l-4.58-4.35L225.36,52.48"/>
        <rect x="23.91" y="140.45" class="st0" width="216.14" height="12.24"/>
      </g>
    </g>
  </svg>
`;

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: '100%',
          height: 64,
          display: 'inline-flex',
          borderColor: 'default',
          borderWidth: 0,
          borderBottomWidth: 0,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderStyle: 'solid',
          borderRadius: 0,
          margin: 0,
          padding: 0,
          ...sx,
        }}
        {...other}
        dangerouslySetInnerHTML={{ __html: logoSVG }} // Aquí insertamos el SVG como HTML sin que sea interpretado como JSX
      />
    );

    if (disabledLink) {
      return <>{logo}</>;
    }

    return (
      <Link href="/" passHref legacyBehavior>
        <a style={{ display: 'contents' }}>{logo}</a>
      </Link>
    );
  }
);

Logo.displayName = 'Logo';

export default Logo;

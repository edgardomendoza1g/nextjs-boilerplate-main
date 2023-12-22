import type { Theme } from '@mui/material/styles';
import { alpha, createTheme, responsiveFontSizes } from '@mui/material/styles';
import typography from 'theme/typography';

const grey = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const primary = {
  lighter: "#6E6E6E", // Gris más oscuro que antes
  light: "#4B4B4B", // Gris oscuro
  main: "#1F1F1F", // Negro principal
  dark: "#111111", // Negro muy oscuro
  darker: "#050505", // Casi puro negro
  contrastText: "#fff",
};

const secondary = {
  lighter: "#EFD6FF",
  light: "#C684FF",
  main: "#8E33FF",
  dark: "#5119B7",
  darker: "#27097A",
  contrastText: "#fff",
};

const info = {
  lighter: "#CAFDF5",
  light: "#61F3F3",
  main: "#00B8D9",
  dark: "#006C9C",
  darker: "#003768",
  contrastText: "#fff",
};

const success = {
  lighter: "#D3FCD2",
  light: "#77ED8B",
  main: "#22C55E",
  dark: "#118D57",
  darker: "#065E49",
  contrastText: "#212B36",
};

const warning = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: "#212B36",
};

const error = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#fff",
};

const lightThemeOptions: Theme = createTheme({
  palette: {
    primary,
    secondary,
    info,
    success,
    warning,
    error,
    grey,
    divider: alpha(grey[500], 0.24),
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: "#fff",
      default: grey[100],
    },
  },

  typography,
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }: any) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: grey[300], // O cualquier otro color que prefieras
          }),
        }),
      },
    },
    // Puedes agregar más sobreescrituras de componentes aquí
  },
});


export default responsiveFontSizes(lightThemeOptions)

import { GlobalStyles as MUIGlobalStyles, SxProps } from '@mui/material';

const GlobalStyles = () => {
  const styles: SxProps = {
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      margin: 0,
      padding: 0,
      width: '100%',
      height: '100%',
      WebkitOverflowScrolling: 'touch',
    },
    body: {
      margin: 0,
      padding: 0,
      width: '100%',
      height: '100%',
    },
    '#root': {
      width: '100%',
      height: '100%',
    },
    input: {
      '&[type=number]': {
        MozAppearance: 'textfield',
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
          margin: 0,
          WebkitAppearance: 'none',
        },
      },
    },
    img: {
      display: 'block',
      maxWidth: '100%',
    },
    ul: {
      margin: 0,
      padding: 0,
    },
  };

  return <MUIGlobalStyles styles={styles} />;
};

export default GlobalStyles;

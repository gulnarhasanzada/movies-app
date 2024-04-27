import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#D0D0D0',
      main: '#121212',
      dark: '#000000',
      contrastText: '#eeeeee',
    },
    secondary: {
      light: '#61c8e5',
      main: '#157772',
      dark: '#265861',
      contrastText: '#ffffff',
    },
  },
});

export default theme

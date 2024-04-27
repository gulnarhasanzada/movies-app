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
      light: '#BA88FF',
      main: '#9950FF',
      dark: '#9457EB',
      contrastText: '#ffffff',
    },
  },
});

export default theme

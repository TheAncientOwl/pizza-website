import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import Layout from './components/Layout';

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        background: '#06111C',
      },
    },
  },
  palette: {
    background: {
      default: '#121317',
    },
    primary: {
      main: '#BB2020',
    },
    secondary: {
      main: '#FFEB4D',
    },
    text: {
      primary: '#FFFAFA',
      secondary: '#BEC7C7',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

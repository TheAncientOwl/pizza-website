import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import Layout from './components/Layout';

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        background: '#556779',
      },
    },
  },
  palette: {
    background: {
      default: '#111A23',
    },
    primary: {
      main: '#2A4158',
    },
    secondary: {
      main: '#556779',
    },
    text: {
      primary: '#AAB3BC',
      secondary: '#AAB3BC',
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

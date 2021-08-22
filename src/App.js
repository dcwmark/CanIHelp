import {
  createTheme,
  ThemeProvider,
  Container,
  CssBaseline,
} from '@material-ui/core';

import GIRecorder from './components/gi_recorder';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008080',
    },
  },
  typography: {
    fontFamily: [
      'FootLight',
      'Georgia',
      'Bradley Hand',
      'Papyrus',
    ].join(','),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Container>
          <GIRecorder />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

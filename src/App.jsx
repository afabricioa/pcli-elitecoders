import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: "#00ABC8"
    }
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header/>
        <Main/>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;

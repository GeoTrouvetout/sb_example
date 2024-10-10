import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import MainContent from './components/MainContent';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff',
    },
  },
  shape: {
    borderRadius: 16, // Increase border radius for more rounded corners
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <MainContent />
        <Chatbot />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
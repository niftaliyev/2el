import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import CategoryGrid from './components/CategoryGrid';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MobileBottomNav from './components/BottomNavigation';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#4caf50',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

const AppContent = () => {
  const { language } = useLanguage();
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ pb: { xs: 7, md: 0 } }}>
        <Header />
        <Container maxWidth="lg">
          <CategoryGrid language={language} />
          <MainContent />
          <Footer />
        </Container>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <MobileBottomNav />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App; 
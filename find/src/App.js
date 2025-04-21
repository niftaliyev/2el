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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Cabinet from './components/Cabinet';

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
          <Routes>
            <Route path="/" element={
              <>
                <CategoryGrid language={language} />
                <MainContent />
                <Footer />
              </>
            } />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorites" element={<div>secilmisler test</div>} />
            <Route path="/post" element={<div>elan  yerlesdir test</div>} />
            <Route path="/messages" element={<div>mesaj test</div>} />
            <Route path="/cabinet" element={<Cabinet />} />
          </Routes>
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
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App; 
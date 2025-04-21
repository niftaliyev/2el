import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Container,
  Grid,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from './Footer';

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: '1px solid #e0e0e0',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1976d2',
  },
  '& .MuiTab-root': {
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: 400,
    color: '#757575',
    '&.Mui-selected': {
      color: '#1976d2',
      fontWeight: 500,
    },
  },
}));

const StatusTabs = styled(Tabs)(({ theme }) => ({
  minHeight: '40px',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1976d2',
  },
  '& .MuiTab-root': {
    textTransform: 'none',
    minHeight: '40px',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 400,
    color: '#757575',
    '&.Mui-selected': {
      color: '#1976d2',
      fontWeight: 500,
    },
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
  '& .MuiCardMedia-root': {
    height: 0,
    paddingTop: '75%',
    position: 'relative',
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: '14px',
  padding: '16px',
  '&.MuiTableCell-head': {
    color: '#1976d2',
    fontWeight: 500,
    borderBottom: '1px solid #e0e0e0',
  },
  '&.MuiTableCell-body': {
    color: '#212121',
  },
}));

const Cabinet = () => {
  const [mainTab, setMainTab] = useState(0);
  const [statusTab, setStatusTab] = useState(0);
  const [profileData, setProfileData] = useState({
    name: 'Kamran',
    email: 'kamran@admin.com'
  });

  const handleMainTabChange = (event, newValue) => {
    setMainTab(newValue);
  };

  const handleStatusTabChange = (event, newValue) => {
    setStatusTab(newValue);
  };

  const handleProfileChange = (field) => (event) => {
    setProfileData({
      ...profileData,
      [field]: event.target.value
    });
  };

  const renderContent = () => {
    switch (mainTab) {
      case 0: // Elanlar
        return (
          <>
            <Box sx={{ mt: 2 }}>
              <StatusTabs value={statusTab} onChange={handleStatusTabChange}>
                <Tab label="Hazırda saytda (1)" />
                <Tab label="Müddəti başa çatmış (0)" />
                <Tab label="Gözləmədə (0)" />
                <Tab label="Dərc olunmamış (0)" />
              </StatusTabs>
            </Box>

            {statusTab === 0 && (
              <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <StyledCard>
                      <CardMedia
                        image="/monitor.jpg"
                        title="test"
                        sx={{
                          height: 0,
                          paddingTop: '75%',
                          position: 'relative',
                          backgroundColor: '#f5f5f5',
                        }}
                      />
                      <CardContent sx={{ p: 2, flex: 1 }}>
                        <Typography variant="h6" sx={{ 
                          fontSize: '18px',
                          fontWeight: 600,
                          color: '#1976d2',
                          mb: 1
                        }}>
                          500 AZN
                        </Typography>
                        <Typography variant="body1" sx={{
                          fontSize: '14px',
                          color: '#212121',
                          mb: 1,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}>
                          test
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          fontSize: '12px',
                          color: '#757575'
                        }}>
                          00 Yanvar 0000
                        </Typography>
                        <Box sx={{ 
                          display: 'flex', 
                          gap: 2, 
                          mt: 2,
                          borderTop: '1px solid #f5f5f5',
                          pt: 2
                        }}>
                          <Link href="#" sx={{ 
                            color: '#1976d2', 
                            textDecoration: 'none',
                            fontSize: '14px',
                            '&:hover': {
                              textDecoration: 'underline'
                            }
                          }}>
                            Düzəliş et
                          </Link>
                          <Link href="#" sx={{ 
                            color: '#1976d2', 
                            textDecoration: 'none',
                            fontSize: '14px',
                            '&:hover': {
                              textDecoration: 'underline'
                            }
                          }}>
                            Elanı sil
                          </Link>
                        </Box>
                      </CardContent>
                    </StyledCard>
                  </Grid>
                </Grid>
              </Box>
            )}
          </>
        );
      
      case 1: // Ödənişlər
        return (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 500 }}>
              Əməliyyat tarixçəsi
            </Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #e0e0e0', borderRadius: '12px' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>ELAN</StyledTableCell>
                    <StyledTableCell>ELANIN ADI</StyledTableCell>
                    <StyledTableCell>XİDMƏT</StyledTableCell>
                    <StyledTableCell>MƏBLƏĞ</StyledTableCell>
                    <StyledTableCell>MƏNBƏ</StyledTableCell>
                    <StyledTableCell>TARİX / SAAT</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <StyledTableCell>#01</StyledTableCell>
                    <StyledTableCell>
                      <Link href="#" sx={{ 
                        color: '#1976d2', 
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}>
                        Masaüstü komp...
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell>İrəli çək 15 dəfə</StyledTableCell>
                    <StyledTableCell>3,00 AZN</StyledTableCell>
                    <StyledTableCell>Balans</StyledTableCell>
                    <StyledTableCell>00.00.0000 00:00</StyledTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        );

      case 2: // Profil
        return (
          <Box sx={{ mt: 3, maxWidth: 800 }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                Profile düzəliş et
              </Typography>
            </Box>

            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box>
                <Typography sx={{ mb: 1, color: '#212121', fontSize: '14px' }}>
                  Adınız:
                </Typography>
                <TextField
                  fullWidth
                  value={profileData.name}
                  onChange={handleProfileChange('name')}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    }
                  }}
                />
              </Box>

              <Box>
                <Typography sx={{ mb: 1, color: '#212121', fontSize: '14px' }}>
                  E-mail:
                </Typography>
                <TextField
                  fullWidth
                  value={profileData.email}
                  onChange={handleProfileChange('email')}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    }
                  }}
                />
              </Box>

              <Box>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#1976d2',
                    color: 'white',
                    textTransform: 'none',
                    borderRadius: '8px',
                    padding: '10px 24px',
                    fontSize: '14px',
                    '&:hover': {
                      bgcolor: '#1565c0',
                    }
                  }}
                >
                  Yadda saxla
                </Button>
              </Box>
            </Box>

            <Typography sx={{ 
              mt: 4, 
              color: '#757575', 
              fontSize: '14px',
              textAlign: 'center'
            }}>
              Profil nömrəsi: 13710694
            </Typography>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flex: '1 0 auto' }}>
        <Container maxWidth="lg">
          <Box sx={{ py: 3 }}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#212121' }}>
                Şəxsi kabinet
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box>
                  <Typography variant="body2" sx={{ color: '#757575', mb: 0.5 }}>
                    Şəxsi hesab
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 500 }}>
                    0,00 AZN
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#1976d2',
                    color: '#1976d2',
                    textTransform: 'none',
                    fontSize: '14px',
                    '&:hover': {
                      borderColor: '#1565c0',
                    },
                  }}
                >
                  Artır
                </Button>
              </Box>
            </Box>

            {/* Main Tabs */}
            <StyledTabs value={mainTab} onChange={handleMainTabChange}>
              <Tab label="Elanlar" />
              <Tab label="Ödənişlər" />
              <Tab label="Profil" />
            </StyledTabs>

            {/* Content */}
            {renderContent()}
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Cabinet; 
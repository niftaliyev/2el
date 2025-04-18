import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import DiamondIcon from '@mui/icons-material/Diamond';

const PremiumCard = styled(Paper)(({ theme }) => ({
  padding: 0,
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  }
}));

const ListingBadges = ({ isPremium, isVip }) => (
  <Box
    sx={{
      position: 'absolute',
      top: 8,
      right: 24,
      display: 'flex',
      gap: 0.5,
      zIndex: 2
    }}
  >
    {isPremium && (
      <Box
        sx={{
          bgcolor: '#ffd700',
          borderRadius: '4px',
          width: 20,
          height: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <StarIcon sx={{ fontSize: 14, color: '#fff' }} />
      </Box>
    )}
    {isVip && (
      <Box
        sx={{
          bgcolor: '#ff4081',
          borderRadius: '4px',
          width: 20,
          height: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <DiamondIcon sx={{ fontSize: 14, color: '#fff' }} />
      </Box>
    )}
  </Box>
);

const laptopImage = 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/Dell-XPS-13-9340-laptop.JPG';

const MainContent = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', pt: 3, pb: 6 }}>
      <Container 
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3 },
          mx: 'auto',
          width: '100%'
        }}
      >
        {/* Premium Listings Section */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ 
              color: { xs: '#6B7280', sm: '#212121' },
              fontWeight: { xs: 400, sm: 500 },
              fontSize: { xs: '14px', sm: '20px' },
              fontFamily: { xs: 'Inter', sm: 'inherit' },
              textTransform: { xs: 'uppercase', sm: 'none' },
              letterSpacing: { xs: '0.5px', sm: 'normal' }
            }}>
              PREMİUM ELANLAR
            </Typography>
            <Button 
              sx={{ 
                color: '#1976d2',
                textTransform: 'none',
                fontSize: '14px',
                textDecoration: { xs: 'underline', sm: 'none' },
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#1565c0',
                }
              }}
            >
              Son elanlar
            </Button>
          </Box>
          
          <Grid container spacing={2}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={6} sm={6} md={3} key={item}>
                <PremiumCard elevation={0}>
                  <Box 
                    sx={{ 
                      position: 'relative',
                      height: { xs: '90px', sm: '200px' },
                      width: { xs: '160.5px', sm: '100%' },
                      bgcolor: '#e0e0e0',
                      borderRadius: '8px 8px 0 0',
                      backgroundImage: `url(${laptopImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      overflow: 'hidden',
                      margin: { xs: '0 auto', sm: 0 }
                    }}
                  >
                    <ListingBadges isPremium />
                  </Box>
                  <Box sx={{ 
                    p: { xs: 1, sm: 1.5 },
                    width: { xs: '160.5px', sm: '100%' },
                    margin: { xs: '0 auto', sm: 0 },
                    bgcolor: '#fff',
                    borderRadius: '0 0 8px 8px'
                  }}>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '13px', sm: '16px' },
                        fontWeight: 500,
                        color: '#212121',
                        mb: 0.5
                      }}
                    >
                      Noutbuk
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '15px', sm: '18px' },
                        fontWeight: 700,
                        color: '#1976d2',
                        mb: 0.5
                      }}
                    >
                      0 AZN
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '11px', sm: '13px' },
                        color: '#757575'
                      }}
                    >
                      Bakı, bugün 00:00
                    </Typography>
                  </Box>
                </PremiumCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* VIP Listings Section */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#212121', fontWeight: 500 }}>
              VIP Elanlar
            </Typography>
            <Button 
              sx={{ 
                color: '#1976d2',
                textTransform: 'none',
                fontSize: '14px',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#1565c0',
                }
              }}
            >
              Bütün VIP elanlar
            </Button>
          </Box>
          
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6, 8].map((item) => (
              <Grid item xs={6} sm={6} md={3} key={item}>
                <PremiumCard elevation={0}>
                  <Box 
                    sx={{ 
                      position: 'relative',
                      height: { xs: '90px', sm: '200px' },
                      width: { xs: '160.5px', sm: '100%' },
                      bgcolor: '#e0e0e0',
                      borderRadius: '8px 8px 0 0',
                      backgroundImage: `url(${laptopImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      overflow: 'hidden',
                      margin: { xs: '0 auto', sm: 0 }
                    }}
                  >
                    <ListingBadges isVip />
                  </Box>
                  <Box sx={{ 
                    p: { xs: 1, sm: 1.5 },
                    width: { xs: '160.5px', sm: '100%' },
                    margin: { xs: '0 auto', sm: 0 },
                    bgcolor: '#fff',
                    borderRadius: '0 0 8px 8px'
                  }}>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '13px', sm: '16px' },
                        fontWeight: 500,
                        color: '#212121',
                        mb: 0.5
                      }}
                    >
                      Noutbuk
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '15px', sm: '18px' },
                        fontWeight: 700,
                        color: '#1976d2',
                        mb: 0.5
                      }}
                    >
                      0 AZN
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '11px', sm: '13px' },
                        color: '#757575'
                      }}
                    >
                      Bakı, bugün 00:00
                    </Typography>
                  </Box>
                </PremiumCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Latest Listings Section */}
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#212121', fontWeight: 500 }}>
              Son Elanlar
            </Typography>
          </Box>
          
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Grid item xs={6} sm={6} md={3} key={item}>
                <PremiumCard elevation={0}>
                  <Box 
                    sx={{ 
                      position: 'relative',
                      height: { xs: '90px', sm: '200px' },
                      width: { xs: '160.5px', sm: '100%' },
                      bgcolor: '#e0e0e0',
                      borderRadius: '8px 8px 0 0',
                      backgroundImage: `url(${laptopImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      overflow: 'hidden',
                      margin: { xs: '0 auto', sm: 0 }
                    }}
                  >
                    <ListingBadges isPremium isVip />
                  </Box>
                  <Box sx={{ 
                    p: { xs: 1, sm: 1.5 },
                    width: { xs: '160.5px', sm: '100%' },
                    margin: { xs: '0 auto', sm: 0 },
                    bgcolor: '#fff',
                    borderRadius: '0 0 8px 8px'
                  }}>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '13px', sm: '16px' },
                        fontWeight: 500,
                        color: '#212121',
                        mb: 0.5
                      }}
                    >
                      Noutbuk
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '15px', sm: '18px' },
                        fontWeight: 700,
                        color: '#1976d2',
                        mb: 0.5
                      }}
                    >
                      0 AZN
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '11px', sm: '13px' },
                        color: '#757575'
                      }}
                    >
                      Bakı, bugün 00:00
                    </Typography>
                  </Box>
                </PremiumCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MainContent; 
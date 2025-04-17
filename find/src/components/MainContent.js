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
  borderRadius: 0,
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
      right: 8,
      display: 'flex',
      gap: 0.5,
      zIndex: 1
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
          justifyContent: 'center'
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
          justifyContent: 'center'
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
            <Typography variant="h6" sx={{ color: '#212121', fontWeight: 500 }}>
              Premium Elanlar
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
              Bütün elanlar
            </Button>
          </Box>
          
          <Grid container spacing={2}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={6} sm={6} md={3} key={item}>
                <PremiumCard elevation={0}>
                  <Box 
                    sx={{ 
                      position: 'relative',
                      height: { xs: 160, sm: 200 },
                      bgcolor: '#e0e0e0',
                      borderRadius: 0,
                      backgroundImage: `url(${laptopImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    <ListingBadges isPremium />
                  </Box>
                  <Box sx={{ p: 1.5 }}>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '13px', sm: '16px' },
                        fontWeight: 500,
                        color: '#212121',
                        mb: 1,
                      }}
                    >
                      Noutbuk
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '15px', sm: '18px' },
                        fontWeight: 700,
                        color: '#1976d2',
                      }}
                    >
                      0 AZN
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '11px', sm: '13px' },
                        color: '#757575',
                        mt: 1,
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
                      height: { xs: 160, sm: 200 },
                      bgcolor: '#e0e0e0',
                      borderRadius: 0,
                      backgroundImage: `url(${laptopImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    <ListingBadges isVip />
                  </Box>
                  <Box sx={{ p: 1.5 }}>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '13px', sm: '16px' },
                        fontWeight: 500,
                        color: '#212121',
                        mb: 1,
                      }}
                    >
                      Noutbuk
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '15px', sm: '18px' },
                        fontWeight: 700,
                        color: '#1976d2',
                      }}
                    >
                      0 AZN
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '11px', sm: '13px' },
                        color: '#757575',
                        mt: 1,
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
                      height: { xs: 160, sm: 200 },
                      bgcolor: '#e0e0e0',
                      borderRadius: 0,
                      backgroundImage: `url(${laptopImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    <ListingBadges isPremium isVip />
                  </Box>
                  <Box sx={{ p: 1.5 }}>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '13px', sm: '16px' },
                        fontWeight: 500,
                        color: '#212121',
                        mb: 1,
                      }}
                    >
                      Noutbuk
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '15px', sm: '18px' },
                        fontWeight: 700,
                        color: '#1976d2',
                      }}
                    >
                      0 AZN
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '11px', sm: '13px' },
                        color: '#757575',
                        mt: 1,
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
import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import DiamondIcon from '@mui/icons-material/Diamond';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Posts from './Posts';

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
      right: 8,
      display: 'flex',
      gap: 1,
    }}
  >
    {isPremium && (
      <Chip
        icon={<StarIcon sx={{ color: '#FFD700 !important' }} />}
        label="Premium"
        size="small"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: '#fff',
          height: { xs: '20px', sm: '24px' },
          '& .MuiChip-label': {
            fontSize: { xs: '10px', sm: '12px' },
            padding: { xs: '0 6px', sm: '0 8px' },
          },
          '& .MuiChip-icon': {
            fontSize: { xs: '14px', sm: '16px' },
          },
        }}
      />
    )}
    {isVip && (
      <Chip
        icon={<DiamondIcon sx={{ color: '#FFD700 !important' }} />}
        label="VIP"
        size="small"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: '#fff',
          height: { xs: '20px', sm: '24px' },
          '& .MuiChip-label': {
            fontSize: { xs: '10px', sm: '12px' },
            padding: { xs: '0 6px', sm: '0 8px' },
          },
          '& .MuiChip-icon': {
            fontSize: { xs: '14px', sm: '16px' },
          },
        }}
      />
    )}
  </Box>
);

const laptopImage = 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/Dell-XPS-13-9340-laptop.JPG';

const MainContent = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 2 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 0.5, sm: 2 } }}>
        {/* Add Posts component at the top */}
        {/* <Posts /> */}
        
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
          
          <Grid container spacing={{ xs: 1, sm: 2 }}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={6} sm={6} md={3} key={item}>
                <PremiumCard elevation={0}>
                  <Box 
                    sx={{ 
                      position: 'relative',
                      height: { xs: '156px', sm: '200px' },
                      width: '100%',
                      bgcolor: '#e0e0e0',
                      borderRadius: '8px 8px 0 0',
                      backgroundImage: `url(${laptopImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    <ListingBadges isPremium />
                  </Box>
                  <Box sx={{ 
                    p: { xs: 1, sm: 1.5 },
                    bgcolor: '#fff',
                    borderRadius: '0 0 8px 8px'
                  }}>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '12px', sm: '16px' },
                        fontWeight: 500,
                        color: '#212121',
                        mb: 0.5,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Noutbuk
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '14px', sm: '18px' },
                        fontWeight: 700,
                        color: '#1976d2',
                        mb: 0.5
                      }}
                    >
                      0 AZN
                    </Typography>
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      fontSize: { xs: '10px', sm: '13px' },
                      color: '#757575'
                    }}>
                      <LocationOnIcon sx={{ fontSize: { xs: '12px', sm: '16px' } }} />
                      <Typography component="span" sx={{ fontSize: 'inherit' }}>
                        Bakı,
                      </Typography>
                      <AccessTimeIcon sx={{ fontSize: { xs: '12px', sm: '16px' }, ml: 0.5 }} />
                      <Typography component="span" sx={{ fontSize: 'inherit' }}>
                        bugün 00:00
                      </Typography>
                    </Box>
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
          
          <Grid container spacing={{ xs: 1, sm: 2 }}>
            {[1, 2, 3, 4, 5, 6, 8].map((item) => (
              <Grid item xs={6} sm={6} md={3} key={item}>
                <PremiumCard elevation={0}>
                  <Box 
                    sx={{ 
                      position: 'relative',
                      height: { xs: '156px', sm: '200px' },
                      width: '100%',
                      bgcolor: '#e0e0e0',
                      borderRadius: '8px 8px 0 0',
                      backgroundImage: `url(${laptopImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    <ListingBadges isVip />
                  </Box>
                  <Box sx={{ 
                    p: { xs: 1, sm: 1.5 },
                    bgcolor: '#fff',
                    borderRadius: '0 0 8px 8px'
                  }}>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '12px', sm: '16px' },
                        fontWeight: 500,
                        color: '#212121',
                        mb: 0.5,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Noutbuk
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '14px', sm: '18px' },
                        fontWeight: 700,
                        color: '#1976d2',
                        mb: 0.5
                      }}
                    >
                      0 AZN
                    </Typography>
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      fontSize: { xs: '10px', sm: '13px' },
                      color: '#757575'
                    }}>
                      <LocationOnIcon sx={{ fontSize: { xs: '12px', sm: '16px' } }} />
                      <Typography component="span" sx={{ fontSize: 'inherit' }}>
                        Bakı,
                      </Typography>
                      <AccessTimeIcon sx={{ fontSize: { xs: '12px', sm: '16px' }, ml: 0.5 }} />
                      <Typography component="span" sx={{ fontSize: 'inherit' }}>
                        bugün 00:00
                      </Typography>
                    </Box>
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
          
          <Grid container spacing={{ xs: 1, sm: 2 }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Grid item xs={6} sm={6} md={3} key={item}>
                <PremiumCard elevation={0}>
                  <Box 
                    sx={{ 
                      position: 'relative',
                      height: { xs: '156px', sm: '200px' },
                      width: '100%',
                      bgcolor: '#e0e0e0',
                      borderRadius: '8px 8px 0 0',
                      backgroundImage: `url(${laptopImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    <ListingBadges isPremium isVip />
                  </Box>
                  <Box sx={{ 
                    p: { xs: 1, sm: 1.5 },
                    bgcolor: '#fff',
                    borderRadius: '0 0 8px 8px'
                  }}>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '12px', sm: '16px' },
                        fontWeight: 500,
                        color: '#212121',
                        mb: 0.5,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Noutbuk
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '14px', sm: '18px' },
                        fontWeight: 700,
                        color: '#1976d2',
                        mb: 0.5
                      }}
                    >
                      0 AZN
                    </Typography>
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      fontSize: { xs: '10px', sm: '13px' },
                      color: '#757575'
                    }}>
                      <LocationOnIcon sx={{ fontSize: { xs: '12px', sm: '16px' } }} />
                      <Typography component="span" sx={{ fontSize: 'inherit' }}>
                        Bakı,
                      </Typography>
                      <AccessTimeIcon sx={{ fontSize: { xs: '12px', sm: '16px' }, ml: 0.5 }} />
                      <Typography component="span" sx={{ fontSize: 'inherit' }}>
                        bugün 00:00
                      </Typography>
                    </Box>
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
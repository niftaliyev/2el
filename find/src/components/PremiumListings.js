import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';

const premiumListings = [
  {
    id: 1,
    title: 'Lenovo LOQ 15ARP9 83JC005JRK',
    price: '1 519 AZN',
    location: 'Bakı',
    time: 'bugün 00:00',
    image: 'https://via.placeholder.com/300x200',
    premium: true,
    featured: true,
  },
  {
    id: 2,
    title: 'Vitrin aksesuarları',
    price: '34 AZN',
    location: 'Bakı',
    time: 'bugün 00:00',
    image: 'https://via.placeholder.com/300x200',
    premium: true,
    featured: true,
  },
  {
    id: 3,
    title: 'Vitrin',
    price: '65 AZN',
    location: 'Bakı',
    time: 'bugün 00:00',
    image: 'https://via.placeholder.com/300x200',
    premium: true,
    featured: false,
  },
];

const PremiumListings = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6" component="h2">
          PREMIUM ELANLAR
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'primary.main', cursor: 'pointer' }}
        >
          Son elanlar
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {premiumListings.map((listing) => (
          <Grid item xs={12} sm={6} md={4} key={listing.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                '&:hover': {
                  boxShadow: 3,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={listing.image}
                alt={listing.title}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  display: 'flex',
                  gap: 1,
                }}
              >
                {listing.premium && (
                  <Chip
                    icon={<StarIcon sx={{ color: '#FFD700 !important' }} />}
                    label="Premium"
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      color: '#fff',
                    }}
                  />
                )}
                <FavoriteIcon
                  sx={{
                    color: '#fff',
                    cursor: 'pointer',
                    filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))',
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ 
                    fontWeight: 'bold', 
                    mb: 1,
                    color: '#1976d2',
                    fontSize: '18px'
                  }}
                >
                  {listing.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {listing.title}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: 'block' }}
                >
                  {listing.location}, {listing.time}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PremiumListings; 
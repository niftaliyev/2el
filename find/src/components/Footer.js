import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#fff',
        py: 6,
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                color: '#212121',
                fontWeight: 500,
                fontSize: '16px',
                mb: 2,
              }}
            >
              2el.az
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: '#757575',
                  fontSize: '14px',
                  '&:hover': { color: '#212121' },
                }}
              >
                Haqqımızda
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: '#757575',
                  fontSize: '14px',
                  '&:hover': { color: '#212121' },
                }}
              >
                Qaydalar
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: '#757575',
                  fontSize: '14px',
                  '&:hover': { color: '#212121' },
                }}
              >
                İstifadəçi razılaşması
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: '#757575',
                  fontSize: '14px',
                  '&:hover': { color: '#212121' },
                }}
              >
                Məxfilik siyasəti
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                color: '#212121',
                fontWeight: 500,
                fontSize: '16px',
                mb: 2,
              }}
            >
              Yardım
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: '#757575',
                  fontSize: '14px',
                  '&:hover': { color: '#212121' },
                }}
              >
                Tez-tez verilən suallar
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: '#757575',
                  fontSize: '14px',
                  '&:hover': { color: '#212121' },
                }}
              >
                Əlaqə
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: '#757575',
                  fontSize: '14px',
                  '&:hover': { color: '#212121' },
                }}
              >
                Saytın xəritəsi
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                color: '#212121',
                fontWeight: 500,
                fontSize: '16px',
                mb: 2,
              }}
            >
              Əlavə
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: '#757575',
                  fontSize: '14px',
                  '&:hover': { color: '#212121' },
                }}
              >
                Reklam yerləşdirin
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: '#757575',
                  fontSize: '14px',
                  '&:hover': { color: '#212121' },
                }}
              >
                Premium elanlar
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: '#757575',
                  fontSize: '14px',
                  '&:hover': { color: '#212121' },
                }}
              >
                Mağazalar
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                color: '#212121',
                fontWeight: 500,
                fontSize: '16px',
                mb: 2,
              }}
            >
              Sosial media
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                sx={{
                  color: '#212121',
                  '&:hover': { color: '#212121' },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: '#212121',
                  '&:hover': { color: '#212121' },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: '#212121',
                  '&:hover': { color: '#212121' },
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: '#757575',
              fontSize: '14px',
            }}
          >
            © 2024 2el.az - Pulsuz Elanlar Saytı
          </Typography>
          {/* <Box sx={{ display: 'flex', gap: 2 }}>
            <Link
              href="#"
              underline="none"
              sx={{
                color: '#757575',
                fontSize: '14px',
                '&:hover': { color: '#212121' },
              }}
            >
              Mobil versiya
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{
                color: '#757575',
                fontSize: '14px',
                '&:hover': { color: '#212121' },
              }}
            >
              Desktop versiya
            </Link>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HistoryIcon from '@mui/icons-material/History';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useTranslation } from '../locales';
import { useLanguage } from '../contexts/LanguageContext';

const MobileProfile = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <Box sx={{ p: 2, pb: 8, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Box sx={{ mb: 3, textAlign: 'center', bgcolor: '#fff', p: 3, borderRadius: 0 }}>
        <PersonIcon sx={{ fontSize: 60, color: 'grey.500', mb: 1 }} />
        <Typography variant="h6">{t('profile.guest')}</Typography>
        <Typography variant="body2" color="text.secondary">
          {t('profile.guest_message')}
        </Typography>
      </Box>
      
      <List sx={{ bgcolor: '#fff' }}>
        <ListItem button>
          <ListItemIcon>
            <FavoriteIcon sx={{ color: '#666' }} />
          </ListItemIcon>
          <ListItemText 
            primary={t('profile.favorites')}
            primaryTypographyProps={{
              sx: { fontSize: '15px', fontWeight: 400 }
            }}
          />
        </ListItem>
        
        <Divider />
        
        <ListItem button>
          <ListItemIcon>
            <HistoryIcon sx={{ color: '#666' }} />
          </ListItemIcon>
          <ListItemText 
            primary={t('profile.view_history')}
            primaryTypographyProps={{
              sx: { fontSize: '15px', fontWeight: 400 }
            }}
          />
        </ListItem>
        
        <Divider />
        
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon sx={{ color: '#666' }} />
          </ListItemIcon>
          <ListItemText 
            primary={t('profile.settings')}
            primaryTypographyProps={{
              sx: { fontSize: '15px', fontWeight: 400 }
            }}
          />
        </ListItem>
        
        <Divider />
        
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon sx={{ color: '#666' }} />
          </ListItemIcon>
          <ListItemText 
            primary={t('profile.login')}
            primaryTypographyProps={{
              sx: { fontSize: '15px', fontWeight: 400 }
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

const DesktopProfile = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>{t('profile.guest')}</Typography>
      
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 4 }}>
        <Box sx={{ p: 3, border: '1px solid', borderColor: 'grey.200', borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>{t('profile.settings')}</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={t('profile.edit_profile')} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={t('profile.settings')} />
            </ListItem>
          </List>
        </Box>
        
        <Box sx={{ p: 3, border: '1px solid', borderColor: 'grey.200', borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>{t('profile.my_listings')}</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary={t('profile.favorites')} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary={t('profile.view_history')} />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

const Profile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return isMobile ? <MobileProfile /> : <DesktopProfile />;
};

export default Profile; 
import React from 'react';
import { 
  Box, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  Typography,
  Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: <PersonIcon />,
      text: 'Kamran Niftaliyev',
      primary: true,
      onClick: () => navigate('/cabinet')
    },
    {
      icon: <ListAltIcon />,
      text: 'Mənim elanlarım',
      onClick: () => navigate('/cabinet')
    },
    {
      icon: <AccountCircleIcon />,
      text: 'Şəxsi hesabı artır'
    },
    {
      icon: <FavoriteIcon />,
      text: 'Seçilmişlər'
    },
    {
      icon: <LogoutIcon />,
      text: 'Çıxış'
    }
  ];

  return (
    <Box sx={{ 
      width: '100%',
      bgcolor: 'background.paper',
    }}>
      <List sx={{ p: 0 }}>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.text}>
            <ListItem 
              button
              onClick={item.onClick}
              sx={{ 
                py: 1.5,
                px: 2,
                '&:hover': {
                  bgcolor: 'rgba(25, 118, 210, 0.04)'
                }
              }}
            >
              <ListItemIcon sx={{ 
                minWidth: 36,
                color: item.primary ? '#1976d2' : '#757575'
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: item.primary ? '#1976d2' : '#424242',
                      fontWeight: item.primary ? 500 : 400,
                      fontSize: '14px'
                    }}
                  >
                    {item.text}
                  </Typography>
                }
              />
            </ListItem>
            {index < menuItems.length - 1 && (
              <Divider variant="fullWidth" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Profile; 
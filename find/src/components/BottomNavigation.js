import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';

const StyledBottomNav = styled(BottomNavigation)({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '49px',
  backgroundColor: '#fff',
  borderTop: '1px solid #e0e0e0',
  zIndex: 1000,
  '& .MuiBottomNavigationAction-root': {
    minWidth: 'auto',
    padding: '6px 0',
    color: '#8d8d8d',
    '& .MuiBottomNavigationAction-label': {
      fontSize: '10px',
      fontFamily: 'Roboto',
      fontWeight: 500,
    },
    '& .MuiSvgIcon-root': {
      width: '24px',
      height: '24px',
    },
    '&.Mui-selected': {
      color: '#1976d2',
    }
  }
});

const MobileBottomNav = () => {
  const [value, setValue] = useState('home');

  return (
    <StyledBottomNav
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction 
        label="ƏSAS" 
        value="home"
        icon={<HomeIcon />} 
      />
      <BottomNavigationAction 
        label="SEÇİLMİŞLƏR" 
        value="favorites"
        icon={<FavoriteIcon />} 
      />
      <BottomNavigationAction 
        label="YENİ ELAN" 
        value="new"
        icon={<AddIcon sx={{ color: '#1976d2' }} />}
        sx={{
          '& .MuiBottomNavigationAction-label': {
            color: '#1976d2'
          }
        }}
      />
      <BottomNavigationAction 
        label="MESAJLAR" 
        value="messages"
        icon={<ChatIcon />} 
      />
      <BottomNavigationAction 
        label="KABİNET" 
        value="profile"
        icon={<PersonIcon />} 
      />
    </StyledBottomNav>
  );
};

export default MobileBottomNav; 
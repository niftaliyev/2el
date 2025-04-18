import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/material';

const StyledBottomNav = styled(BottomNavigation)({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '49px',
  backgroundColor: '#fff',
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

const AddButton = styled(Box)(({ theme }) => ({
  position: 'fixed',
  left: '50%',
  bottom: '28px',
  transform: 'translateX(-50%)',
  width: '56px',
  height: '56px',
  borderRadius: '50%',
  backgroundColor: '#1976d2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  cursor: 'pointer',
  zIndex: 1100,
  '& .MuiSvgIcon-root': {
    color: 'white',
    width: '32px',
    height: '32px'
  }
}));

const MobileBottomNav = () => {
  const [value, setValue] = useState('home');

  return (
    <>
      <StyledBottomNav
        value={value}
        onChange={(event, newValue) => {
          if (newValue !== 'new') {
            setValue(newValue);
          }
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
          icon={<Box sx={{ width: 56, height: 24 }} />}
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
      <AddButton>
        <AddIcon />
      </AddButton>
    </>
  );
};

export default MobileBottomNav; 
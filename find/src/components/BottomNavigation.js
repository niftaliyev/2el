import React from 'react';
import { Paper, BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/material/styles';
import { useTranslation } from '../locales';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const StyledBottomNavigation = styled(BottomNavigation)({
  height: '49px',
  backgroundColor: '#fff'
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
  color: '#9CA3AF',
  minWidth: '20%',
  padding: '6px 0',
  '&.Mui-selected': {
    color: '#000000',
  },
  '& .MuiBottomNavigationAction-label': {
    fontSize: '10px',
    lineHeight: 1.2,
    marginTop: '2px',
    fontWeight: 400,
    fontFamily: 'Roboto, sans-serif',
    opacity: 1,
    transform: 'none',
    '&.Mui-selected': {
      fontSize: '10px'
    }
  },
  '& .MuiSvgIcon-root': {
    width: '22px',
    height: '22px',
    color: 'inherit',
    marginBottom: '2px'
  }
});

const MobileBottomNav = () => {
  const [value, setValue] = React.useState(0);
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch(newValue) {
      case 0: // Search
        navigate('/');
        break;
      case 1: // Favorites
        navigate('/favorites');
        break;
      case 2: // Post
        navigate('/post');
        break;
      case 3: // Messages
        navigate('/messages');
        break;
      case 4: // Profile
        navigate('/profile');
        break;
      default:
        break;
    }
  };

  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        zIndex: 1000,
        boxShadow: 'none'
      }} 
      elevation={0}
    >
      <StyledBottomNavigation
        value={value}
        onChange={handleChange}
      >
        <StyledBottomNavigationAction
          label={t('navigation.search')}
          icon={<SearchIcon />}
        />
        <StyledBottomNavigationAction
          label={t('navigation.favorites')}
          icon={<FavoriteIcon />}
        />
        <StyledBottomNavigationAction
          label={t('navigation.post')}
          icon={<AddCircleOutlineIcon />}
        />
        <StyledBottomNavigationAction
          label={t('navigation.messages')}
          icon={<ChatBubbleIcon />}
        />
        <StyledBottomNavigationAction
          label={t('navigation.profile')}
          icon={<PersonIcon />}
        />
      </StyledBottomNavigation>
    </Paper>
  );
};

export default MobileBottomNav; 
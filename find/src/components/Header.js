import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
  Select,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  Container,
  useMediaQuery,
  useTheme,
  Modal,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Popover,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import SportsIcon from '@mui/icons-material/Sports';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import PetsIcon from '@mui/icons-material/Pets';
import WorkIcon from '@mui/icons-material/Work';
import AppsIcon from '@mui/icons-material/Apps';
import StoreIcon from '@mui/icons-material/Store';
import ChatIcon from '@mui/icons-material/Chat';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLanguage } from '../contexts/LanguageContext';
import Profile from './Profile';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  backgroundColor: '#fff',
  border: '1px solid #e0e0e0',
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    border: '1px solid #bdbdbd',
  },
  '&:focus-within': {
    border: '1px solid #1976d2',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#9e9e9e',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#424242',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: '12px 12px 12px 48px',
    fontSize: '14px',
    width: '100%',
    '&::placeholder': {
      color: '#9e9e9e',
      opacity: 1,
    },
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '8px',
  border: '1px solid #e0e0e0',
  minWidth: 140,
  height: '42px',
  '& .MuiSelect-select': {
    padding: '8px 14px',
    fontSize: '14px',
    color: '#424242',
  },
  '&:hover': {
    border: '1px solid #bdbdbd',
  },
  '&.Mui-focused': {
    border: '1px solid #1976d2',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
  borderTop: '1px solid #e0e0e0',
  zIndex: 1000,
  height: '60px',
  '& .MuiBottomNavigationAction-root': {
    color: '#757575',
    minWidth: 'auto',
    padding: '6px 0',
    '&.Mui-selected': {
      color: '#1976d2',
    },
  },
  '& .MuiBottomNavigationAction-label': {
    fontSize: '12px',
    '&.Mui-selected': {
      fontSize: '12px',
    },
  },
}));

const categories = [
  {
    id: 'neqliyyat',
    title: 'Nəqliyyat',
    icon: <DirectionsCarIcon />,
    subcategories: [
      { name: 'Bütün elanlar', count: 0 },
      { name: 'Ehtiyat hissələri və aksesuarlar', count: 0 },
      { name: 'Avtomobillər', count: 0 },
      { name: 'Qeydiyyat nişanları', count: 0 },
      { name: 'Tikinti texnikası', count: 0 },
      { name: 'Su nəqliyyatı', count: 0 },
      { name: 'Motosikletlər və mopedlər', count: 0 },
      { name: 'Avtobuslar', count: 0 }
    ]
  },
  {
    id: 'elektronika',
    title: 'Elektronika',
    icon: <PhoneIphoneIcon />,
    subcategories: [
      { name: 'Telefonlar', count: 0 },
      { name: 'Kompüterlər', count: 0 },
      { name: 'Audio və video', count: 0 },
      { name: 'Foto texnika', count: 0 }
    ]
  },
  {
    id: 'ehtiyat-hisseleri',
    title: 'Ehtiyat hissələri və aksesuarlar',
    description: '2el.az-da avtomobil ehtiyat hissələri və aksesuar...',
    icon: <BuildIcon />,
    subcategories: [
      { name: 'Avtomobil üçün', count: 0 },
      { name: 'Motosiklet üçün', count: 0 }
    ]
  },
  {
    id: 'ev-ve-bag',
    title: 'Ev və bağ üçün',
    icon: <HomeIcon />,
    subcategories: [
      { name: 'Mebel', count: 0 },
      { name: 'Təmir və tikinti', count: 0 },
      { name: 'Məişət texnikası', count: 0 }
    ]
  },
  {
    id: 'dasinmaz',
    title: 'Daşınmaz əmlak',
    icon: <HomeIcon />,
    subcategories: [
      { name: 'Mənzillər', count: 0 },
      { name: 'Həyət evləri', count: 0 },
      { name: 'Torpaq', count: 0 },
      { name: 'Obyektlər və ofislər', count: 0 },
      { name: 'Qarajlar', count: 0 }
    ]
  },
  {
    id: 'xidmetler',
    title: 'Xidmətlər və biznes',
    icon: <BuildIcon />,
    subcategories: [
      { name: 'Xidmətlər', count: 0 },
      { name: 'Biznes üçün avadanlıq', count: 0 },
      { name: 'İş elanları', count: 0 }
    ]
  },
  {
    id: 'sexsi',
    title: 'Şəxsi əşyalar',
    icon: <LocalLaundryServiceIcon />,
    subcategories: [
      { name: 'Geyim', count: 0 },
      { name: 'Aksesuarlar', count: 0 },
      { name: 'Sağlamlıq', count: 0 }
    ]
  },
  {
    id: 'telefonlar',
    title: 'Telefonlar',
    icon: <PhoneIphoneIcon />,
    subcategories: [
      { name: 'Mobil telefonlar', count: 0 },
      { name: 'Nömrələr və SIM-kartlar', count: 0 }
    ]
  },
  {
    id: 'hobbi',
    title: 'Hobbi və asudə',
    icon: <SportsIcon />,
    subcategories: [
      { name: 'İdman və asudə', count: 0 },
      { name: 'Musiqi alətləri', count: 0 },
      { name: 'Kolleksiya', count: 0 }
    ]
  },
  {
    id: 'meiset',
    title: 'Məişət texnikası',
    icon: <LocalLaundryServiceIcon />,
    subcategories: [
      { name: 'Böyük məişət texnikası', count: 0 },
      { name: 'Kiçik məişət texnikası', count: 0 }
    ]
  },
  {
    id: 'usaq',
    title: 'Uşaq aləmi',
    icon: <ChildCareIcon />,
    subcategories: [
      { name: 'Uşaq geyimi', count: 0 },
      { name: 'Oyuncaqlar', count: 0 },
      { name: 'Uşaq mebeli', count: 0 },
      { name: 'Uşaq arabaları', count: 0 }
    ]
  },
  {
    id: 'heyvanlar',
    title: 'Heyvanlar',
    icon: <PetsIcon />,
    subcategories: [
      { name: 'İtlər', count: 0 },
      { name: 'Pişiklər', count: 0 },
      { name: 'Digər heyvanlar', count: 0 }
    ]
  },
  {
    id: 'is',
    title: 'İş elanları',
    icon: <WorkIcon />,
    subcategories: [
      { name: 'İş axtaranlar', count: 0 },
      { name: 'Vakansiyalar', count: 0 }
    ]
  },
  {
    id: 'kataloq',
    title: 'Kataloq',
    icon: <AppsIcon />,
    highlighted: true
  },
  {
    id: 'magazalar',
    title: 'Mağazalar',
    icon: <StoreIcon />,
    subcategories: []
  }
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openCatalogModal, setOpenCatalogModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [value, setValue] = useState(0);
  const { language, toggleLanguage } = useLanguage();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenCatalog = () => {
    setOpenCatalogModal(true);
  };

  const handleCloseCatalog = () => {
    setOpenCatalogModal(false);
    setSelectedCategory(null);
    setSubcategories([]);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    const category = categories.find(cat => cat.id === categoryId);
    setSubcategories(category && category.subcategories ? category.subcategories : []);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const renderMobileHeader = () => (
    <>
      <AppBar 
        position="fixed" 
        color="default" 
        elevation={0}
        sx={{ 
          borderBottom: 'none',
          backgroundColor: '#fff',
        }}
      >
        <Box>
          <Toolbar sx={{ 
            padding: '4px 16px !important', 
            minHeight: '56px !important',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                onClick={handleOpenCatalog}
                sx={{
                  padding: '8px',
                  mr: 1,
                  color: '#1976d2',
                }}
              >
                <MenuIcon sx={{ fontSize: 24 }} />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ 
                  color: '#1976d2',
                  fontWeight: 700,
                  fontSize: '22px',
                  letterSpacing: '-0.5px',
                }}
              >
                2el.az
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                onClick={toggleLanguage}
                sx={{
                  minWidth: 'auto',
                  color: '#1976d2',
                  mr: 1,
                  p: '4px 8px',
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                {language.toUpperCase()}
              </Button>
              <IconButton
                sx={{
                  padding: '8px',
                  color: '#1976d2',
                }}
              >
                <AddCircleOutlineIcon sx={{ fontSize: 24 }} />
              </IconButton>
            </Box>
          </Toolbar>

          <Box sx={{ px: 2, pb: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '100px',
                padding: '8px 16px',
                width: '100%',
                '&:focus-within': {
                  border: '1px solid #2196f3',
                }
              }}
            >
              <SearchIcon sx={{ fontSize: 20, color: '#9e9e9e', mr: 1 }} />
              <InputBase
                placeholder="Əşya və ya xidmət axtarışı"
                sx={{
                  flex: 1,
                  fontSize: '14px',
                  color: '#424242',
                  '& input::placeholder': {
                    color: '#9e9e9e',
                    opacity: 1,
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </AppBar>
      <Box sx={{ height: '104px' }} /> {/* Adjusted spacing for the fixed header + search bar */}
    </>
  );

  return (
    <>
      {isMobile ? (
        <>
          {renderMobileHeader()}
          <Toolbar />
          <Drawer
            anchor="bottom"
            open={openCatalogModal}
            onClose={handleCloseCatalog}
            PaperProps={{
              sx: {
                height: '90vh',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
              }
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              height: '100%'
            }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                p: 2,
                borderBottom: '1px solid #eeeeee'
              }}>
                <Typography 
                  sx={{ 
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#212121'
                  }}
                >
                  Kataloq
                </Typography>
                <IconButton 
                  onClick={handleCloseCatalog}
                  sx={{
                    color: '#757575',
                    padding: '8px'
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              {selectedCategory ? (
                <Box sx={{ 
                  flex: 1,
                  overflowY: 'auto',
                  bgcolor: '#fff'
                }}>
                  <Box
                    onClick={() => {
                      setSelectedCategory(null);
                      setSubcategories([]);
                    }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 2,
                      borderBottom: '1px solid #f5f5f5',
                      cursor: 'pointer'
                    }}
                  >
                    <IconButton 
                      size="small" 
                      sx={{ mr: 1, color: '#757575' }}
                    >
                      <ChevronRightIcon sx={{ transform: 'rotate(180deg)' }} />
                    </IconButton>
                    <Typography sx={{ fontSize: '14px', color: '#757575' }}>
                      Geri
                    </Typography>
                  </Box>
                  {subcategories.map((sub, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 2,
                        borderBottom: '1px solid #f5f5f5',
                        cursor: 'pointer'
                      }}
                    >
                      <Typography sx={{ fontSize: '14px', color: '#424242' }}>
                        {sub.name}
                      </Typography>
                      <Typography sx={{ 
                        fontSize: '12px',
                        color: '#9e9e9e'
                      }}>
                        {sub.count}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ) : (
                <Box sx={{ 
                  flex: 1,
                  overflowY: 'auto',
                  bgcolor: '#fff'
                }}>
                  {categories.map((category) => (
                    <Box
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: 2,
                        borderBottom: '1px solid #f5f5f5',
                        cursor: 'pointer'
                      }}
                    >
                      <Box sx={{ 
                        mr: 2,
                        color: category.highlighted ? '#1976d2' : '#757575'
                      }}>
                        {React.cloneElement(category.icon, {
                          sx: { fontSize: 20 }
                        })}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ 
                          fontSize: '14px',
                          color: category.highlighted ? '#1976d2' : '#424242',
                          fontWeight: category.highlighted ? 500 : 400
                        }}>
                          {category.title}
                        </Typography>
                        {category.description && (
                          <Typography sx={{
                            fontSize: '12px',
                            color: '#757575',
                            mt: 0.5
                          }}>
                            {category.description}
                          </Typography>
                        )}
                      </Box>
                      {category.subcategories && category.subcategories.length > 0 && (
                        <ChevronRightIcon sx={{ color: '#bdbdbd', fontSize: 18 }} />
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Drawer>
          <Paper 
            sx={{ 
              position: 'fixed', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              zIndex: 1000,
              borderTop: '1px solid #e0e0e0',
              borderRadius: 0,
            }} 
            elevation={0}
          >
            <StyledBottomNavigation
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'space-around',
              }}
            >
              <BottomNavigationAction
                label="ƏSAS"
                value="home"
                icon={<HomeIcon />}
                sx={{
                  '&.Mui-selected': {
                    color: '#1976d2',
                  },
                }}
              />
              <BottomNavigationAction
                label="SEÇİLMİŞLƏR"
                value="favorites"
                icon={<FavoriteIcon />}
                sx={{
                  '&.Mui-selected': {
                    color: '#1976d2',
                  },
                }}
              />
              <BottomNavigationAction
                label="YENİ ELAN"
                value="new"
                icon={<AddCircleOutlineIcon />}
                sx={{
                  '&.Mui-selected': {
                    color: '#1976d2',
                  },
                }}
              />
              <BottomNavigationAction
                label="MESAJLAR"
                value="messages"
                icon={<ChatIcon />}
                sx={{
                  '&.Mui-selected': {
                    color: '#1976d2',
                  },
                }}
              />
              <BottomNavigationAction
                label="KABİNET"
                value="profile"
                icon={<PersonIcon />}
                sx={{
                  '&.Mui-selected': {
                    color: '#1976d2',
                  },
                }}
              />
            </StyledBottomNavigation>
          </Paper>
          {isMobile && <Box sx={{ height: '56px' }} />}
        </>
      ) : (
        <>
          <AppBar 
            position="fixed" 
            color="default" 
            elevation={0}
            sx={{ 
              borderBottom: '1px solid #e0e0e0',
              backgroundColor: '#fff',
            }}
          >
            <Container maxWidth="lg">
              <Toolbar sx={{ padding: '8px 0 !important', minHeight: '64px !important' }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ 
                    color: '#1976d2',
                    fontWeight: 700,
                    fontSize: '26px',
                    letterSpacing: '-0.5px',
                    cursor: 'pointer',
                    mr: 2,
                  }}
                >
                  2el.az
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <Button
                    onClick={handleOpenCatalog}
                    startIcon={
                      <span style={{ 
                        fontSize: '20px', 
                        marginRight: '8px',
                        marginBottom: '2px'
                      }}>☰</span>
                    }
                    sx={{
                      bgcolor: '#1976d2',
                      color: 'white',
                      textTransform: 'none',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: 500,
                      minWidth: '120px',
                      '&:hover': {
                        bgcolor: '#1565c0'
                      }
                    }}
                  >
                    Kataloq
                  </Button>

                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon sx={{ fontSize: 20 }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Əşya və ya xidmət axtarışı..."
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>

                  <StyledSelect
                    value="Şəhər"
                    displayEmpty
                  >
                    <MenuItem value="Şəhər">
                      <Typography sx={{ fontSize: '14px', color: '#9e9e9e' }}>
                        Şəhər
                      </Typography>
                    </MenuItem>
                    <MenuItem value="Bakı">
                      <Typography sx={{ fontSize: '14px' }}>
                        Bakı
                      </Typography>
                    </MenuItem>
                    <MenuItem value="Gəncə">
                      <Typography sx={{ fontSize: '14px' }}>
                        Gəncə
                      </Typography>
                    </MenuItem>
                  </StyledSelect>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                  <IconButton 
                    sx={{ 
                      color: '#757575',
                      '&:hover': { color: '#1976d2' }
                    }}
                  >
                    <FavoriteIcon sx={{ fontSize: 22 }} />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      color: '#757575',
                      '&:hover': { color: '#1976d2' }
                    }}
                  >
                    <ChatIcon sx={{ fontSize: 22 }} />
                  </IconButton>
                  <Button
                    onClick={toggleLanguage}
                    sx={{
                      ml: 1,
                      color: '#1976d2',
                      minWidth: 'auto',
                      textTransform: 'none',
                      fontWeight: 500,
                      fontSize: '14px',
                      '&:hover': {
                        backgroundColor: 'transparent'
                      }
                    }}
                  >
                    {language.toUpperCase()}
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      ml: 1,
                      bgcolor: 'rgb(21, 101, 192)',
                      color: 'white',
                      textTransform: 'none',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: 500,
                      '&:hover': {
                        bgcolor: 'rgb(21, 101, 192)'
                      }
                    }}
                  >
                    Yeni elan
                  </Button>
                  <IconButton 
                    onClick={handleClick}
                    sx={{ 
                      ml: 1,
                      color: open ? '#1976d2' : '#757575',
                      '&:hover': { color: '#1976d2' }
                    }}
                  >
                    <PersonIcon sx={{ fontSize: 22 }} />
                  </IconButton>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleCloseProfile}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={{
              '& .MuiPopover-paper': {
                marginTop: '8px',
                minWidth: '240px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }
            }}
          >
            <Profile />
          </Popover>
          <Modal
            open={openCatalogModal}
            onClose={handleCloseCatalog}
            aria-labelledby="catalog-modal"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: 1200,
                maxHeight: '90vh',
                bgcolor: 'background.paper',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                p: 3, 
                borderBottom: '1px solid #eeeeee'
              }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#212121',
                    fontSize: '20px',
                    fontWeight: 500,
                  }}
                >
                  Kataloq
                </Typography>
                <IconButton 
                  onClick={handleCloseCatalog}
                  sx={{
                    color: '#757575',
                    '&:hover': { color: '#1976d2' }
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              <Box sx={{ display: 'flex', height: 'calc(90vh - 76px)' }}>
                {/* First Column - Main Categories */}
                <Box
                  sx={{
                    width: '33.33%',
                    borderRight: '1px solid #eeeeee',
                    overflowY: 'auto',
                    bgcolor: '#fafafa',
                  }}
                >
                  {categories.map((category) => (
                    <Box
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        p: 2,
                        cursor: 'pointer',
                        borderLeft: selectedCategory === category.id ? '3px solid #1976d2' : '3px solid transparent',
                        bgcolor: selectedCategory === category.id ? '#fff' : 'transparent',
                        '&:hover': {
                          bgcolor: '#fff'
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Box sx={{ mr: 2 }}>
                          {React.cloneElement(category.icon, {
                            sx: { 
                              fontSize: 20,
                              color: selectedCategory === category.id ? '#1976d2' : '#757575'
                            }
                          })}
                        </Box>
                        <Typography
                          sx={{
                            flex: 1,
                            fontSize: '14px',
                            fontWeight: selectedCategory === category.id ? 500 : 400,
                            color: selectedCategory === category.id ? '#1976d2' : '#424242',
                          }}
                        >
                          {category.title}
                        </Typography>
                        {category.subcategories && category.subcategories.length > 0 && (
                          <ChevronRightIcon sx={{ 
                            color: selectedCategory === category.id ? '#1976d2' : '#bdbdbd',
                            fontSize: 18,
                          }} />
                        )}
                      </Box>
                      {category.description && (
                        <Typography
                          sx={{
                            fontSize: '12px',
                            color: '#757575',
                            pl: '36px',
                            pr: '24px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {category.description}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Box>

                {/* Second Column - Subcategories */}
                <Box
                  sx={{
                    width: '33.33%',
                    borderRight: '1px solid #eeeeee',
                    overflowY: 'auto',
                    bgcolor: '#fff',
                    p: 0,
                  }}
                >
                  {subcategories.map((sub, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: '12px 16px',
                        cursor: 'pointer',
                        borderBottom: '1px solid #f5f5f5',
                        '&:hover': {
                          bgcolor: '#f5f5f5'
                        },
                      }}
                    >
                      <Typography sx={{ 
                        color: '#424242',
                        fontSize: '14px',
                        fontWeight: 400,
                        '&:hover': {
                          color: '#1976d2'
                        }
                      }}>
                        {sub.name}
                      </Typography>
                      <Typography sx={{ 
                        color: '#9e9e9e',
                        fontSize: '12px',
                        ml: 1 
                      }}>
                        {sub.count}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Third Column */}
                <Box
                  sx={{
                    width: '33.33%',
                    overflowY: 'auto',
                    bgcolor: '#fff',
                    p: 2,
                  }}
                >
                  {/* Third level content will go here */}
                </Box>
              </Box>
            </Box>
          </Modal>
          <Toolbar />
        </>
      )}

      {isMobile && (
        <Paper 
          sx={{ 
            position: 'fixed', 
            bottom: 0, 
            left: 0, 
            right: 0, 
            zIndex: 1000,
            borderTop: '1px solid #e0e0e0',
            borderRadius: 0,
          }} 
          elevation={0}
        >
          <StyledBottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'space-around',
            }}
          >
            <BottomNavigationAction
              label="ƏSAS"
              value="home"
              icon={<HomeIcon />}
              sx={{
                '&.Mui-selected': {
                  color: '#1976d2',
                },
              }}
            />
            <BottomNavigationAction
              label="SEÇİLMİŞLƏR"
              value="favorites"
              icon={<FavoriteIcon />}
              sx={{
                '&.Mui-selected': {
                  color: '#1976d2',
                },
              }}
            />
            <BottomNavigationAction
              label="YENİ ELAN"
              value="new"
              icon={<AddCircleOutlineIcon />}
              sx={{
                '&.Mui-selected': {
                  color: '#1976d2',
                },
              }}
            />
            <BottomNavigationAction
              label="MESAJLAR"
              value="messages"
              icon={<ChatIcon />}
              sx={{
                '&.Mui-selected': {
                  color: '#1976d2',
                },
              }}
            />
            <BottomNavigationAction
              label="KABİNET"
              value="profile"
              icon={<PersonIcon />}
              sx={{
                '&.Mui-selected': {
                  color: '#1976d2',
                },
              }}
            />
          </StyledBottomNavigation>
        </Paper>
      )}

      {/* Add bottom padding to content when mobile to account for fixed navigation */}
      {isMobile && <Box sx={{ height: '56px' }} />}
    </>
  );
};

export default Header;
import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, Link, Modal, Container } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import PetsIcon from '@mui/icons-material/Pets';
import WorkIcon from '@mui/icons-material/Work';
import ConstructionIcon from '@mui/icons-material/Construction';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import AppsIcon from '@mui/icons-material/Apps';
import StoreIcon from '@mui/icons-material/Store';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { styled } from '@mui/material/styles';
import { useTranslation } from '../locales';

const categories = [
  {
    id: 'kataloq',
    icon: <AppsIcon sx={{ color: '#1976d2' }} />,
  },
  {
    id: 'neqliyyat',
    icon: <DirectionsCarIcon sx={{ color: '#1976d2' }} />,
  },
  {
    id: 'elektronika',
    icon: <PhoneIphoneIcon sx={{ color: '#1976d2' }} />,
  },
  {
    id: 'ehtiyat_hisseleri',
    icon: <BuildIcon sx={{ color: '#1976d2' }} />,
  },
  {
    id: 'ev_ve_bag',
    icon: <HomeIcon sx={{ color: '#1976d2' }} />,
  },
  {
    id: 'dasinmaz',
    icon: <HomeIcon sx={{ color: '#1976d2' }} />,
  },
  {
    id: 'xidmetler',
    icon: <BuildIcon sx={{ color: '#1976d2' }} />,
  },
  {
    id: 'sexsi',
    icon: <LocalLaundryServiceIcon sx={{ color: '#1976d2' }} />,
  },
  {
    id: 'telefonlar',
    icon: <PhoneIphoneIcon sx={{ color: '#1976d2' }} />,
  },
  {
    id: 'hobbi',
    icon: <SportsEsportsIcon sx={{ color: '#1976d2' }} />,
  },
  {
    id: 'meiset',
    icon: <LocalLaundryServiceIcon sx={{ color: '#1976d2' }} />,
  },
  {
    id: 'usaq',
    icon: <ChildCareIcon sx={{ color: '#1976d2' }} />,
  },
  {
    id: 'heyvanlar',
    icon: <PetsIcon sx={{ color: '#1976d2' }} />,
  },
  {
    id: 'is',
    icon: <WorkIcon sx={{ color: '#1976d2' }} />,
  },
  {
    id: 'temir',
    icon: <ConstructionIcon sx={{ color: '#1976d2' }} />,
  },
  {
    id: 'magazalar',
    icon: <StoreIcon sx={{ color: '#1976d2' }} />,
  },
];

const CategoryItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1.5),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  backgroundColor: '#fff',
  borderRadius: '50%',
  aspectRatio: '1/1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
  position: 'relative',
  border: '2px solid transparent',
  '&:hover': {
    backgroundColor: '#fff',
    border: '2px solid #1976d2',
    '& .MuiSvgIcon-root': {
      opacity: 0.8,
    },
    '& .category-text': {
      color: '#1976d2',
    }
  },
  '& .MuiSvgIcon-root': {
    fontSize: { xs: '24px', sm: '28px', md: '32px' },
    transition: 'opacity 0.2s ease',
  }
}));

const CategoryText = styled(Typography)(({ theme }) => ({
  color: '#333',
  fontSize: { xs: '10px', sm: '11px', md: '12px' },
  fontWeight: 500,
  lineHeight: 1.2,
  textAlign: 'center',
  padding: '0 4px',
  width: '100%',
  wordBreak: 'break-word',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  maxHeight: '2.4em',
}));

const CategoryGrid = ({ language = 'az' }) => {
  const { t } = useTranslation(language);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openCatalogModal, setOpenCatalogModal] = useState(false);
  const [modalSelectedCategory, setModalSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    if (categoryId === 'catalog') {
      setOpenCatalogModal(true);
      return;
    }
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  const handleCloseModal = () => {
    setOpenCatalogModal(false);
    setModalSelectedCategory(null);
  };

  const handleModalCategoryClick = (categoryId) => {
    setModalSelectedCategory(categoryId);
  };

  const getSelectedCategoryData = () => {
    if (!selectedCategory) return null;
    return categories.find(c => c.id === selectedCategory);
  };

  const getModalCategoryData = () => {
    if (!modalSelectedCategory) return null;
    return categories.find(c => c.id === modalSelectedCategory);
  };

  const selectedCategoryData = getSelectedCategoryData();
  const modalCategoryData = getModalCategoryData();

  const getTotalCount = (subcategories) => {
    if (!subcategories) return 0;
    return subcategories.reduce((acc, curr) => acc + curr.count, 0);
  };

  return (
    <>
      <Box 
        sx={{ 
          display: { xs: 'block', md: 'none' },
          mt: -19,
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          bgcolor: { xs: '#fff', md: 'transparent' },
          mx: { xs: '-16px', sm: 0 },
          width: { xs: 'calc(100% + 32px)', sm: '100%' }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            py: 1,
            px: 2,
            minWidth: 'min-content'
          }}
        >
          {categories.map((category) => (
            <Box 
              key={category.id}
              sx={{
                minWidth: '70px',
                mr: 2,
                '&:last-child': {
                  mr: 0
                }
              }}
            >
              <CategoryItem 
                onClick={() => handleCategoryClick(category.id)}
                elevation={0}
                sx={{
                  width: '48px',
                  height: '48px',
                  p: 1,
                  border: 'none',
                  boxShadow: 'none',
                  borderRadius: '50%',
                  bgcolor: '#f5f5f5',
                  mx: 'auto',
                  mb: 1,
                  '&:hover': {
                    border: 'none',
                    boxShadow: 'none',
                    bgcolor: '#f5f5f5'
                  }
                }}
              >
                {category.icon}
              </CategoryItem>
              <CategoryText sx={{ fontSize: '11px' }}>
                {t(`categories.${category.id}.title`)}
              </CategoryText>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Desktop version */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Container maxWidth="lg" sx={{ mt: 3, mb: 4 }}>
          <Grid 
            container 
            spacing={2}
            sx={{
              padding: 2,
              margin: 0,
              width: '100%'
            }}
          >
            {categories.map((category) => (
              <Grid item md={1.5} key={category.id}>
                <Box sx={{ 
                  position: 'relative',
                  width: '100%',
                  pb: '100%'
                }}>
                  <CategoryItem 
                    onClick={() => handleCategoryClick(category.id)}
                    elevation={0}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Box sx={{ 
                      flex: '0 0 auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 0.5
                    }}>
                      {category.icon}
                    </Box>
                    <CategoryText className="category-text">
                      {t(`categories.${category.id}.title`)}
                    </CategoryText>
                  </CategoryItem>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Catalog Modal */}
      <Modal
        open={openCatalogModal}
        onClose={handleCloseModal}
        aria-labelledby="catalog-modal"
        aria-describedby="catalog-categories"
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
            borderRadius: 1,
            boxShadow: 24,
            overflow: 'hidden',
            display: 'flex',
          }}
        >
          {/* First Column - Main Categories */}
          <Box
            sx={{
              width: '33.33%',
              borderRight: '1px solid #eee',
              overflowY: 'auto',
              maxHeight: '90vh',
            }}
          >
            {categories.map((category) => (
              <Box
                key={category.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  cursor: 'pointer',
                  borderLeft: modalSelectedCategory === category.id ? '3px solid #212121' : '3px solid transparent',
                  bgcolor: modalSelectedCategory === category.id ? '#f5f5f5' : 'transparent',
                  '&:hover': {
                    bgcolor: '#f5f5f5'
                  },
                }}
                onClick={() => handleModalCategoryClick(category.id)}
              >
                <Box sx={{ mr: 2 }}>
                  {React.cloneElement(category.icon, {
                    sx: { 
                      fontSize: 24,
                      color: modalSelectedCategory === category.id ? '#212121' : '#757575'
                    }
                  })}
                </Box>
                <Typography
                  sx={{
                    flex: 1,
                    color: modalSelectedCategory === category.id ? '#212121' : '#333',
                  }}
                >
                  {t(`categories.${category.id}.title`)}
                </Typography>
                <ChevronRightIcon sx={{ 
                  color: modalSelectedCategory === category.id ? '#212121' : '#bdbdbd',
                  fontSize: 20,
                }} />
              </Box>
            ))}
          </Box>

          {/* Second Column - Subcategories */}
          <Box
            sx={{
              width: '33.33%',
              borderRight: '1px solid #eee',
              overflowY: 'auto',
              maxHeight: '90vh',
              bgcolor: '#fff',
            }}
          >
            {modalCategoryData && modalCategoryData.subcategories && 
              modalCategoryData.subcategories.map((sub, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: '#f5f5f5'
                    },
                  }}
                >
                  <Typography sx={{ color: '#1976d2' }}>
                    {sub.name}
                  </Typography>
                  <Typography sx={{ color: '#666', ml: 1 }}>
                    {sub.count}
                  </Typography>
                </Box>
              ))
            }
          </Box>

          {/* Third Column - Details */}
          <Box
            sx={{
              width: '33.33%',
              overflowY: 'auto',
              maxHeight: '90vh',
              bgcolor: '#fff',
              p: 2,
            }}
          >
            {/* Third level content will go here */}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CategoryGrid; 
import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/posts';
import { Box, Typography, Card, CardContent, Container, CircularProgress } from '@mui/material';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load posts');
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, color: 'error.main' }}>
        <Typography>{error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Posts from API
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {posts.map((post) => (
          <Card key={post.id} sx={{ 
            '&:hover': {
              boxShadow: 6,
              transform: 'translateY(-2px)',
              transition: 'all 0.2s ease-in-out'
            }
          }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1, color: '#1976d2' }}>
                {post.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {post.body}
              </Typography>
              <Typography variant="caption" sx={{ mt: 2, display: 'block', color: '#757575' }}>
                Post ID: {post.id} | User ID: {post.userId}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Posts; 
import React, { useEffect, useState } from 'react';
import {
  Typography,
  Container,
  CircularProgress,
  Paper,
  Box,
  Avatar
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import api from '../utils/api';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get('/users/profile')
      .then((res) => setProfile(res.data))
      .catch(() => alert('Không thể lấy thông tin người dùng'));
  }, []);

  if (!profile) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: { xs: 4, md: 8 } }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 4 },
          borderRadius: 3,
          backgroundColor: '#f5f5f5',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Avatar
            sx={{
              bgcolor: '#1976d2',
              width: { xs: 60, sm: 80 },
              height: { xs: 60, sm: 80 },
              margin: 'auto'
            }}
          >
            <AccountCircleIcon fontSize="large" />
          </Avatar>
          <Typography
            variant="h5"
            sx={{
              mt: 2,
              fontSize: { xs: '1.5rem', sm: '1.75rem' },
              fontWeight: 600,
            }}
          >
            {profile.fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            @{profile.username}
          </Typography>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            <strong>Email:</strong> {profile.email}
          </Typography>
          <Typography variant="subtitle1">
            <strong>Vai trò:</strong> {profile.role}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

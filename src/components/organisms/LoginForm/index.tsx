import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FC } from 'react';
import insumosREST from '../../../provider';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import swal from 'sweetalert2'
import { AxiosError } from 'axios';

const LoginForm: FC = () => {
  const navigate = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData(e.currentTarget)
    try {
      const response = await insumosREST.post<loginResponse>('/auth/login', {
        username: data.get('email'),
        password: data.get('password')
      })
      localStorage.setItem('loginInfo', JSON.stringify({
        ...response.data,
        ...jwtDecode(response.data.accessToken)
      }))
      navigate('/')
    } catch (error) {
      if (error instanceof AxiosError) {
        let title, text
        if (error.response.status === 401) {
          title = 'Error al iniciar sesión'
          text = 'Por favor, verifica tus credenciales'
        } else {
          title = 'Error al iniciar sesión'
          text = 'No pudimos conectarnos al back'
        }
        swal.fire({
          title,
          text,
          icon: 'error',
          color: 'FF0000'
        }) 
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onSubmit={handleSubmit}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginForm

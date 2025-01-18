import { useState } from 'react';
import { RegisterMutation } from '../../types';
import { Avatar, Box, Button, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid2';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectUserError } from './userSlice.ts';
import { useNavigate } from 'react-router-dom';
import { register } from './userThunk.ts';

const RegisterUser = () => {
  const dispatch = useAppDispatch();
  const registerError = useAppSelector(selectUserError);
  const navigate = useNavigate();


  const [form, setForm] = useState<RegisterMutation>({
    username: '',
    password: '',
  })

  const inpytChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm(prevState => ({...prevState, [name]: value}));
  }

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      await dispatch(register(form)).unwrap()
      navigate('/');
    }catch(e){
      console.log(e);
    }
  }

  const getFielderror = (fieldName: string) =>{
    try{
      return registerError?.errors[fieldName].message;
    }catch{
     return undefined
    }
  }
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 3 }}>
            <Grid container direction={'column'} spacing={2}>
              <Grid  size ={12}>
                <TextField
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={form.username}
                  onChange={inpytChangeHandler}
                  error={Boolean(getFielderror('username'))}
                  helperText={getFielderror('username')}
                />
              </Grid>
              <Grid  size ={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={form.password}
                  onChange={inpytChangeHandler}
                  error={Boolean(getFielderror('password'))}
                  helperText={getFielderror('password')}
                />
              </Grid>
              <Grid  size ={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default RegisterUser;
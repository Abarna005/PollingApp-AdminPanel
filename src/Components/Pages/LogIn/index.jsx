import React, { useState } from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailIcon from '@mui/icons-material/Mail';
import StyledButton from '../../Common/Buttons/index';
import { LogInStyles } from './style';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { email, password } = formData;
      console.log(formData);
    }
  };

  return (
    <LogInStyles>
      <div className="container">
        <div className="main-container" maxWidth="xs">
          <div className="form-main-container">
            <Typography component="h1" variant="h5" className="title">
              Login
            </Typography>
            <div className="FormContainer">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  endAdornment: (
                    <IconButton edge="end">
                      <MailIcon />
                    </IconButton>
                  ),
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              />
            </div>
            <div className="remember-forgot">
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" style={{ marginLeft: '10px' }} />}
                label={
                  <Typography variant="body2" style={{ fontSize: '12px' }}>
                    Remember me
                  </Typography>
                }
              />
              <Link href="#" variant="body2" className="forgot-link">
                <StyledButton title={"Forgot Password?"} fontSize={13} disableTouchRipple={true} textTransform="none" />
              </Link>
            </div>
            <div className="Button-Container" onClick={handleSubmit}>
              <StyledButton
                title={"LogIn"}
                variant="contained"
                color="primary"
                fullWidth={false}
              />
            </div>
            <div style={{ width: "80%" }}>
              <Box className="signup-link">
                <Link href="#" variant="body2" style={{ textDecoration: "none" }}>
                  <Typography>
                    Don't have an account? <StyledButton title={"Sign In"} fontSize={13} disableTouchRipple={true} />
                  </Typography>
                </Link>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </LogInStyles>
  );
};
export default Login;

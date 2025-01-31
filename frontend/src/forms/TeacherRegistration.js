import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box
} from '@mui/material';

const TeacherRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Allow only valid input for phone and name fields
    if (name === 'phone' && !/^\d*$/.test(value)) return;
    if (name === 'name' && !/^[A-Za-z\s]*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    const newErrors = {
      name: formData.name.trim() === '' || !/^[A-Za-z\s]+$/.test(formData.name),
      phone: formData.phone.trim() === '' || !/^\d{10}$/.test(formData.phone),
      email: formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      console.log('Submitted Data:', formData);
      alert('Teacher Registration successful!');
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: 'auto',
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        align="center"
      >
        Teacher Registration
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              error={errors.name}
              helperText={errors.name ? 'Name is required and must contain only alphabets.' : ''}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              error={errors.phone}
              helperText={errors.phone ? 'Phone number must be 10 digits.' : ''}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email (Optional)"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              helperText={errors.email ? 'Enter a valid email address.' : ''}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default TeacherRegistration;

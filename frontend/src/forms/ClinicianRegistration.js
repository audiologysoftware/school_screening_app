import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
} from '@mui/material';

const ClinicianRegistration = () => {
  const [formData, setFormData] = useState({
    rciId: '',
    name: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    rciId: false,
    name: false,
    phone: false,
    email: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validation for specific fields
    if (name === 'name') {
      // Allow only alphabets and spaces
      if (!/^[A-Za-z\s]*$/.test(value)) return;
    }

    if (name === 'phone') {
      // Allow only numbers
      if (!/^\d*$/.test(value)) return;
    }

    setFormData({ ...formData, [name]: value });

    // Clear the error state for the field on change
    setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    const newErrors = {
      rciId: formData.rciId.trim() === '',
      name: formData.name.trim() === '' || !/^[A-Za-z\s]+$/.test(formData.name),
      phone: formData.phone.trim() === '' || !/^\d{10}$/.test(formData.phone),
      email: formData.email.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      console.log('Submitted Data:', formData);
      alert('Clinician Registration successful!');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 4 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Clinician Registration
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="RCI ID"
              name="rciId"
              value={formData.rciId}
              onChange={handleInputChange}
              error={errors.rciId}
              helperText={errors.rciId ? 'RCI ID is required.' : ''}
              fullWidth
              variant="outlined"
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }} 
            />
          </Grid>
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
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }} 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              error={errors.phone}
              helperText={errors.phone ? 'Phone number is required and must be 10 digits.' : ''}
              fullWidth
              variant="outlined"
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }} 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email ID"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              helperText={errors.email ? 'A valid email is required.' : ''}
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }} 
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

export default ClinicianRegistration;

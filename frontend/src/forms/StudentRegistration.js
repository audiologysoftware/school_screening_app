import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    class: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    age: false,
  });

  const classes = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th']; // Class options

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({ ...formData, [name]: value });

    // Validate inputs
    if (name === 'name') {
      const isValidName = /^[a-zA-Z\s]+$/.test(value);
      setErrors((prevErrors) => ({ ...prevErrors, name: !isValidName }));
    }

    if (name === 'age') {
      const isValidAge = /^[0-9]+$/.test(value);
      setErrors((prevErrors) => ({ ...prevErrors, age: !isValidAge }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation check
    const isValidName = /^[a-zA-Z\s]+$/.test(formData.name);
    const isValidAge = /^[0-9]+$/.test(formData.age);

    if (!isValidName || !isValidAge) {
      return;
    }

    console.log('Submitted Data:', formData);
    alert('Registration successful!');
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 4 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Student Registration
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
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              error={errors.age}
              helperText={errors.age ? 'Age is required and must be a number.' : ''}
              fullWidth
              variant="outlined"
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel style={{ color: 'white' }}>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                label="Gender"
                inputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: '#333', // Dark background for dropdown
                      color: 'white', // White text in the dropdown menu
                    },
                  },
                }}
                required
              >
                <MenuItem value="Male" style={{ color: 'white' }}>Male</MenuItem>
                <MenuItem value="Female" style={{ color: 'white' }}>Female</MenuItem>
                <MenuItem value="Other" style={{ color: 'white' }}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel style={{ color: 'white' }}>Class</InputLabel>
              <Select
                name="class"
                value={formData.class}
                onChange={handleInputChange}
                label="Class"
                inputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
                MenuProps={{
                  PaperProps: {
                    style: {
                      backgroundColor: '#333', // Dark background for dropdown
                      color: 'white', // White text in the dropdown menu
                    },
                  },
                }}
                required
              >
                <MenuItem value="" style={{ color: 'white' }}>--Select Class--</MenuItem>
                {classes.map((classOption, index) => (
                  <MenuItem key={index} value={classOption} style={{ color: 'white' }}>
                    {classOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>


          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default StudentRegistration;

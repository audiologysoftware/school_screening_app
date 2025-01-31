import { useState } from 'react';
import { TextField, MenuItem, Select, InputLabel, FormControl, Button, Grid } from '@mui/material';

const SchoolRegistration = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    type: '',
    schoolId: '',
    name: '',
    contactPerson: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
  });

  const [errors, setErrors] = useState({
    type: false,
    schoolId: false,
    name: false,
    contactPerson: false,
    phone: false,
    email: false,
    address: false,
    city: false,
    state: false,
  });

  const state = ['State 1', 'State 2', 'State 3', 'State 4'];
  const city = ['City 1', 'City 2', 'City 3', 'City 4']; // Replace with actual cities
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name' || name === 'contactPerson') {
      if (!/^[A-Za-z\s]*$/.test(value)) return;
    }

    if (name === 'phone') {
      if (!/^\d{0,10}$/.test(value)) return;
    }

    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      type: formData.type.trim() === '',
      schoolId: formData.schoolId.trim() === '',
      name: formData.name.trim() === '' || !/^[A-Za-z\s]+$/.test(formData.name),
      contactPerson: formData.contactPerson.trim() === '' || !/^[A-Za-z\s]+$/.test(formData.contactPerson),
      phone: formData.phone.trim() === '' || !/^\d{10}$/.test(formData.phone),
      email: formData.email.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      address: formData.address.trim() === '',
      city: formData.city.trim() === '',
      state: formData.state.trim() === '',
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      console.log('Submitted Data:', formData);
      alert('Registration successful!');
      closeModal();
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2 className="form-header">School Registration</h2>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Type (School)"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                size="small"
                error={errors.type}
                helperText={errors.type ? "This field is required" : ""}
                InputLabelProps={{ style: { color: 'white' } }} // Label color set to white
                inputProps={{ style: { color: 'white' } }} // Input text color set to white
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="School ID"
                name="schoolId"
                value={formData.schoolId}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                size="small"
                error={errors.schoolId}
                helperText={errors.schoolId ? "This field is required" : ""}
                InputLabelProps={{ style: { color: 'white' } }} // Label color set to white
                inputProps={{ style: { color: 'white' } }} // Input text color set to white
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="School Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                size="small"
                error={errors.name}
                helperText={errors.name ? "Please enter a valid name" : ""}
                InputLabelProps={{ style: { color: 'white' } }} // Label color set to white
                inputProps={{ style: { color: 'white' } }} // Input text color set to white
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Contact Person Name"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                size="small"
                error={errors.contactPerson}
                helperText={errors.contactPerson ? "Please enter a valid contact person name" : ""}
                InputLabelProps={{ style: { color: 'white' } }} // Label color set to white
                inputProps={{ style: { color: 'white' } }} // Input text color set to white
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                size="small"
                error={errors.phone}
                helperText={errors.phone ? "Please enter a valid 10-digit phone number" : ""}
                InputLabelProps={{ style: { color: 'white' } }} // Label color set to white
                inputProps={{ style: { color: 'white' } }} // Input text color set to white
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                size="small"
                error={errors.email}
                helperText={errors.email ? "Please enter a valid email address" : ""}
                InputLabelProps={{ style: { color: 'white' } }} // Label color set to white
                inputProps={{ style: { color: 'white' } }} // Input text color set to white
              />
            </Grid>

            {/* Address in single line */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                size="small"
                error={errors.address}
                helperText={errors.address ? "This field is required" : ""}
                inputProps={{
                  style: { color: 'white', whiteSpace: 'nowrap' } // Text color set to white and no wrapping
                }}
                InputLabelProps={{ style: { color: 'white' } }} // Label color set to white
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth size="small" error={errors.city}>
                <InputLabel style={{ color: 'white' }}>City</InputLabel> {/* Label color set to white */}
                <Select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        backgroundColor: '#1e1e1e', // Dark background
                        color: 'white', // Text color white
                      },
                    },
                  }}
                  style={{ color: 'white' }} // Text color in select options
                >
                  <MenuItem value="">--Select city--</MenuItem>
                  {city.map((board, index) => (
                    <MenuItem key={index} value={board}>
                      {board}
                    </MenuItem>
                  ))}
                </Select>
                {errors.city && <span className="error-message"></span>}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth size="small" error={errors.state}>
                <InputLabel style={{ color: 'white' }}>State</InputLabel> {/* Label color set to white */}
                <Select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        backgroundColor: '#1e1e1e', // Dark background
                        color: 'white', // Text color white
                      },
                    },
                  }}
                  style={{ color: 'white' }} // Text color in select options
                >
                  <MenuItem value="">--Select state--</MenuItem>
                  {state.map((board, index) => (
                    <MenuItem key={index} value={board}>
                      {board}
                    </MenuItem>
                  ))}
                </Select>
                {errors.state && <span className="error-message"></span>}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth size="small">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default SchoolRegistration;

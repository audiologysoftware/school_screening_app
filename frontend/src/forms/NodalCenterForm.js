import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const NodalCenterFormModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contactPerson: '',
    phone: '',
    email: '',
    address: '',
    state: '',
    city: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    contactPerson: false,
    phone: false,
    email: false,
    address: false,
    state: false,
    city: false,
  });

  const statesWithCities = {
    Karnataka: ['Bangalore', 'Mysore', 'Mandya'],
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
    TamilNadu: ['Chennai', 'Coimbatore', 'Madurai'],
    Delhi: ['New Delhi', 'Dwarka', 'Saket'],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));

    if (name === 'state') {
      setFormData({ ...formData, state: value, city: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === '' || !/^[A-Za-z\s]+$/.test(formData.name),
      contactPerson: formData.contactPerson.trim() === '',
      phone: formData.phone.trim() === '' || !/^\d{10}$/.test(formData.phone),
      email: formData.email.trim() === '' || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email),
      address: formData.address.trim() === '',
      state: formData.state.trim() === '',
      city: formData.city.trim() === '',
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      console.log('Form Data:', formData);
      alert('Form submitted successfully!');
      handleClose();
    }
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setFormData({
      name: '',
      contactPerson: '',
      phone: '',
      email: '',
      address: '',
      state: '',
      city: '',
    });
    setErrors({
      name: false,
      contactPerson: false,
      phone: false,
      email: false,
      address: false,
      state: false,
      city: false,
    });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Nodal Center Form
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Nodal Center Registration</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              error={errors.name}
              helperText={errors.name && 'Name is required and must contain only letters.'}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Contact Person"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleInputChange}
              error={errors.contactPerson}
              helperText={errors.contactPerson && 'Contact person is required.'}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              error={errors.phone}
              helperText={errors.phone && 'Phone number must be 10 digits.'}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Email ID"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              helperText={errors.email && 'Please enter a valid email address.'}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              error={errors.address}
              helperText={errors.address && 'Address is required.'}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              required
            />

            <FormControl fullWidth margin="normal" error={errors.state}>
              <InputLabel>State</InputLabel>
              <Select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                label="State"
                required
              >
                <MenuItem value="">--Select State--</MenuItem>
                {Object.keys(statesWithCities).map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" error={errors.city}>
              <InputLabel>City</InputLabel>
              <Select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                label="City"
                required
              >
                <MenuItem value="">--Select City--</MenuItem>
                {statesWithCities[formData.state]?.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NodalCenterFormModal;

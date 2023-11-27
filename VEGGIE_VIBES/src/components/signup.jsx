import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Snackbar, Alert } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const defaultTheme = createTheme()

export default function SignUp() {
  const navigate = useNavigate()
  const [details, setDetails] = React.useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    doorno: '',
    street: '',
    city: '',
    landmark: '',
    address1: '',
    address2: '',
    mobilenumber: '',
    pincode: '',
  })

  const [open, setOpen] = React.useState(false)
  const [Erropen, setErrOpen] = React.useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (details.password !== details.passwordConfirm) {
      setErrOpen(true)
      return
    }
    axios
      .post('http://localhost:3001/Users', details)
      .then((response) => {
        console.log('Success:', response.data)
        setOpen(true)
        setTimeout(() => {
          navigate('/login')
        }, 2000)
      })
      .catch((error) => {
        console.error('Error:', error)
        alert('Error in signup')
      })
  }

  const handleInputChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        width={'98vw'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'100%'}
        p={4}
        pb={8}
      >
        <Container
          style={{
            backgroundColor: 'rgb(255 255 255 / 76%)',
            boxShadow: '0 0 100px #00693e',
            placeItems: 'center',
          }}
          component="main"
          maxWidth="sm"
          sx={{
            borderRadius: '30px',
            paddingButtom: '30px',
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Snackbar
              open={open}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              autoHideDuration={2000}
              onClose={() => setOpen(false)}
            >
              <Alert severity="success" sx={{ width: '100%' }}>
                Signup Successful
              </Alert>
            </Snackbar>
            <Snackbar
              open={Erropen}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              autoHideDuration={3000}
              onClose={() => setErrOpen(false)}
            >
              <Alert severity="error" sx={{ width: '100%' }}>
                Invalid Credentials
              </Alert>
            </Snackbar>
            <Avatar sx={{ m: 1, bgcolor: '#00693e' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register Form
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="username"
                    required
                    fullWidth
                    id="firstName"
                    label="User Name"
                    autoFocus
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="family-name"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type='email'
                    autoComplete="email"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="passwordConfirm"
                    label="Confirm Password"
                    type="password"
                    id="Confirmpassword"
                    autoComplete="Confirmpassword"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography component="h1" variant="h5" sx={{ p: 0 }}>
                    Shipping Address
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="doorno"
                    label="Door / Flat no"
                    type="text"
                    id="doorno"
                    autoComplete="doorno"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="street"
                    label="Street Name"
                    type="text"
                    id="street"
                    autoComplete="street"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="city"
                    label="City / Village Name"
                    type="text"
                    id="city"
                    autoComplete="city"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="landmark"
                    label="Land Mark (optional)"
                    type="text"
                    id="landmark"
                    autoComplete="landmark"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    name="address1"
                    label="Address Line 1"
                    type="text"
                    id="address1"
                    autoComplete="address1"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    name="address2"
                    label="Address Line 2"
                    type="text"
                    id="address2"
                    autoComplete="address2"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="mobilenumber"
                    label="Mobile Number"
                    type="tel"
                    id="mobilenumber"
                    autoComplete="mobilenumber"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="pincode"
                    label="Pincode"
                    type="tel"
                    id="pincode"
                    autoComplete="pincode"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Accept our terms and conditions"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#00693e' }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item sx={{marginBottom:'20px'}}>
                  <Link href="/login" variant="body2" sx={{ color: '#00693e' }}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

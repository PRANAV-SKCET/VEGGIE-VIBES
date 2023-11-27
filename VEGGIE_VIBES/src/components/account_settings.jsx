import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Snackbar, Alert } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AuthContext } from './context'
import axios from 'axios'

const defaultTheme = createTheme()

export default function AccountSetting() {
  const { logData } = React.useContext(AuthContext)
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.put('http://localhost:3001/Users/1', logData)
      console.log(response.data)
      setOpen(true)
    } catch (error) {
      console.error('Error updating data', error)
    }
  }

  const handleInputChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }

  // React.useEffect(() => {
  //   if (isProfile) {
  //     document.body.style.background = 'white'
  //   }
  // },[isProfile])
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box width={'98vw'} m={0} height={'100%'} pb={8}>
        <Container
          style={{
            backgroundColor: 'rgb(255 255 255 / 76%)',
            boxShadow: '0 0 100px #00693e',
            placeItems: 'center',
          }}
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
                Saved Changes Successful
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
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Typography component="h1" variant="h5" sx={{ p: 0 }}>
                    Account Settings
                  </Typography>
                </Grid>
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
                    defaultValue={logData.username}
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
                    defaultValue={logData.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={handleInputChange}
                    defaultValue={logData.email}
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
                    defaultValue={logData.doorno}
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
                    defaultValue={logData.street}
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
                    defaultValue={logData.city}
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
                    defaultValue={logData.landmark}
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
                    defaultValue={logData.address1}
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
                    defaultValue={logData.address2}
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
                    defaultValue={logData.mobilenumber}
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
                    defaultValue={logData.pincode}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: '#00693e' }}
                    onClick={{ alert: 'Confirm Changes' }}
                  >
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

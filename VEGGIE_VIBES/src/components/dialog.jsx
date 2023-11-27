import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export default function Dialogs(props) {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/products')
  }

  return (
    <React.Fragment>
      <BootstrapDialog
        open={props.openS}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle
          sx={{ m: 0, p: 2, backgroundColor: '#00693e',color:'white' }}
          id="customized-dialog-title"
        >
          Message from VeggieVibes
        </DialogTitle>

        <DialogContent dividers>
          <Typography gutterBottom>Dear, Customer</Typography>
          <Typography gutterBottom>Your Shopping cart is empty...</Typography>
          <Typography gutterBottom>
            Explore our products by clicking below button
          </Typography>
          <Typography gutterBottom>Happy Shopping :-)</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            autoFocus
            onClick={handleClick}
            sx={{ backgroundColor: '#00693e', color: 'white' }}
          >
            Explore
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  )
}
Dialogs.propTypes = {
  openS: PropTypes.bool.isRequired,
}
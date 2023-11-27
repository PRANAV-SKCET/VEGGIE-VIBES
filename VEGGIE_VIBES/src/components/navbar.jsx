import { useContext } from 'react'
import { AuthContext } from './context'
import '../styles/home.css'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
// import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { Avatar, Container,Button } from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import PersonIcon from '@mui/icons-material/Person'

const Navbar = () => {
  const { isLoggedIn, badge, setIsProfile } = useContext(AuthContext)
  return (
    <div>
      <Container maxWidth="xl" sx={{ flexGrow: 1, marginBottom: '80px' }}>
        <AppBar
          sx={{ background: 'linear-gradient(to bottom, #00693e, #004d2c)' }}
        >
          <Toolbar disableGutters>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              sx={{ width: '100vw' }}
            >
              <Box
                display={'flex'}
                justifyContent={'space-around'}
                alignItems={'center'}
                width={'30vw'}
              >
                <Link to="/" className="link">
                  <img
                    className="link logo"
                    src="/veggievibes-logo-white.png"
                    width={'75px'}
                    height={'50px'}
                  />
                </Link>
                <Link to="/products" className="link">
                  Products
                </Link>
                <Link to="/orders" className="link">
                  Orders
                </Link>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-around'}
                alignItems={'center'}
                width={'10vw'}
              >
                <Link to="addCart" className="log">
                  <StyledBadge
                    badgeContent={badge}
                    color="info"
                    className="icon"
                  >
                    <ShoppingCartCheckoutIcon
                      sx={{ color: 'white', '&:hover': { color: 'black' } }}
                    />
                  </StyledBadge>
                </Link>
                {isLoggedIn ? (
                  <Button onClick={()=>{setIsProfile(true)}}>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </Button>
                ) : (
                  <Link to="/login" className="log">
                    Login
                  </Link>
                )}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  )
}

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 2,
    border: '2px solid black',
    padding: '0 4px',
  },
}))

export default Navbar

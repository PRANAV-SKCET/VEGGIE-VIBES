import { useContext, useState } from 'react'
import { AuthContext } from './context'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import '../styles/home.css'
import Badge from '@mui/material/Badge'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import PersonIcon from '@mui/icons-material/Person'

// const drawerWidth = 0

export default function Profile() {
  const { badge, isLoggedIn, setIsProfile } = useContext(AuthContext)
  const [isHover, setHover] = useState(false)
  const [drawerWidth, setDrawerWidth] = useState(65)
  setIsProfile(true)

  const Account = [
    {
      id: 1,
      text: 'Account',
      icon: <AccountBoxIcon />,
      // link: '/userProfile',
    },
    {
      id: 2,
      text: 'Account Information',
      icon: <ManageAccountsIcon />,
      link: '/accountSetting',
    },
    {
      id: 3,
      text: 'Your cart',
      icon: <ShoppingCartCheckoutIcon />,
      link: '/addCart',
    },
  ]
  const Products = [
    {
      id: 1,
      text: 'Vegetables',
      icon: 'images/vegetable.png',
      hover_icon: 'images/fruit_hover.png',
      link: '/vegetables',
    },
    {
      id: 2,
      text: 'Fruits',
      icon: 'images/fruits.png',
      hover_icon: 'images/vegetable_hover.png',
      link: '/fruits',
    },
    {
      id: 3,
      text: 'Dairy',
      icon: 'images/dairy.png',
      hover_icon: 'images/dairy_hover.png',
      link: '/dairy',
    },
  ]
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: 'linear-gradient(to bottom, #00693e, #004d2c)',
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
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
              {isLoggedIn ? (
                <Link to="/profile">
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </Link>
              ) : (
                <Link to="/login" className="log">
                  Login
                </Link>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: '0px',
            background: isHover
              ? 'white'
              : 'linear-gradient(to bottom, #00693e, #004d2c)',
          },
        }}
        variant="permanent"
        anchor="left"
        onMouseOver={() => {
          setHover(true)
          setDrawerWidth(240)
        }}
        onMouseLeave={() => {
          setHover(false)
          setDrawerWidth(65)
        }}
      >
        <Toolbar
          sx={{ background: 'linear-gradient(to bottom, #00693e, #004d2c)' }}
        />
        <Divider />
        <List>
          {isHover ? (
            <Typography
              variant="h5"
              sx={{
                paddingLeft: '6px',
                color: !isHover ? 'white' : '#00693e',
              }}
            >
              Account
            </Typography>
          ) : (
            <Typography
              variant="body2"
              sx={{
                paddingLeft: '6px',
                color: !isHover ? 'white' : '#00693e',
              }}
            >
              Account
            </Typography>
          )}
          {Account.map((item) => (
            <ListItem key={item.id} disablePadding>
              <Link to={item.link}>
                <ListItemButton>
                  <ListItemIcon sx={{ color: !isHover ? 'white' : '#00693e' }}>
                    {item.text === 'Your cart' ? (
                      <Badge badgeContent={badge} color="info">
                        {item.icon}
                      </Badge>
                    ) : (
                      item.icon
                    )}
                  </ListItemIcon>
                  {isHover && <ListItemText primary={item.text} />}
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ backgroundColor: !isHover ? 'white' : '#00693e' }} />
        {isHover ? (
          <Typography
            variant="h5"
            sx={{ paddingLeft: '6px', color: !isHover ? 'white' : '#00693e' }}
          >
            Products
          </Typography>
        ) : (
          <Typography
            variant="body2"
            sx={{ py: 2, pl: '3px', color: !isHover ? 'white' : '#00693e' }}
          >
            Products
          </Typography>
        )}
        <List>
          {Products.map((item) => (
            <ListItem key={item.id} disablePadding>
              <Link to={item.link}>
                <ListItemButton>
                  <ListItemIcon sx={{ color: !isHover ? 'white' : '#00693e' }}>
                    { isHover ? <img
                      src={item.hover_icon}
                      alt={item.text}
                      width={'30px'}
                      height={'30px'}
                      /> : 
                      <img
                      src={item.icon}
                      alt={item.text}
                      width={'30px'}
                      height={'30px'}
                    />}
                  </ListItemIcon>
                  {isHover && <ListItemText primary={item.text} />}
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
      </Box> */}
    </Box>
  )
}

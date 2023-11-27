import { useSelector, useDispatch } from 'react-redux'
import {
  Typography,
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  Container,
  IconButton,
  ButtonGroup,
  Button,
} from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { removeItem } from '../redux/actions'
import Dialogs from './dialog'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { setBadge, isLoggedIn } = useContext(AuthContext)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [quantities, setQuantities] = useState({})
  const [disabled, setDisable] = useState({})
  const [price, setPrice] = useState(0)

  let cartItems = useSelector((state) => state.cartItems)
  cartItems = cartItems.filter((item, index, self) => {
    return index === self.findIndex((t) => t.id === item.id)
  })
  setBadge(cartItems.length)

  const handleClick = (index) => {
    dispatch(removeItem(index))
    setBadge(cartItems.length)
  }

  // placing items in start
  useEffect(() => {
    document.body.style.placeItems = 'start'
  }, [])

  if (cartItems.length === 0) {
    return (
      <Box sx={{ placeItems: 'center' }}>
        <Typography variant="h2">Shopping Cart</Typography>
        <Dialogs openS={true} />
      </Box>
    )
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Shopping Cart</Typography>
      <Grid
        container
        direction={'row'}
        columnSpacing={6}
        rowSpacing={2}
        sx={{ marginBottom: '20px', width: '100vw' }}
      >
        {cartItems.map((items, index) => {
          const quantity = quantities[items.id] || 1
          const isDisabled = disabled[items.id] || false

          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <CardMedia
                  component={'img'}
                  image={items.image_url}
                  alt={items.name}
                  height={160}
                />
                <CardContent>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderBottom={'2px'}
                  >
                    <Box paddingBottom={'15px'}>
                      <Typography variant="h4">{items.name}</Typography>
                      <Typography variant="h6">
                        ₹{items.price} per kg
                      </Typography>
                      {/* <Typography variant="body1">{items.description}</Typography> */}
                    </Box>
                    <Box
                      display={'flex'}
                      justifyContent={'space-evenly'}
                      alignItems={'center'}
                      sx={{ width: '100%' }}
                    >
                      <IconButton
                        onClick={() => {
                          handleClick(index)
                        }}
                        sx={{
                          transition: 'transform 0.3s',
                          '&:hover': { transform: 'scale(1.05)' },
                          '&:focus': { outline: 'none' },
                        }}
                      >
                        <RemoveShoppingCartIcon />
                        <Typography variant="h6">Remove</Typography>
                      </IconButton>
                      <Typography variant="body2">
                        Available Stock: {items.stock}
                      </Typography>
                    </Box>

                    <Box
                      display={'flex'}
                      justifyContent={'space-evenly'}
                      alignItems={'center'}
                      sx={{ width: '100%' }}
                    >
                      <Typography vaariant="h6">
                        Quantity : {quantity}
                      </Typography>
                      <ButtonGroup variant="text">
                        <Button
                          onClick={() => {
                            setQuantities((prevQuantities) => ({
                              ...prevQuantities,
                              [items.id]: quantity + 1,
                            }))
                            setDisable((prevDisabled) => ({
                              ...prevDisabled,
                              [items.id]: false,
                            }))
                            setPrice(price + items.price)
                          }}
                          sx={{
                            color: '#00693e',
                            '&:focus': { outline: 'none' },
                          }}
                        >
                          <AddCircleIcon />
                        </Button>
                        <Button
                          disabled={isDisabled}
                          onClick={() => {
                            if (quantity <= 2) {
                              setDisable((prevDisabled) => ({
                                ...prevDisabled,
                                [items.id]: true,
                              }))
                            }
                            setQuantities((prevQuantities) => ({
                              ...prevQuantities,
                              [items.id]: quantity - 1,
                            }))
                          }}
                          sx={{
                            color: '#00693e',
                            '&:focus': { outline: 'none' },
                          }}
                        >
                          <RemoveCircleOutlineIcon />
                        </Button>
                      </ButtonGroup>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        sx={{ bgColor: '#0693e', color: 'yellow' }}
      >
        {/* <Typography
          variant="h4"
          gutterBottom
        >
          Total Price of Cart : {price}
        </Typography> */}
        {isLoggedIn ? (
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'White',
              color: '#00693e',
              '&:hover': { backgroundColor: 'white' },
            }}
            onClick={() => {
              navigate('/checkout')
            }}
          >
            Checkout
          </Button>
        ) : (
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'White',
              color: '#00693e',
              '&:hover': { backgroundColor: 'white' },
            }}
            onClick={() => {
              navigate('/login')
            }}
          >
            Login to Checkout
          </Button>
        )}
      </Box>
    </Container>
  )
}

export default Cart

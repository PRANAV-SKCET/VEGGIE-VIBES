import {
  Container,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from '@mui/material'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { AuthContext } from './context'

export default function Fruits() {
  const { badge, setBadge } = useContext(AuthContext)
  const dispatch = useDispatch()
  const handleClick = (item) => {
    dispatch(addToCart(item))
    setBadge(badge + 1)
  }

  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/Fruits')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error from axios : ' + error)
      })
  }, [])

  console.log(data)
  return (
    <Container maxWidth={'xl'}>
      <Box color="black">
        <h1>Fruits</h1>
      </Box>
      <Grid
        container
        direction={'row'}
        columnSpacing={6}
        rowSpacing={2}
        sx={{ marginBottom: '20px' }}
      >
        {data.map((items) => (
          <Grid item key={items.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                width: '100%',
                height: '100%',
                // backgroundColor: '#bbc0bb',
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
                >
                  <Box paddingBottom={'15px'}>
                    <Typography variant="h4">{items.name}</Typography>
                    <Typography variant="body1">{items.description}</Typography>
                  </Box>
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    sx={{ width: '100%' }}
                  >
                    <Typography variant="h6">₹{items.price} per kg</Typography>
                    <Typography variant="body2">
                      Available Stock: {items.stock}
                    </Typography>
                    <IconButton
                      onClick={() => {
                        handleClick(items)
                      }}
                      sx={{
                        transition: 'transform 0.3s',
                        '&:hover': { transform: 'scale(2)', border: '0px' },
                        '&:focus': { outline: 'none' },
                      }}
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

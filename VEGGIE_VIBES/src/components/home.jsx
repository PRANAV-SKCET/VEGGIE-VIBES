import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from './context'

const cardsContent = [
  {
    id: 1,
    heading: 'Welcome Offer',
    description: 'Use WELCOME24 code to get welcome offer on your first order.',
    imageUrl: '/images/welcome_bg.png',
  },
  {
    id: 2,
    heading: 'Free Delivery',
    description: 'Get free delivery on bulk orders',
    imageUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20230620/pngtree-online-parcel-delivery-boxes-in-3d-rendering-on-green-background-image_3649601.jpg',
  },
  {
    id: 3,
    heading: 'Extra Offers',
    description: 'Get flat 10% offer on orders above Rs.499',
    imageUrl: 'https://img.freepik.com/premium-vector/big-sale-banner-green_49058-91.jpg',
  },
]

const defaultTheme = createTheme()

export default function Home() {
  const { setIsProfile } = useContext(AuthContext)
  setIsProfile(false)
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '97vw',
          color: 'white',
        }}
      >
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" align="center">
              Welcome to
            </Typography>
            <Typography variant="h2" align="center">
              VeggieVibes !!!
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Discover the joy of farm-fresh convenience with our app – where
              vibrant produce meets doorstep delight. Elevate your plate, one
              click at a time!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href="\login">
                <Button
                  variant="contained"
                  size={'large'}
                  sx={{
                    color: '#00693e',
                    backgroundColor: 'white',
                    '&:hover': { backgroundColor: '#00693e', color: 'white' },
                  }}
                >
                  Get Started!
                </Button>
              </Link>
              <Link href="\products">
                <Button
                  variant="outlined"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': { color: '#00693e', borderColor: '#00693e' },
                  }}
                  size="large"
                >
                  Explore
                </Button>
              </Link>
            </Stack>
          </Container>
        </Box>
      </main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cardsContent.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  // backgroundColor: '#f3f5f3',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    pt: '56.25%',
                  }}
                  image={card.imageUrl}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.heading}
                  </Typography>
                  <Typography>{card.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        sx={{ p: 0, width: '98.9vw', background: '#bbc0bb' }}
        component="footer"
      >
        <Typography variant="h5" align="center" gutterBottom>
          Fresh Picks, Fast Clicks: Your Farm-to-Table Connection in a Single
          App!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        ></Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: '#bbc0bb',
            // flexDirection: 'column',
          }}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <img src="/images/food_safety.png" width={'70px'}></img>
            <p>Food safety is ensured</p>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <img src="/images/fssai.png" width={'70px'}></img>
            <p>FSSAI approved</p>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'} 
            justifyContent={'center'}
            alignItems={'center'}
          >
            <img src="/images/organic.png" width={'70px'}></img>
            <p>100% Natural and organic</p>
          </Box>
        </Box>
        <Box bgcolor={'#bbc0bb'} m={0}>
          <Typography variant="h6" align="center" gutterBottom>
            © 2023 VeggieVibes. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

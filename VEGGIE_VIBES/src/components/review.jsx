import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { AuthContext } from './context'
import {useSelector} from 'react-redux'


const payments = [
  { name: 'Card type', detail: 'Debit' },
  { name: 'Card holder', detail: 'G Pavithran' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-3620' },
  { name: 'Expiry date', detail: 'xx/xx' },
];

export default function Review() {
    const { logData } = React.useContext(AuthContext);
    let cartPrice = 0 ;
  let products = useSelector((state) => state.cartItems)
  const addresses = logData.doorno+", "+logData.street+", "+logData.address1+", "+logData.address2+", "+logData.pincode; 

  products.forEach(item => {
    cartPrice += item.price
  })
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText>
            <Typography variant="h6" sx={{ fontWeight: 700}}>
              Total
            </Typography>
          </ListItemText>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            ₹ {cartPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{logData.name}</Typography>
          <Typography gutterBottom>{addresses}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
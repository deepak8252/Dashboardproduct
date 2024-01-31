import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Accordions from '../componebt/Accordians';
import { Barchat } from '../charts/Barchat';
import CountUp from 'react-countup';
const Home = () => {
  return (
    <div className='bgcolor'>
      <Box height={70}/>
<Box sx={{ display: 'flex' }}>

<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
<Grid container spacing={2}  >
  <Grid item lg={8} xs={12} md={3} sm={12}>
  <Stack spacing={2} direction='row'>
  <Card sx={{ minWidth: 49+"%",height:150}} className='gradient'>
      <CardContent>
      <div>
          <CreditCardIcon className='icon_style'/>
        </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
          $
          <CountUp end={500} />
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd3d1"}}>
          Total Order
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 49+"%",height:150}} className='gradientlight'>
      <CardContent>
      <div className='icon_style'>
          <ShoppingBagIcon/>
        </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
        $  <CountUp end={900} />
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd3d1"}}>
          Total Earning
        </Typography>
      </CardContent>
    </Card>
   </Stack>
  </Grid>
  <Grid item xs={12} md={9}  lg={4}>
  <Stack spacing={2} >
  <Card sx={{ minWidth: 345 }} className='gradientlight'>
      <Stack spacing={2} direction='row' >
       <div className='icon_style'>
       <StorefrontIcon/>
       </div>
      <div className='paddingall'>
      <span className='price_title'> $  <CountUp end={500} />$</span>
      <br />
      <span className='pricetotal_title'>Total Income</span>
      </div>
      </Stack > 
    </Card>
    <Card sx={{ minWidth: 345 }}>

      <Stack spacing={2} direction='row' >
       <div className='icon_styleblack'>
       <StorefrontIcon/>
       </div>
      <div className='paddingall'>
      <span className='price_title'> $  <CountUp end={308} /></span>
      <br />
      <span className='pricetotal_title'>Total Income</span>
      </div>
      </Stack > 
     
    </Card>
  </Stack>
  </Grid>
  <Grid item xs={12} lg={8} md={6}>
  <Card sx={{ height: 60 +"vh" }}>
      
      <CardContent>
      <Barchat/>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={12} lg={4} md={6}>
  <Card sx={{ height: 60 +"vh" }}>
      
      <CardContent>
      <div className='paddingall'>
      <span className='price_title'>Products</span>
      </div>
       <Accordions/>
      </CardContent>
    </Card>
  </Grid>
</Grid>
 
</Box>
</Box>
    </div>
  )
}

export default Home
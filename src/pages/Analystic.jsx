
import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Jiochart } from '../charts/Jiochart';
import { Piechart } from '../charts/Piechart';
import CountUp from 'react-countup';
import Barpiechart from '../charts/Barpiechart';

const Analystic = () => {
  return (
    <div className='bgcolor'>
      <Box height={70}/>
<Box sx={{ display: 'flex'}}>

<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
<Grid container spacing={2} >
  <Grid item xs={12} lg={6} md={6}>
  <Stack spacing={2} direction='row' >
  <Card sx={{ minWidth: 49+"%",height:150}} className='gradient'>
      <CardContent>
      <div>
          <CreditCardIcon className='icon_style'/>
        </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
         
          <CountUp end={500} />$

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
        $<CountUp end={900} />
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd3d1"}}>
          Total Earning
        </Typography>
      </CardContent>
    </Card>
   </Stack>
   <Stack spacing={2} direction='row' sx={{marginTop:2}}>
   <Card sx={{ minWidth: 49+"%",height:150}} className='gradientlight'>
      <CardContent>
      <div className='icon_style'>
          <ShoppingBagIcon/>
        </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
        $ <CountUp end={6000} />$
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd3d1"}}>
          Total Earning
        </Typography>
      </CardContent>
    </Card>
  <Card sx={{ minWidth: 49+"%",height:150}} className='gradient'>
      <CardContent>
      <div>
          <CreditCardIcon className='icon_style'/>
        </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
             <CountUp end={500} />$
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd3d1"}}>
          Visitors
        </Typography>
      </CardContent>
    </Card>
   
   </Stack>
  </Grid>
  <Grid item xs={12} md={6} lg={6}>
  <Stack spacing={2} >
  <Card sx={{ minWidth: 345 }} className='gradientlight'>
      <Stack spacing={2} direction='row' >
     <Barpiechart/>
      </Stack > 
    </Card>
  </Stack>
  </Grid>
  <Grid item xs={12} md={8} lg={8}>
  <Card sx={{ height: 60 +"vh" }}>
      
      <CardContent>
      <Jiochart/>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={12} md={4} lg={4}>
  <Card sx={{ height: 60 +"vh" }}>
      
      <CardContent>
     <Piechart/>
      </CardContent>
    </Card>
  </Grid>
</Grid>
 
</Box>
</Box>
    </div>
  )
}

export default Analystic
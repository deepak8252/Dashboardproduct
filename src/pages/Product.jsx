import React from 'react'
import Box from '@mui/material/Box';
import Productlist from './Productlist';
const Product = () => {
  return (
    <div>
          <Box height={30}/>
<Box sx={{ display: 'flex' }}>
<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
<h2>hello</h2>
<Productlist/>
    </Box>
    
</Box>

    </div>
  )
}

export default Product
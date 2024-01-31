
import * as React from 'react';
import Box from '@mui/material/Box';

import Sidenavbar from '../componebt/Sidenavbar';
import List from '../componebt/List';
const Setting = () => {
  return (
    <div>
         <Box height={30}/>
<Box sx={{ display: 'flex' }}>
<Sidenavbar/>
<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  <List/>
 
</Box>
</Box>
    </div>
  )
}

export default Setting
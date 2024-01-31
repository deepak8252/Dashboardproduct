
import * as React from 'react';
import Box from '@mui/material/Box';

import Sidenavbar from '../componebt/Sidenavbar';
import Profile from '../componebt/Profile';
const About = () => {
  return (
    <div>
         <Box height={30}/>
<Box sx={{ display: 'flex' }}>

<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
 
 <Profile/>
</Box>
</Box>
    </div>
  )
}

export default About
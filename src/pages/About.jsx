
import * as React from 'react';
import Box from '@mui/material/Box';

import Sidenavbar from '../componebt/Sidenavbar';
const About = () => {
  return (
    <div>
         <Box height={30}/>
<Box sx={{ display: 'flex' }}>
<Sidenavbar/>
<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  <h2>About</h2>
 
</Box>
</Box>
    </div>
  )
}

export default About
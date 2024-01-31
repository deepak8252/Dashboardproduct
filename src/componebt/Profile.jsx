import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Personaldata from './Personaldata';
import Aboutme from './Aboutme';



export default function Profile() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}  sm={12} md={4}>
            <Personaldata/>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
         <Aboutme/>                         
        </Grid>
      </Grid>
    </Box>
  );
}
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Profile from './Profile';
import { Grid } from '@mui/material';
import Home from "../pages/Home"
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function List() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
     <Grid container spacing={2} >
     <Grid item  sm={12} md={12} lg={12}>
     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Personal Details" {...a11yProps(1)} />
          <Tab label="My Account" {...a11yProps(2)} />
        </Tabs>
      </Box>
     </Grid>
     </Grid>
      <CustomTabPanel value={value} index={0}>
        <Profile/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Profile/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Home/>
      </CustomTabPanel>
    </Box>
  );
}
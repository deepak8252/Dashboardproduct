import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

const Addproductlist = () => {
  return (
   <>
    <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Product
          </Typography>
          <IconButton sx={{position:"absolute", right:"0", top:"0", background:"red", color:"white"}}>
         <CloseIcon  sx={{ background:"red", color:"white"}} />
          </IconButton>
   </>
  )
}

export default Addproductlist
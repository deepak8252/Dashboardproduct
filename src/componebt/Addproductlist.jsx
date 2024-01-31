import { Grid, IconButton, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import { productname } from "../util/constant";
import InputAdornment from '@mui/material/InputAdornment';
import { getDocs } from "firebase/firestore";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "../util/firebase";
import Swal from "sweetalert2";
import { useAppStore } from "../util/appstore";
const empCollectionRef = collection(db, "products");
const Addproductlist = ({closeEvent}) => {
  const [name,setname]=useState("");
  const [price,setPrice]=useState("");
  const [cateogery,setCateogery]=useState("");
  const setRows=useAppStore((state)=>state.setRows)
  const handleNameChange=(e)=>{
       setname(e.target.value)
  }
  const handlePriceChange=(e)=>{
     setPrice(e.target.value)
  }
  const handleCateogeryChange=(e)=>{
    setCateogery( e.target.value)
  }
  const createuser=async()=>{
    await addDoc(empCollectionRef,{
      name:name,
      price:Number(price),
      category:cateogery,
      date:String(new Date()),

    })
     getUser();
     closeEvent();
     Swal.fire("Sucess!", "Your file has been Added.", "success");
  };
  
  const getUser = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
   <>
    <Box sx={{m:2}}/>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{margin:5}}>
            Add Product
          </Typography>
          <IconButton sx={{position:"absolute", right:"0", top:"0", background:"red", color:"white"}} onClick={closeEvent}>
         <CloseIcon  sx={{ background:"red", color:"white"}} />
          </IconButton>
          <Box sx={{height:20}}/>
       <Grid container spacing={2}>
        <Grid item sm={12}>
        <TextField id="standard-basic" label="Name" variant="outlined" sx={{minWidth:"100%"  }} size="small" 
        value={name}
        onChange={handleNameChange}
        />
        </Grid>
        <Grid item sm={6} xs={6}>
        <TextField id="standard-basic" label="Price" 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CurrencyRupeeIcon />
              </InputAdornment>
            ),
          }}
        type="number" variant="outlined" sx={{minWidth:"100%"  }} size="small"
        onChange={handlePriceChange} value={price}
        />
        </Grid>
        
        <Grid item sm={6} xs={6}>
        <TextField id="standard-basic" label="Cateogery" variant="outlined" sx={{minWidth:"100%"  }} size="small"
        value={cateogery}
        onChange={handleCateogeryChange}
        select>
           {productname.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
        
        <Grid item xm={12}>
        <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
             align="center"
            >
            <Button variant="contained" onClick={createuser} >
              Sumbit
            </Button>
            </Typography>
        </Grid>
       </Grid>
       <Box sx={{margin:5}}/>
   </>
  )
}

export default Addproductlist
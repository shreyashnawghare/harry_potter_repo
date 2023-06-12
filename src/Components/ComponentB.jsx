import React from "react";
import { useDispatch } from "react-redux";
import actions from "../Redux/action";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const ComponentB = () => {
  const input = useDispatch();

  const handleInput = (e) => {
    console.log(e.target.value);
    input(actions(e.target.value));
  };

  return (
   
    <Box sx={{marginTop:"40px"}}>
    <TextField
        id="outlined-basic"
        label="Enter-Text"
        variant="outlined"
        onChange={handleInput}
        sx={{width:'900px'}}
      />
    </Box>
      
    
  );
};

export default ComponentB;

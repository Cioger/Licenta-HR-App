import React from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Divider } from "@mui/material";
import Chip from '@mui/material/Chip';

import '../../css/Login.css';
import TextField from '@mui/material/TextField';
import Navbar from "../NavBar";

  export const EmployeeAdd = () => {
    
    return (
      
      <div>
         <Navbar/>
        <div class="center">
        <Box
        component="form"
        noValidate
        autoComplete="off"
      >
       <Divider>
    <Chip label="NAME" />
  </Divider>
  <br></br>
  <TextField id="outlined-basic" textAlign={'center'} variant="outlined" />
  <br></br>
      <br></br>
      <Divider>
    <Chip label="POSITION" />
  </Divider>
  <br></br>
  <TextField id="outlined-basic" textAlign={'center'} variant="outlined" />
  <br></br>
      <br></br>
      <Divider>
      <br></br>
    <Chip label="MANAGER" />
  </Divider>
  <br></br>
  <TextField id="outlined-basic" textAlign={'center'} variant="outlined" />
  <br></br>
      <br></br>
      <Divider>
    <Chip label="SALARY" />
  </Divider>
  <br></br>
  <TextField id="outlined-basic" textAlign={'center'} variant="outlined" />
  <br></br>
      <br></br>
      <Divider>
    <Chip label="CO DAYS" />
  </Divider>
 <br></br>
  <TextField id="outlined-basic" textAlign={'center'} variant="outlined" />
  <br></br>
  <br></br>
  <Button variant="contained">Add Employee</Button>
  <br></br>
      </Box>
     </div>
      </div>
    );
  }
export default EmployeeAdd;
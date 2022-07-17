import React from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";
import Chip from '@mui/material/Chip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../css/Login.css';
import TextField from '@mui/material/TextField';
import Navbar from "../NavBar";

  export const EmployeePage = () => {
    const [Albocensa, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
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
      <Typography variant="body1" gutterBottom>
        Theo Balan
      </Typography>
      <br></br>
      <Divider>
    <Chip label="POSITION" />
  </Divider>
     
      <Typography variant="body1" gutterBottom>
        CEO
      </Typography>
      <Divider>
      <br></br>
    <Chip label="MANAGER" />
  </Divider>
      
      <Typography variant="body1" gutterBottom>
        -
      </Typography>
      
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
      <Divider>
    <Chip label="PROJECT" />
  </Divider>
  <br></br>
  <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Project</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Albocensa}
          label="Project"
          onChange={handleChange}
        >
          <MenuItem value={10}>Albocensa</MenuItem>
          <MenuItem value={20}>Axway</MenuItem>
          <MenuItem value={30}>Electrolux</MenuItem>
          <MenuItem value={40}>Chronos</MenuItem>
        </Select>
      </FormControl>
      <Divider></Divider>
      </Box>
     </div>
      </div>
    );
  }
export default EmployeePage;
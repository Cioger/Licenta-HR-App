import React from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../../css/Login.css';


  export const Login = () => {
    
    return (
        <div class="center">
       <Card sx={{ minWidth: 275, maxWidth:400, display:'flex'}}>
       <CardContent>
       <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Email" variant="outlined" /><br></br>
        <TextField id="outlined-basic" label="Password" variant="outlined" /><br></br>
        <Button variant="contained">LogIn</Button>
       <Button href='/register' size="small">Register</Button>
      </Box>
       </CardContent>
      
     </Card>
     </div>
    );
  }
export default Login;
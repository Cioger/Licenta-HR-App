import {React,useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from '@mui/material';
import '../../css/Table.css'
import axios from 'axios';


export default function EmployeeTable() {

  const [employees, setEmployees]=useState([]);
  useEffect(()=>{
    try{
        axios.get('http://localhost:8080/api/employee').then((res)=>{
          const data=res.data;
          setEmployees(data.employees);
          console.log(employees);
        })
  
    }catch(err){
      console.err(err.response)
    }
  },[]);
  console.log(employees);
  return (
    <div className='table'>
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 200, maxWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="center"><b>Position</b></TableCell>
            <TableCell align="center"><b>Manager</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees?.map((emp) => (
            <TableRow
              key={emp.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               <Link href='/employees/employeepage' underline='none' >{emp.name}</Link>
              </TableCell>
              <TableCell align="center">{emp.position}</TableCell>
              <TableCell align="center">{emp.manager}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
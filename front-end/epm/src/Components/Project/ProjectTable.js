import {React,useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../css/Table.css'
import axios from 'axios';

function createData(name, employees) {
    return { name, employees};
  }

const projects = [
  createData('Electrolux', ['Mihai Bisoceanu, ' ,'Mihai Zamfirescu']),
  createData('Axway', ['Ion Gheorghescu, ','Alex Stanescu, ','Mihai Barbulescu']),
  createData('Chronos', ['Mircea Cernat, ','Gabriel Oprea, ','Alexandru Stefan']),
  createData('Albocensa', ['Theo Balan, ','Matei Minulescu']),
];


export default function ProjectTable() {
  const [projects, setProjects]=useState([]);
  const [employees, setEmployees]=useState([]);
  const [employeesByProj, setEmployeesByProj]=useState([]);



  useEffect(()=>{
    try{
        axios.get('http://localhost:8080/api/employee').then((res)=>{
          const dataE=res.data;
          setEmployees(dataE.employees);
          console.log(employees);
        })
    }catch(err){
      console.err(err.response)
    }
  },[]);

  useEffect(()=>{
    try{
      axios.get('http://localhost:8080/api/project/').then((res)=>{
        const dataP=res.data;
        setProjects(dataP.project);
        console.log(projects);
      })
    }catch(err){
      console.err(err.response)
    }
  },[]);
  console.log(employees);
  console.log(projects);
  return (
    <div className='table2'>
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 100, maxwidth:400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="center"><b>Employees</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects?.map((project) => (
            <TableRow
              key={project.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
               {project.name}
              </TableCell>
              <TableCell align="center">{employees.filter( employee => employee.projectId == project.id).map(employee=> employee.name+", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

import './App.css';
import Home from "./Components/Home";
import Employee from "./Components/Employee/Employees"
import Project from './Components/Project/Projects';
import Statistic from './Components/Statistic/Statistics';
import {Route, Routes} from "react-router-dom"
import Navbar from './Components/NavBar';
import EmployeePage from './Components/Employee/EmployeePage';
import Login from './Components/Register/Login';
import Register from './Components/Register/Register';
import EmployeeAdd from './Components/Employee/EmployeeAdd';


function App() {
  return (
    <div className="App">
     
      <Routes>
        
        <Route path="/" element={<Login/>} />
        <Route path="/employees" element={<Employee/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/statistics" element={<Statistic/>} />
        <Route path="/employees/employeepage" element={<EmployeePage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/employees/employeeadd" element={<EmployeeAdd/>} />
      </Routes>
    </div>
  );
}

export default App;

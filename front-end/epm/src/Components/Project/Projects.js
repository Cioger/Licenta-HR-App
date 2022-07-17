import React from "react"
import Navbar from "../NavBar";
import ProjectTable from "./ProjectTable";
  
  export const Project = () => {
    
    return (
     <div>
       <Navbar/>
        <h1>Project</h1>
        <ProjectTable/>
     </div>
    );
  }
export default Project;
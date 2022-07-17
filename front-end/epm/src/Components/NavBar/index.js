import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/home' >
            Employee Project Management
          </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/employees' >
            Employees
          </NavLink>
          <NavLink to='/projects' >
            Projects
          </NavLink>
          <NavLink to='/statistics'>
            Statistics
          </NavLink>
          
          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>LogOut</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
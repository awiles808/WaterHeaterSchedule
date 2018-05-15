import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../customnavbar.css';


 class CustomNavbar extends Component {
  render() {
    return(
      <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
    <Link to='/'>Home</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="./login">
    {/* <NavItem eventKey={1} componentClass={Link} to='/login'> */}
      Log In
    </NavItem>
      {/* <NavItem eventKey={2} componentClass={Link} to='/login'> */}
    <NavItem eventKey={2} href="./login">
    {/* eventKey={2} componentClass={Link} to='/login'> */}
      Water Heater
    </NavItem>
    <NavItem eventKey={3} href="./login">
    {/* <NavItem eventKey={3} componentClass={Link} to='/login'> */}
      Service Calls
    </NavItem>
    <NavItem eventKey={4} href="./login">
    {/* eventKey={3} componentClass={Link} to='/login'> */}
      Remodel / Future Jobs
    </NavItem>
    <NavDropdown eventKey={5} title="Other" id="basic-nav-dropdown">
      <MenuItem eventKey={5.1} href="./form">To Do</MenuItem>
      <MenuItem eventKey={5.2}>Future Link</MenuItem>
      <MenuItem eventKey={5.3}>Future Link</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={5.4} href="/">Home</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
    )
  }
}
export default CustomNavbar










//       <Navbar default collapseOnSelect>
//         <Navbar.Header>
//           <Navbar.Brand>
            // <Link to='/'>Home</Link>
//           </Navbar.Brand>
//           <Navbar.Toggle />
//         </Navbar.Header>
//           <Navbar.Collapse>
//             <Nav pullRight>
//                 <NavItem eventKey={1} componentClass={Link} to='/water'>
// //                 Results
// //               </NavItem>
// //             </Nav>
// //         </Navbar.Collapse>
// //       </Navbar>
// //     )
// //   }
// // }

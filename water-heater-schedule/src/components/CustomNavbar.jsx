import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
    <NavItem eventKey={1} href="./customer">
    {/* <NavItem eventKey={1} componentClass={Link} to='/customer'> */}
      Customer Information
    </NavItem>
      {/* <NavItem eventKey={2} componentClass={Link} to='/water'> */}
    <NavItem eventKey={2} href="./water">
    {/* eventKey={2} componentClass={Link} to='/water'> */}
      Water Heater Information
    </NavItem>
    <NavItem eventKey={3} href="./results">
    {/* eventKey={3} componentClass={Link} to='/results'> */}
      Results
    </NavItem>
    <NavDropdown eventKey={4} title="Other Links" id="basic-nav-dropdown">
      <MenuItem eventKey={4.1}>Future Link</MenuItem>
      <MenuItem eventKey={4.2}>Future Link</MenuItem>
      <MenuItem eventKey={4.3}>Future Link</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={4.4} href="/">Home</MenuItem>
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

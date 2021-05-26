
import {
  Link
} from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  }  from 'reactstrap';
  
function Header() {
  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Tdee Calculator</NavbarBrand>
          <NavbarToggler/>
          <Collapse isOpen={false} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/"><NavLink>Home</NavLink></Link>
              </NavItem>
              <NavItem>
              <Link to="/about"><NavLink>About</NavLink></Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Link to="/homenew"><NavbarText>Portfolio</NavbarText></Link>
          </Collapse>
        </Navbar>
      </div>

    </>
  );
}

export default Header; 

import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBarTop = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to='/'> DaydreamFX. </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/mynews"> My News. </Nav.Link>
                    <Nav.Link as={Link} to="/currencies"> My Currencies. </Nav.Link>
                    

                    <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#/"> Home. </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1"> About. </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3"> GitHub. </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link eventKey={2} as={Link} to="/register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarTop;
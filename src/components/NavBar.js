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
                    <Nav.Link as={Link} to="/about"> About. </Nav.Link>
                    <Nav.Link as={Link} to="currencies"> Currencies. </Nav.Link>
                    

                    <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/mynews"> My News. </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/mycurrencies"> My Currencies. </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/github"> GitHub. </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarTop;
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../actions/actions';
import { useHistory } from 'react-router-dom';

const NavBarTop = (props) => {
    const history = useHistory()

    const handleLogout = (e) => {
        e.preventDefault()
        props.logOut()
        history.push('/login')
    }

    
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to='/'> DaydreamFX. </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/about"> About. </Nav.Link>
                    <Nav.Link as={Link} to="/currencies"> Currencies. </Nav.Link>
                    

                    <NavDropdown title="MyDFX" id="collapsible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/mynews"> My Profile. </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/mycurrencies"> My Currencies. </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="(https://github.com/jasmincimone/front-end)"> GitHub. </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/login">Login </Nav.Link>
                    <Nav.Link as={Link} to="/register"> Register </Nav.Link>
                    <Nav.Link as={Link} to="/" onClick={handleLogout}> Log Out </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default connect (null, {logOut}) (NavBarTop);
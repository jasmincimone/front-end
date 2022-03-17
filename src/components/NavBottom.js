import { Navbar, Container, } from "react-bootstrap";

const NavBottom= () => {
    let localUsername = localStorage.getItem('username')
    return(
        <Navbar sticky="bottom" style={{paddingTop: '9.375em'}}>
            <Container>
                <Navbar.Brand href="#home">DaydreamFX</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">{localUsername}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBottom;
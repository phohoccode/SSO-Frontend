import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

    const handleLogin = () => {
        window.location.href = 
            `${process.env.REACT_APP_BACKEND_SSO}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`
    }


    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">SSO-HOIDANIT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className='nav-link' to='/'>Home</NavLink>
                            <NavLink className='nav-link' to='/About'>About</NavLink>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Setting" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => handleLogin()}>Login</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
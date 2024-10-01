import { NavLink, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from "react-redux";
import { doLogout } from "../../redux/action/accountAction";

function Header() {
    const user = useSelector(state => state.account.userInfo)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = () => {
        window.location.href =
            `${process.env.REACT_APP_BACKEND_SSO_LOGIN}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`
    }

    const handleLogout = () => {
        dispatch(doLogout())
        navigate('/')
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

                        {(user && user.access_token) &&
                            <Nav>
                                <Nav.Link>Xin chào! {user.username}</Nav.Link>
                            </Nav>
                        }
                        <Nav>
                            <NavDropdown title="Setting" id="basic-nav-dropdown">
                                {user && user.access_token ?
                                    <NavDropdown.Item onClick={() => handleLogout()}>Đăng xuất</NavDropdown.Item> :
                                    <NavDropdown.Item onClick={() => handleLogin()}>Đăng nhập</NavDropdown.Item>
                                }
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
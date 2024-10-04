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
            `${process.env.REACT_APP_BACKEND_SSO_LOGIN}?serviceURL=${process.env.REACT_APP_CURRENT_PROJECT_URL}`
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
                            <NavLink className='nav-link' to='/'>Trang chủ</NavLink>
                            <NavLink className='nav-link' to='/weather'>Thời tiết</NavLink>
                        </Nav>

                        {(user && user.access_token) &&
                            <Nav>
                                <Nav.Item>Xin chào! {user.email} | </Nav.Item> 
                            </Nav>
                        }
                        <Nav>
                            {user && user.access_token ?
                                <Nav.Link onClick={() => handleLogout()}>Đăng xuất</Nav.Link> :
                                <Nav.Link onClick={() => handleLogin()}>Đăng nhập</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
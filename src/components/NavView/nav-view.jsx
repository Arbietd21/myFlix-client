import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBar = ({ user, onLoggedOut }) => {
    return (
        <Navbar bg='primary' expand='lg' data-bs-theme="dark" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to='/'> MyFlix</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    {!user && (
                        <Nav>
                            <Nav.Link as={Link} to='/login'> Login </Nav.Link>
                            <Nav.Link as={Link} to='/signup'> SignUp </Nav.Link>
                        </Nav>
                    )}
                    {user && (
                        <>
                            <Nav>
                                <Nav.Link as={Link} to='/'>Movies</Nav.Link>
                                <Nav.Link as={Link} to='/profile'> Profile </Nav.Link>
                                <Nav.Link onClick={onLoggedOut}> Logout </Nav.Link>
                            </Nav>
                        </>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
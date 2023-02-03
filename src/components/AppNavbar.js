import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AppNavbar.css';

function AppNavbar() {
  return (
        <Navbar bg="dark" variant="dark">
        <Container fluid>
        <Navbar.Brand href="/">SnkGPT</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
}

export default AppNavbar;
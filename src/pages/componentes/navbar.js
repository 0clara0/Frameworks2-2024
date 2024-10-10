import {Container, Nav, Navbar} from 'react-bootstrap';

export default function Menu() {
  return (
    <Container>
    <Navbar expand="sm" className="border rounded degrademenu p-1">
        <Navbar.Brand href="/">6V</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Container>
    );
}
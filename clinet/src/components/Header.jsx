import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="primary" expand="lg"  >
    <Container>
    <Link to="/" className="navbar-brand" variant="white" style={{ color: 'white' }}>Movie App</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="nav-link" style={{ color: 'white' }}>Home</Link>
          <Link to="/addmovies" className="nav-link" style={{ color: 'white' }}>Add Movies</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
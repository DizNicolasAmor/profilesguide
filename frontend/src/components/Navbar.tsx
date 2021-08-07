import { Navbar, Container, Nav } from "react-bootstrap";

interface NavbarComponentProps {
  user?: string;
}

const NavbarComponent: React.FunctionComponent<NavbarComponentProps> = ({
  user,
}) => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">PROFILES GUIDE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComponent;

import React, { FC } from "react";
import { Button, Navbar, Nav } from "react-bootstrap";

interface NavbarComponentProps {
  user?: string;
}

const NavbarComponent: FC<NavbarComponentProps> = ({ user }) => (
  <Navbar bg="light" expand="lg">
    <div className="m-auto d-flex align-center justify-center">
      <Nav.Link href="/">Home</Nav.Link>
      {!user ? (
        <>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
        </>
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        <Button variant="primary" onClick={() => {}}>
          Logout
        </Button>
      )}
    </div>
  </Navbar>
);

export default NavbarComponent;

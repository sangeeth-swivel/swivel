import { Button, Container, Nav, NavLink, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" sticky="top" style={{ backgroundColor: "transparent" }}>
        <Container>
          <Nav
            className="justify-content-center align-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink href="/about-us" style={{ color: "white" }}>
              About Us
            </NavLink>
            <NavLink href="/newsroom" style={{ color: "white" }}>
              Newsroom
            </NavLink>
            <NavLink href="/careers" style={{ color: "white" }}>
              Careers
            </NavLink>
          </Nav>
          <Button
            variant="outline-success"
            href="/contact-us"
            className="ms-auto"
          >
            Let's Talk
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

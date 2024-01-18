import {
  Container,
  Nav,
  NavLink,
  Navbar,
} from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar expand="lg" sticky="top" style={{ backgroundColor: "transparent" }}>
        <Container>
        <Nav
            className="justify-content-center align-items-center"
            style={{ maxHeight: "100px"}}
            navbarScroll
          >
            <NavLink href="" style={{ color: "white" }}> Home </NavLink>
            <NavLink href="/about-us" style={{ color: "white" }}> About Us </NavLink>
            <NavLink href="/newsroom" style={{ color: "white" }}> Newsroom </NavLink>
            <NavLink href="/careers" style={{ color: "white" }}> Careers </NavLink>
            <NavLink href="/careers" style={{ color: "white" }}> Sitemap </NavLink>
          </Nav>
        </Container>
        <Container style={{ color: "white"}}>
          <p>
            © 2023 Swivel Group All Rights Reserved
            <br />
            Privacy Policy Cookie Policy
          </p>
        </Container>
      </Navbar>
    </>
  );
};
export default Footer;

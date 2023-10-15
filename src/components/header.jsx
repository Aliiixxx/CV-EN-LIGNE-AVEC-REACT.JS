import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "./image/icon.png"; 
export default function Header() {
  const isMobile = window.innerWidth <= 767;

  const navStyle = {
    width: "100%",
    height: "50px",
    bottom: 0,
    left: 0,
    backgroundColor: "#1e1e1e",
    flexDirection: isMobile ? "column" : "row",
    
  };

  const linkStyle = {
    color: "#EEE",
    textDecoration: "none",
    transition: "background-color 0.3s",
  };


  return (
    <header id="header" style={navStyle}>
      <div className="container" id="navbar">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src={Icon}
                alt="Icon"
                width="32"
                height="32"
                style={{ marginRight: "10px" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className={isMobile ? "ml-auto" : "ms-auto"}>
                <Nav.Link as={Link} to="/" className="nav-link text-light">
                  ACCUEIL
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/services"
                  style={linkStyle}
                  className="text-light"
                >
                  SERVICES
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/realisations"
                  style={linkStyle}
                  className="text-light"
                >
                  RÉALISATIONS
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/blog"
                  style={linkStyle}
                  className="text-light"
                >
                  BLOG
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  style={linkStyle}
                  className="text-light"
                >
                  ME CONTACTER
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

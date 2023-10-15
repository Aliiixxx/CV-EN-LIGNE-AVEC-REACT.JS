import { useState, useEffect } from "react";
import { Accordion, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MentionsLegales = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.querySelector(
      "head"
    ).innerHTML += `<meta name="robots" content="noindex, nofollow">`;
  }, []);

  const h1Style = {
    textAlign: "center",
    marginTop: "20px",
  };
  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "20px",
  };

  return (
    <Container>
      <h1 style={h1Style}>MENTIONS LÉGALS</h1>
      <div
        style={{
          width: "50%",
          margin: "0 auto",
          border: "3px solid black",
          marginBottom: "40px",
        }}
      ></div>
      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            <h1>John Doe</h1>
            <p>📍40 Rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>
              <Link to="tel:+33620304050"> ☎ 06 20 30 40 50</Link>
            </p>
            <Link to="mailto:john.doe@gmail.com"> 📧 john.doe@gmail.com</Link>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Hébergeur du site</Accordion.Header>
          <Accordion.Body>
            <h1>Always Data</h1>
            <p>91 rue du Faubourg Saint Honoré</p>
            <p>75008 Paris</p>
            <Link to="https://alwaysdata.com" target="_blank">
              www.alwaysdata.com
            </Link>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <p>Site développé par John Doe, étudiant du CEF.</p>
            <p>
              Les images libres de droit sont issues du site{" "}
              <Link to="https://pixabay.com/" target="_blank">
                pixabay
              </Link>
              .
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div style={buttonStyle}>
        <Button onClick={() => setIsOpen(!isOpen)} disabled={isOpen}>
          {isOpen ? "Fermer" : "Ouvrir"}
        </Button>
      </div>
    </Container>
  );
};

export default MentionsLegales;

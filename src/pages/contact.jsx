import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import backgroundImg from "../components/image/background.jpg";

function Contact() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px",
  };

  const containerStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
  };

  const buttonStyle = {
    margin: "20px auto",
    display: "block",
  };

  return (
    <div style={sectionStyle}>
      <Container style={containerStyle}>
        <Row className="text-center">
          <Col xs={12}>
            <h1>Me contacter</h1>
            <p>
              Pour me contacter en vue d'un entretien ou d'une future
              collaboration, merci de remplir le formulaire de contact.
            </p>
            <div
              style={{
                width: "50%",
                margin: "0 auto",
                border: "3px solid black",
                marginBottom: "20px",
              }}
            ></div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Form>
              <Form.Group controlId="nom">
                <Form.Label>Votre nom</Form.Label>
                <Form.Control
                  type="text"
                  name="nom"
                  placeholder="Votre nom"
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Votre adresse e-mail</Form.Label>
                <Form.Control
                  type="email"
                  name="eMail"
                  placeholder="Votre adresse e-mail"
                  required
                />
              </Form.Group>
              <Form.Group controlId="numeroDeTelephone">
                <Form.Label>Votre numéro de téléphone</Form.Label>
                <Form.Control
                  type="tel"
                  name="numeroDeTelephone"
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </Form.Group>
              <Form.Group controlId="sujet">
                <Form.Label>Sujet</Form.Label>
                <Form.Control
                  type="text"
                  name="sujet"
                  placeholder="Sujet de votre message"
                  required
                />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Votre message"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" style={buttonStyle}>
                Envoyer
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <Card.Header>Mes coordonnées</Card.Header>
              <Card.Body>
                <p>
                  <strong>Adresse :</strong> 40 Rue Laure Diebold, 69009 Lyon,
                  France
                </p>
                <p>
                  <strong>Numéro de téléphone :</strong>
                  <Link to="tel:+33620304050">06 20 30 40 50</Link>
                </p>
                <iframe
                  width="100%"
                  height="300"
                  style={{ border: "0" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.3184130116335!2d4.835623315166979!3d45.76046507910592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4f7a5cbfbb463%3A0xb8a0472b2b825de1!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sen!2sfr!4v1648040361213!5m2!1sen!2sfr"
                  allowFullScreen
                  title="Carte de localisation"
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;

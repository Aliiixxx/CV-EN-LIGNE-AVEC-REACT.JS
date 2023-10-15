import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "../components/image/imageService.jpg";

function Services() {
  const [services] = useState([
    {
      title: "UX Design",
      description:
        "L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.",
    },
    {
      title: "Développement web",
      description:
        "Le développement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.",
    },
    {
      title: "Référencement",
      description:
        "Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en œuvre pour améliorer sa position dans les résultats des moteurs de recherche.",
    },
  ]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <div src={Image} alt="Image" style={{ width: "100%", height: "200px" }} />
      <Container>
        <Row>
          <Col sm={12} className="text-center">
            <h1 style={{ margin: "20px 0" }}>MON OFFRE DE SERVICES</h1>
            <h2>Voici les prestations sur lesquelles je peux intervenir.</h2>
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
          {services.map((service, index) => (
            <Col key={index} sm={6}>
              <Card
                style={{
                  margin: "20px 0",
                  backgroundColor: hoveredIndex === index ? "#cde1f8" : "",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card.Header
                  className="text-center bg-primary"
                  style={{ padding: "20px 0" }}
                >
                  <h4 style={{ color: "white" }}>{service.title}</h4>
                </Card.Header>
                <Card.Body>
                  <p>{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Services;

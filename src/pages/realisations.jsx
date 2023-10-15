import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "../components/image/imageService.jpg";
import Image1 from "../components/image/imgageFreshFood.jpg";
import Image2 from "../components/image/imageAkira.jpg";
import Image3 from "../components/image/imageBienEtre.jpg";

function Realisations() {
  const [projects] = useState([
    {
      title: "Fresh food",
      description: "Réalisation d'un site avec commande en ligne.",
      image: Image1,
      link: "https://fresh-food.com",
    },
    {
      title: "Restaurant Akira",
      description: "Réalisation d'un site vitrine.",
      image: Image2,
      link: "https://akira-restaurant.com",
    },
    {
      title: "Espace bien-être",
      description:
        "Réalisation d'un site vitrine pour un praticien de bien-être.",
      image: Image3,
      link: "https://espace-bien-etre.com",
    },
  ]);

  return (
    <div>
      <div src={Image} alt="Image" style={{ width: "100%", height: "200px" }} />
      <Container>
        <Row>
          <Col sm={12} className="text-center">
            <h1 style={{ margin: "20px 0" }}>PORTFOLIO</h1>
            <h2>Voici quelques-unes de mes réalisations.</h2>
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
          {projects.map((project, index) => (
            <Col key={index} sm={6}>
              <Card style={{ margin: "20px 0" }}>
                <div style={{ position: "relative", paddingBottom: "100%" }}>
                  <Card.Img
                    src={project.image}
                    alt={project.title}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Card.Header
                  className="text-center bg-primary"
                  style={{ padding: "20px 0" }}
                >
                  <h4 style={{ color: "white" }}>{project.title}</h4>
                </Card.Header>
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <p>{project.description}</p>
                  <Button variant="primary" href={project.link}>
                    Voir
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Realisations;

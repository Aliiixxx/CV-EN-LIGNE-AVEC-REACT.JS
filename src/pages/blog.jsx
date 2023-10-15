import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "../components/image/imageService.jpg";
import Image1 from "../components/image/imgaHtml.jpg";
import Image2 from "../components/image/imageMonaie.jpg";
import Image3 from "../components/image/imageGoogle.jpg";
import Image4 from "../components/image/imageDesigner.jpg";
import Image5 from "../components/image/imageSeo.jpg";
import Image6 from "../components/image/imageApprendreCoder.jpg";

function Blog() {
  const [articles] = useState([
    {
      title: "Coder son site en HTML/CSS",
      date: "2023-08-22",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Image1,
      link: "https://www.CodersonsiteenHTML.com",
    },
    {
      title: "Vendre ses produits sur le web",
      date: "2023-08-20",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Image2,
      link: "https://Vendresesproduitssurleweb.com",
    },
    {
      title: "Se positionner sur Google",
      date: "2023-08-18",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Image3,
      link: "https://www.SepositionnersurGoogle.com",
    },
    {
      title: "Coder en responsive design",
      date: "2023-08-12",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Image4,
      link: "https://www.Coderenresponsivedesign.com",
    },
    {
      title: "Techniques de référencement",
      date: "2023-08-10",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Image5,
      link: "https://Techniquesderéférencement.com/",
    },
    {
      title: "Apprendre à coder",
      date: "2023-08-28",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Image6,
      link: "https://www.Apprendreàcoder.com",
    },
  ]);

  return (
    <div>
      <div
        src={Image}
        alt=" Image"
        style={{ width: "100%", height: "200px" }}
      />
      <Container>
        <Row>
          <Col sm={12} className="text-center">
            <h1 style={{ margin: "20px 0" }}>BLOG</h1>
            <h2>Retrouvez ici quelques articles sur le développement web.</h2>
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
          {articles.map((article, index) => (
            <Col key={index} sm={6}>
              <Card style={{ margin: "20px 0" }}>
                <div style={{ position: "relative", paddingBottom: "100%" }}>
                  <Card.Img
                    src={article.image}
                    alt={article.title}
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
                  <h4 style={{ color: "white" }}>{article.title}</h4>
                </Card.Header>
                <Card.Body className="text-center">
                  <p>{article.description}</p>
                  <Button variant="primary" href={article.link} target="_blank">
                    Lire la suite
                  </Button>
                </Card.Body>
                <div className="card-footer text-center">
                  <p>Date: {article.date}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Blog;

import { Button, ProgressBar } from "react-bootstrap";
import backgroundImage from "../components/image/background.jpg";

function Home() {
  return (
    <div>
      <div
        style={{
          background: `url(${backgroundImage}) center/cover no-repeat`,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <h1 style={{ color: "white" }}>Bienvenue chez John Doe</h1>
          <h2 style={{ color: "white" }}>Votre expert en développement web</h2>
          <Button variant="primary" href="#about">
            En savoir plus
          </Button>
        </div>
      </div>

      <section id="about" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>À propos de John Doe</h2>
              <p>
                John Doe est un développeur web expérimenté, spécialisé dans la
                création de sites web élégants et fonctionnels. Il est passionné
                par la programmation et dévoué à fournir des solutions de haute
                qualité à ses clients.
              </p>
            </div>
            <div className="col-md-6">
              <h2>Compétences</h2>
              <div>
                HTML5
                <ProgressBar now={90} label={"90%"} />
              </div>
              <div>
                CSS
                <ProgressBar now={85} label={"85%"} />
              </div>
              <div>
                JavaScript
                <ProgressBar now={80} label={"80%"} />
              </div>
              <div>
                PHP
                <ProgressBar now={80} label={"75%"} />
              </div>
              <div>
                REACT
                <ProgressBar now={80} label={"70%"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

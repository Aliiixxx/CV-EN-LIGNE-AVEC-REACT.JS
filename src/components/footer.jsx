import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <footer
        id="footer"
        className="text-dark py-3   "
        style={{ backgroundColor: "#EEE" }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-lg ">
              <h5>John Doe</h5>
              <p>30 Rue Laure Dieboold</p>
              <p>69009 Lyon,France</p>
              <p>Téléphone: 06 20 30 30 50</p>
              <div>
                <Link
                  to="https://github.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ width: "16px", height: "16px" }}
                  />
                </Link>
                <Link
                  to="https://twitter.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ width: "16px", height: "16px" }}
                  />
                </Link>
                <Link
                  to="https://linkedin.com/in/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ width: "16px", height: "16px" }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg">
              <h5>Liens Utiles</h5>
              <ul>
                <li>
                  <Link class="text-decoration-none text-reset" to="/">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link class="text-decoration-none text-reset" to="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link class="text-decoration-none text-reset" to="/contact">
                    Me contacter
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-decoration-none text-reset"
                    to="/Mentionslegals"
                  >
                    Mentions légales
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg">
              <h5>Mes dernières réalisations</h5>
              <ul>
                <li>
                  <Link
                    class="text-decoration-none text-reset"
                    to="https://fresh-food.com"
                    target="_blank"
                  >
                    Fresh food
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-decoration-none text-reset"
                    to="https://akira-restaurant.com"
                    target="_blank"
                  >
                    Restaurant Akira
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-decoration-none text-reset"
                    to="https://espace-bien-etre.com"
                    target="_blank"
                  >
                    Espace bien-être
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg">
              <h5>Mes derniers articles</h5>
              <ul>
                <li>
                  <Link
                    class="text-decoration-none text-reset"
                    to="https://www.CodersonsiteenHTML.com"
                    target="_blank"
                  >
                    Coder son site en HTML/CSS
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-decoration-none text-reset"
                    to="https://Vendresesproduitssurleweb.com"
                    target="_blank"
                  >
                    Vendre ses produits sur le web
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-decoration-none text-reset"
                    to="https://www.SepositionnersurGoogle.com"
                    target="_blank"
                  >
                    Se positionner sur google
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <p
              className="text-center text-light"
              style={{
                width: "100%",
                height: "50px",
                bottom: 0,
                left: 0,
                backgroundColor: "#1e1e1e",
              }}
            >
              Copyright © 2023 John Doe. Tous droits réservés.
            </p>
            <Button
              className={`btn btn-secondary scroll-to-top-button position-fixed bottom-0 end-0 mb-3 mr-3 ${
                isScrolled ? "" : "d-none"
              }`}
              onClick={toggleScrollToTop}
            >
              Retour en haut
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

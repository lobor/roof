import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer-wrap-layout1">
      <div className="footer-top-wrap-layout1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-box-layout1">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="img/logo-light.png" alt="logo" />
                  </a>
                </div>
                <p>
                  Nous garantissons une satisfaction client à 100 % et un
                  travail d'une qualité irréprochable, sans aucun compromis.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-box-layout1">
                <div className="footer-title">
                  <h3>Accès rapide</h3>
                </div>
                <div className="footer-menu-box">
                  <ul className="footer-menu-list">
                    <li>
                      <Link href={"/"}>Page d'accueil</Link>
                    </li>
                    <li>
                      <Link href={"/a-propos"}>À propos de nous</Link>
                    </li>
                    <li>
                      <Link href={"/contact"}>Contact</Link>
                    </li>
                    <li>
                      <a href="#">Site Map</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrap-layout1">
        <div className="copyright">
          Copyright © 2025 Roofit All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

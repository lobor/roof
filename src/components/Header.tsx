import Link from "next/link";
import { email, tel } from "@/constant";

export const Header = () => {
  const show = (ref: any) => {
    if (!ref) return;
    ($("nav#dropdown") as any).meanmenu({
      siteLogo:
        "<div class='mobile-menu-nav-back'><a class='logo-mobile' href='index.html'><img src='img/mobile-logo.png' alt='logo' class='img-fluid'/></a></div>",
    });
  };
  return (
    <header className="header" ref={show}>
      <div id="header-topbar" className="bg-accent pd-x-85">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="header-topbar-layout1">
                <ul className="header-top-left">
                  <li>
                    <i className="fas fa-envelope"></i>E-mail : {email}
                  </li>
                  <li>
                    <i className="far fa-clock"></i>Horaires : Lundi-Vendredi:
                    9h00 - 17h00
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <div className="header-topbar-layout1">
                <ul className="header-top-right">
                  <li>
                    <i className="fas fa-phone-volume"></i>
                    {tel}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="rt-sticky-placeholder"></div>
      <div id="header-menu" className="header-menu menu-layout1 pd-x-85">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-xl-2 col-lg-2">
              <div className="logo-area">
                <a href="index.html" className="temp-logo">
                  {" "}
                  <img
                    src="img/logo-dark.png"
                    alt="logo"
                    className="img-fluid"
                  />{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-10 d-flex possition-static">
              <nav id="dropdown" className="template-main-menu">
                <ul>
                  <li>
                    <Link href={"/"}>Accueil</Link>
                  </li>
                  <li>
                    <Link href={"/a-propos"}>À propos de nous</Link>
                  </li>
                  <li>
                    <Link href={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

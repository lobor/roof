import Link from "next/link";

export default function Page404() {
  return (
    <section className="error-page-wrap-layout1">
      <div className="container">
        <div className="error-page-box-layout1">
          <div className="error-img">
            <img src="img/figure/404.png" alt="404" />
          </div>
          <div className="title-text">Désolé ! La page n'a pas été trouvée</div>
          <div className="item-subtitle">
            La page que vous recherchez n'est pas disponible ou a été supprimée.
            Essayez d'accéder à la page d'accueil en utilisant le bouton
            ci-dessous.
          </div>
          <Link href="/" className="item-btn">
            Retour sur l'accueil
          </Link>
        </div>
      </div>
      <div id="Clouds">
        <div className="Cloud Foreground"></div>
        <div className="Cloud Background"></div>
      </div>
    </section>
  );
}

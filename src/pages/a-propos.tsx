import { generateNextSeo } from "next-seo/pages";
import Head from "next/head";

export default function APropos() {
  return (
    <>
      <Head>
        {generateNextSeo({
          title: "À propos de nous - Exemple",
          description:
            "Apprenez-en plus sur notre entreprise, notre mission et nos valeurs.",
          canonical: "https://exemple.com/a-propos",
          openGraph: {
            url: "https://exemple.com/a-propos",
            title: "À propos de nous - Exemple",
            description:
              "Apprenez-en plus sur notre entreprise, notre mission et nos valeurs.",
            images: [{ url: "/images/a-propos.jpg" }],
          },
        })}
      </Head>
      <section className="about-wrap-layout6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-12">
              <div className="heading-layout1">
                <h2>
                  We Won The ‘Best Roofing Company’ Award 2019 &amp; Tightly
                  Connected with our communities.
                </h2>
                <p>
                  {" "}
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries but also the leap into electronic
                  typesetting, remaining essentially unchanged.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-wrap-layout7 bg-shape-2">
        <div className="about-box-layout9">
          <div className="single-item left-item">
            <div className="item-content">
              <h2 className="item-title">Our History</h2>
              <p>
                Wesimply dummy text offer the printing and type setting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic type aeasetting remaining essentially unchanged. It
                was popularised in the area tehcnology with the release.
              </p>
            </div>
          </div>
          <div className="single-item right-item">
            <img src="img/about/about4.jpg" alt="About Us" />
          </div>
        </div>
      </section>
      <section className="why-choose-wrap-layout1">
        <div className="container">
          <div className="heading-layout1">
            <div className="item-subtitle">Our Speciality</div>
            <h2>Why Choose Us</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="why-choose-box-layout1">
                <div className="item-img">
                  <img src="img/figure/why-choose.jpg" alt="why choose" />
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="#">Innovation</a>
                  </h3>
                  <p>
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="why-choose-box-layout1">
                <div className="item-img">
                  <img src="img/figure/why-choose1.jpg" alt="why choose" />
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="#">Commitment to Quality</a>
                  </h3>
                  <p>
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 d-block d-md-none d-lg-block">
              <div className="why-choose-box-layout1">
                <div className="item-img">
                  <img src="img/figure/why-choose2.jpg" alt="why choose" />
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="#">Core Values</a>
                  </h3>
                  <p>
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

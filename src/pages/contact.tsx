import { address, email, tel } from "@/constant";
import { generateNextSeo } from "next-seo/pages";
import Head from "next/head";

declare global {
  const google: any;
}

export default function Contact() {
  const handleShow = () => {
    var styles = [
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#b7d0ea",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#c2c2aa",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#b6d1b0",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#6b9a76",
          },
        ],
      },
    ];
    var options = {
      mapTypeControlOptions: {
        mapTypeIds: ["Styled"],
      },
      center: new (google as any).maps.LatLng(-37.81618, 144.95692),
      zoom: 10,
      disableDefaultUI: true,
      mapTypeId: "Styled",
    };
    var div = document.getElementById("googleMap");
    var map = new (google as any).maps.Map(div, options);
    var styledMapType = new (google as any).maps.StyledMapType(styles, {
      name: "Styled",
    });
    map.mapTypes.set("Styled", styledMapType);

    var marker = new (google as any).maps.Marker({
      position: map.getCenter(),
      animation: (google as any).maps.Animation.BOUNCE,
      icon: "img/map-marker.png",
      map: map,
    });
  };
  return (
    <>
      <Head>
        {generateNextSeo({
          title: "Contact - Exemple",
          description:
            "Contactez-nous pour toute question ou demande d’information.",
          canonical: "https://exemple.com/contact",
          openGraph: {
            url: "https://exemple.com/contact",
            title: "Contact - Exemple",
            description:
              "Contactez-nous pour toute question ou demande d’information.",
            images: [{ url: "/images/contact.jpg" }],
          },
        })}
      </Head>

      <section className="contact-wrap-layout2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-box-layout2">
                <div
                  id="googleMap"
                  className="google-map"
                  style={{ width: "100%", height: 480, borderRadius: 4 }}
                  ref={handleShow}
                ></div>
              </div>
            </div>
            <div className="col-lg-4 sidebar-break-md sidebar-widget-area">
              <div className="widget widget-contact-info">
                <div className="media">
                  <div className="item-icon">
                    <i className="flaticon-call-answer"></i>
                  </div>
                  <div className="media-body space-md">
                    <h4>Téléphone :</h4>
                    <ul>
                      <li>{tel}</li>
                    </ul>
                  </div>
                </div>
                <div className="media">
                  <div className="item-icon">
                    <i className="flaticon-message"></i>
                  </div>
                  <div className="media-body space-md">
                    <h4>E-mail :</h4>
                    <ul>
                      <li>{email}</li>
                    </ul>
                  </div>
                </div>
                <div className="media">
                  <div className="item-icon">
                    <i className="flaticon-maps-and-flags"></i>
                  </div>
                  <div className="media-body space-md">
                    <h4>Adresse :</h4>
                    <ul>
                      <li>{address.address}</li>
                      <li>
                        {address.zipCode} {address.city}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

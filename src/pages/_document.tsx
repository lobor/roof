import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased sticky-header">
        <div id="preloader"></div>
        <Main />
        <script src="/roof/js/jquery-3.3.1.min.js"></script>
        <script src="/roof/js/plugins.js"></script>
        <script src="/roof/js/popper.min.js"></script>
        <script src="/roof/js/bootstrap.min.js"></script>
        <script src="/roof/js/jquery.meanmenu.min.js"></script>
        <script src="/roof/vendor/slick/slick.min.js"></script>
        <script src="/roof/js/imagesloaded.pkgd.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtmXSwv4YmAKtcZyyad9W7D4AC08z0Rb4"></script>
        <script src="/roof/js/select2.min.js"></script>
        <script src="/roof/js/jquery.magnific-popup.min.js"></script>
        <script src="/roof/js/jquery.counterup.min.js"></script>
        <script src="/roof/js/waypoints.min.js"></script>
        <script src="/roof/js/validator.min.js"></script>
        {/*<script src="/js/main.js"></script>*/}
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased sticky-header">
        <div id="preloader"></div>
        <Main />
        <script src="/js/jquery-3.3.1.min.js"></script>
        <script src="/js/plugins.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/jquery.meanmenu.min.js"></script>
        <script src="/vendor/slick/slick.min.js"></script>
        <script src="/js/imagesloaded.pkgd.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtmXSwv4YmAKtcZyyad9W7D4AC08z0Rb4"></script>
        <script src="/js/select2.min.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        <script src="/js/jquery.counterup.min.js"></script>
        <script src="/js/waypoints.min.js"></script>
        <script src="/js/validator.min.js"></script>
        {/*<script src="/js/main.js"></script>*/}
        <NextScript />
      </body>
    </Html>
  );
}

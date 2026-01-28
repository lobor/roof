import { PropsWithChildren, useEffect } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const Layout = ({ children }: PropsWithChildren) => {
  const handleShow = (ref: any) => {
    if (!ref) return;
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
    $(window).on("scroll", function () {
      // Back Top Button
      if (($ as any)(window).scrollTop() > 500) {
        $(".scrollup").addClass("back-top");
      } else {
        $(".scrollup").removeClass("back-top");
      }
      // Sticky Header
      if ($("body").hasClass("sticky-header")) {
        var stickyPlaceHolder = $("#rt-sticky-placeholder"),
          menu = $("#header-menu"),
          menuH = menu.outerHeight(),
          topHeaderH = $("#header-topbar").outerHeight() || 0,
          middleHeaderH = $("#header-middlebar").outerHeight() || 0,
          targrtScroll = topHeaderH + middleHeaderH;
        if (($ as any)(window).scrollTop() > targrtScroll) {
          menu.addClass("rt-sticky");
          stickyPlaceHolder.height(menuH as any);
        } else {
          menu.removeClass("rt-sticky");
          stickyPlaceHolder.height(0);
        }
      }
    });
  };
  return (
    <div
      className={`${inter.className} min-h-screen flex flex-col font-sans `}
      ref={handleShow}
    >
      <Header />
      <div id="wrapper" className="wrapper">
        {children}
      </div>

      <Footer />
    </div>
  );
};

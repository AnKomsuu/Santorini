import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";

    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  return null;
};

export default ScrollToTop;

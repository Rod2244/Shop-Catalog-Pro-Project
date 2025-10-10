import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
     const excludePattern = /^\/product\/[^/]+(\/(specs|overview))?$/i;

    if (!excludePattern.test(pathname)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]); // Runs every time the route changes

  return null;
}

export default ScrollToTop;

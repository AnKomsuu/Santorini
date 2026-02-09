import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const BlankLayout = () => {
  return (
    <>
      <ScrollToTop />

      <Outlet />
    </>
  );
};

export default BlankLayout;

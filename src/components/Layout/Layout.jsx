import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop";
import { useState } from "react";

const Layout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => setIsSearchOpen(true);
  const handleSearchClose = () => setIsSearchOpen(false);

  return (
    <>
      <ScrollToTop />
      <Header
        isSearchOpen={isSearchOpen}
        onSearchOpen={handleSearchOpen}
        onSearchClose={handleSearchClose}
      />

      <main>
        <Outlet context={{ onSearchOpen: handleSearchOpen }} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

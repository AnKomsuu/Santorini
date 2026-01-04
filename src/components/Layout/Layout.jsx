import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => setIsSearchOpen(true);
  const handleSearchClose = () => setIsSearchOpen(false);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#4ade80",
              secondary: "#fff",
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
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

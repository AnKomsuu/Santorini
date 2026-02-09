import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout/Layout";
import BlankLayout from "../components/layout/Layout/BlankLayout";
import Home from "../pages/Home";
import CatalogRooms from "../pages/CatalogRooms";
import RoomsInfo from "../pages/RoomsInfo";
import RecreationPage from "../pages/RecreationPage";
import ActivityDetailsPage from "../pages/ActivityDetailsPage";
import News from "../pages/News";
import NewsDetailsPage from "../pages/NewsDetailsPage";
import Specials from "../pages/Specials";
import BookingPage from "../pages/BookingPage";
import Contact from "../pages/Contact";
import Road from "../pages/Road";
import Reviews from "../pages/Reviews";
import NotFoundPage from "../pages/NotFoundPage";
import AboutHotel from "../pages/AboutHotel";
import Services from "../pages/Services";
import RulesPage from "../pages/RulesPage";
import PhotoHotel from "../pages/PhotoHotel";
import AttractionsPage from "../pages/AttractionsPage";
import PastaBarPage from "../pages/PastaBarPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import { AuthProvider } from "../context/AuthContext";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "rooms", element: <CatalogRooms /> },
      {
        path: "rooms/:roomId",
        element: <RoomsInfo />,
      },
      {
        path: "recreation",
        element: <RecreationPage />,
      },
      {
        path: "recreation/:activityId",
        element: <ActivityDetailsPage />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:newsId",
        element: <NewsDetailsPage />,
      },
      {
        path: "specials",
        element: <Specials />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "road",
        element: <Road />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "/about",
        element: <AboutHotel />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/rulesPage",
        element: <RulesPage />,
      },
      {
        path: "/photoHotel",
        element: <PhotoHotel />,
      },
      {
        path: "/attractionsPage",
        element: <AttractionsPage />,
      },
      {
        path: "/pastaBarPage",
        element: <PastaBarPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <AuthProvider>
        <BlankLayout />
      </AuthProvider>
    ),
    children: [
      {
        path: "booking",
        element: <BookingPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

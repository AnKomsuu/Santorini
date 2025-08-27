import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import BlankLayout from "../components/Layout/BlankLayout";
import Home from "../pages/Home/Home";
import CatalogRooms from "../pages/CatalogRooms/CatalogRooms";
import RoomsInfo from "../pages/RoomsInfo/RoomsInfo";
import RecreationPage from "../pages/RecreationPage/RecreationPage";
import ActivityDetailsPage from "../pages/ActivityDetailsPage/ActivityDetailsPage";
import News from "../pages/News/News";
import NewsDetailsPage from "../pages/NewsDetailsPage/NewsDetailsPage";
import Specials from "../pages/Specials/Specials";
import BookingPage from "../pages/BookingPage/BookingPage";
import Contact from "../pages/Contact/Contact";
import Road from "../pages/Road/Road";
import Reviews from "../pages/Reviews/Reviews";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AboutHotel from "../pages/AboutHotel/AboutHotel";
import Services from "../pages/Services/Services";
import RulesPage from "../pages/RulesPage/RulesPage";
import PhotoHotel from "../pages/PhotoHotel/PhotoHotel";
import AttractionsPage from "../pages/AttractionsPage/AttractionsPage";
import PastaBarPage from "../pages/PastaBarPage/PastaBarPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
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

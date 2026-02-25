import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import BlankLayout from "../components/Layout/BlankLayout";
import { AuthProvider } from "../context/AuthContext";

const Home = lazy(() => import("../pages/Home/Home"));
const CatalogRooms = lazy(() => import("../pages/CatalogRooms/CatalogRooms"));
const RoomsInfo = lazy(() => import("../pages/RoomsInfo/RoomsInfo"));
const RecreationPage = lazy(() => import("../pages/RecreationPage/RecreationPage"));
const ActivityDetailsPage = lazy(() => import("../pages/ActivityDetailsPage/ActivityDetailsPage"));
const News = lazy(() => import("../pages/News/News"));
const NewsDetailsPage = lazy(() => import("../pages/NewsDetailsPage/NewsDetailsPage"));
const Specials = lazy(() => import("../pages/Specials/Specials"));
const BookingPage = lazy(() => import("../pages/BookingPage/BookingPage"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Road = lazy(() => import("../pages/Road/Road"));
const Reviews = lazy(() => import("../pages/Reviews/Reviews"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const AboutHotel = lazy(() => import("../pages/AboutHotel/AboutHotel"));
const Services = lazy(() => import("../pages/Services/Services"));
const RulesPage = lazy(() => import("../pages/RulesPage/RulesPage"));
const PhotoHotel = lazy(() => import("../pages/PhotoHotel/PhotoHotel"));
const AttractionsPage = lazy(() => import("../pages/AttractionsPage/AttractionsPage"));
const PastaBarPage = lazy(() => import("../pages/PastaBarPage/PastaBarPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage"));

// eslint-disable-next-line react-refresh/only-export-components
const SuspenseWrapper = ({ children }) => (
  <Suspense
    fallback={
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-xl text-theme-blue animate-pulse">Loading...</div>
      </div>
    }
  >
    {children}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ),
    children: [
      { index: true, element: <SuspenseWrapper><Home /></SuspenseWrapper> },
      { path: "rooms", element: <SuspenseWrapper><CatalogRooms /></SuspenseWrapper> },
      {
        path: "rooms/:roomId",
        element: <SuspenseWrapper><RoomsInfo /></SuspenseWrapper>,
      },
      {
        path: "recreation",
        element: <SuspenseWrapper><RecreationPage /></SuspenseWrapper>,
      },
      {
        path: "recreation/:activityId",
        element: <SuspenseWrapper><ActivityDetailsPage /></SuspenseWrapper>,
      },
      {
        path: "news",
        element: <SuspenseWrapper><News /></SuspenseWrapper>,
      },
      {
        path: "news/:newsId",
        element: <SuspenseWrapper><NewsDetailsPage /></SuspenseWrapper>,
      },
      {
        path: "specials",
        element: <SuspenseWrapper><Specials /></SuspenseWrapper>,
      },
      {
        path: "contact",
        element: <SuspenseWrapper><Contact /></SuspenseWrapper>,
      },
      {
        path: "road",
        element: <SuspenseWrapper><Road /></SuspenseWrapper>,
      },
      {
        path: "reviews",
        element: <SuspenseWrapper><Reviews /></SuspenseWrapper>,
      },
      {
        path: "*",
        element: <SuspenseWrapper><NotFoundPage /></SuspenseWrapper>,
      },
      {
        path: "/about",
        element: <SuspenseWrapper><AboutHotel /></SuspenseWrapper>,
      },
      {
        path: "/services",
        element: <SuspenseWrapper><Services /></SuspenseWrapper>,
      },
      {
        path: "/rulesPage",
        element: <SuspenseWrapper><RulesPage /></SuspenseWrapper>,
      },
      {
        path: "/photoHotel",
        element: <SuspenseWrapper><PhotoHotel /></SuspenseWrapper>,
      },
      {
        path: "/attractionsPage",
        element: <SuspenseWrapper><AttractionsPage /></SuspenseWrapper>,
      },
      {
        path: "/pastaBarPage",
        element: <SuspenseWrapper><PastaBarPage /></SuspenseWrapper>,
      },
      {
        path: "profile",
        element: <SuspenseWrapper><ProfilePage /></SuspenseWrapper>,
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
        element: <SuspenseWrapper><BookingPage /></SuspenseWrapper>,
      },
      {
        path: "register",
        element: <SuspenseWrapper><RegisterPage /></SuspenseWrapper>,
      },
      {
        path: "login",
        element: <SuspenseWrapper><LoginPage /></SuspenseWrapper>,
      },
    ],
  },
]);

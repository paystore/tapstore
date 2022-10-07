import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Home = lazy(() => import("../pages/Home.js"));
const Documentacao = lazy(() => import("../pages/Documentacao"));
const Api = lazy(() => import("../pages/Api"));
const Demo = lazy(() => import("../pages/Demo"));
const ReleaseNotes = lazy(() => import("../pages/ReleaseNotes"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/home", exact: true, element: <Home /> },
      { path: "/documentacao", exact: true, element: <Documentacao /> },
      { path: "/api", exact: true, element: <Api /> },
      { path: "/demo", exact: true, element: <Demo /> },
      { path: "/release", exact: true, element: <ReleaseNotes /> },
    ],
  },
];

export default ThemeRoutes;

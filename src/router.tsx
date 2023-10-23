import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { LandingPage } from "./components/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "", element: <LandingPage /> }],
  },
]);

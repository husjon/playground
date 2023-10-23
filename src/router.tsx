import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { LandingPage } from "./components/LandingPage";
import { TextGradients } from "./components/TextGradients/TextGradients";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "text-gradient", element: <TextGradients /> },
    ],
  },
]);

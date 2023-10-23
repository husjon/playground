import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { LandingPage } from "./components/LandingPage";
import ProfileCards from "./components/ProfileCards/ProfileCards";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "profile-cards", element: <ProfileCards /> },
    ],
  },
]);

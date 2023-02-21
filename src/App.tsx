import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { useEffect } from "react";

import Home from "./Pages/Home";
import Favorites from "./Pages/FavoritesPage";
import MainLayout from "./Pages/MainLayout";
import GeneralPage from "./Pages/GeneralPage";
import HealthPage from "./Pages/HealthPage";
import SciencePage from "./Pages/SciencePage";
import SportsPage from "./Pages/SportsPage";
import TechnologyPage from "./Pages/TechnologyPage";
import BusinessPage from "./Pages/BusinessPage";
import MobileLatest from "./Pages/MobileLatest";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="General" element={<GeneralPage />} />
      <Route path="Health" element={<HealthPage />} />
      <Route path="Science" element={<SciencePage />} />
      <Route path="Sports" element={<SportsPage />} />
      <Route path="Technology" element={<TechnologyPage />} />
      <Route path="Business" element={<BusinessPage />} />
      <Route path="Favorites" element={<Favorites />} />
      <Route path="Latest" element={<MobileLatest />} />

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  useEffect(() => {
    document.title = "MyNews";
  }, []);

  return <RouterProvider router={router} />;
}

export default App;

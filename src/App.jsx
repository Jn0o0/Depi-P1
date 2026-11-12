import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Units from "./pages/Units/Units";
import Zones from "./pages/Zones/Zones";
import Developers from "./pages/Developers/Developers";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout/Layout";
import ContactUs from "./pages/ContactUs/ContactUs";
import UnitsDetails from "./pages/Units/UnitsDetails";
import ProjectsDetails from './pages/Zones/ProjectsDetails';
import ZoneProjects from './pages/Zones/ZoneProjects'
import DeveloperProjects from './pages/Developers/DeveloperProjects'
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/units" element={<Units />} />
          <Route path="/zones" element={<Zones />} />
          <Route path="/units/:id" element={<UnitsDetails />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/zones/:zoneId" element={<ZoneProjects />} />
          <Route path="/projects/:id" element={<ProjectsDetails />} />
          <Route path="/developers/:id" element={<DeveloperProjects />}/>
          </Route>
      </Routes>
    </>
  );
}

export default App;

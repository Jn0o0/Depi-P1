import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Units from "./pages/Units/Units";
import Zones from "./pages/Zones/Zones";
import Developers from "./pages/Developers/Developers";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout/Layout";
import ContactUs from "./pages/ContactUs/ContactUs";
import ZoneDetails from "./pages/Zones/ZoneDetails";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/units" element={<Units />} />
          <Route path="/zones" element={<Zones />} />
          <Route path="/zones/:id" element={<ZoneDetails />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

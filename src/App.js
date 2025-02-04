import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import HomeFour from "./pages/HomeFour";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import UxService from "./pages/service/UxService";
import WebServices from "./pages/service/WebServices";
import AppServices from "./pages/service/AppServices";
import CyberService from "./pages/service/CyberService";
import DigitalService from "./pages/service/DigitalService";
import SolutionsServices from "./pages/service/SolutionsServices";
import CareerAreaOne from "./components/CareerAreaOne";
import CustomDevelopment from "./pages/service/CustomDevelopment";
import QualityAssurance from "./pages/service/QualityAssurance";
import SystemIntegration from "./pages/service/SystemIntegration";
import ProductDesign from "./pages/service/machnical/ProductDesign";
import ManufacturingpPrototyping from "./pages/service/machnical/ManufacturingpPrototyping";
import CadCam from "./pages/service/machnical/CadCam";
import TestingQuality from "./pages/service/machnical/TestingQuality";
import ArchitecturalDesign from "./pages/service/civil/ArchitecturalDesign";
import StructuralDesign from "./pages/service/civil/StructuralDesign";
import UrbanPlanning from "./pages/service/civil/UrbanPlanning";
import LandscapeArchitecture from "./pages/service/civil/LandscapeArchitecture";
import Bim from "./pages/service/civil/Bim";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomeFour />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blog-details' element={<BlogDetails />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/team' element={<Team />} />
        <Route exact path='/team-details' element={<TeamDetails />} />

        {/* services */}
        <Route exact path='/ux-service' element={<UxService />} />
        <Route exact path='/web-service' element={<WebServices />} />
        <Route exact path='/app-service' element={<AppServices />} />
        <Route exact path='/cloud-service' element={<CyberService />} />
        <Route exact path='/digital-service' element={<DigitalService />} />
        <Route exact path='/solution-service' element={<SolutionsServices />} />
        <Route exact path='/career' element={<CareerAreaOne />} />
        <Route exact path='/our-client' element={<UxService />} />

        <Route exact path='/custom-development' element={<CustomDevelopment />} />

        <Route exact path='/quality-assurance' element={<QualityAssurance />} />

        <Route exact path='/system-integration' element={<SystemIntegration />} />

       {/* mechnical service */}
       <Route exact path='/product-design' element={<ProductDesign />} />
       <Route exact path='/manufacturing-prototyping' element={<ManufacturingpPrototyping />} />
       <Route exact path='/cad-cam' element={<CadCam />} />
       <Route exact path='/testing-quality' element={<TestingQuality />} />
       <Route exact path='/maintenance-troubleshooting' element={<ManufacturingpPrototyping />} />

      {/* civil serivice */}
      <Route exact path='/architectural-design' element={<ArchitecturalDesign />} />
      <Route exact path='/structural-design' element={<StructuralDesign />} />
      <Route exact path='/urban-planning' element={<UrbanPlanning />} />
      <Route exact path='/landscape-architecture' element={<LandscapeArchitecture />} />
      <Route exact path='/bim' element={<Bim />} />




      </Routes>
      <ScrollToTop smooth color='#246BFD' />
    </BrowserRouter>
  );
}

export default App;

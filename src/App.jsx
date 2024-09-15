
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; 
import Home from "./components/Home";
import Internship from "./components/Internship";
import Contactus from "./components/Contactus";
import CampusAmbesdor from "./components/CampusAmbesdor";
import Aboutus from "./components/Aboutus";
import Courses from "./components/Courses";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route path="/home" element={<Home/>}/>
         <Route path="/contact" element={<Contactus/>}/>
         <Route path="/courses" element={<Courses/>}/>
         <Route path="/internship" element={<Internship/>}/>
         <Route path="/CA" element={<CampusAmbesdor/>}/>
         <Route path="/about" element={<Aboutus/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

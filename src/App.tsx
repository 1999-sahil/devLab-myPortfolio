import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";

import Experience from "./components/experience/Experience";
import Expertise from "./components/expertise/Expertise";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProfileTagMarquee from "./components/profileTag-marquee";
import Work from "./components/projects/Work";
import Showcase from "./components/welcome-banner/Showcase";
import Projects from "./components/work/Projects";

function App() {

  return (
    <div className="antialiased bg-white dark:bg-[#0d121c] min-h-screen">
      <Header />
      
      <Routes>
        {/* Main page components */}
        <Route path="/" element={
          <>
            <Showcase />
            <ProfileTagMarquee />
            <div className="px-4 md:px-20 flex flex-col gap-8 my-20">
              <Expertise />
              <Work />
              <Experience />
            </div>
            <Footer />
          </>
        } />
        
        {/* Projects page as a separate route */}
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App;

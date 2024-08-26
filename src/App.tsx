import "./App.css";
import Expertise from "./components/expertise/Expertise";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProfileTagMarquee from "./components/profileTag-marquee";
import Work from "./components/projects/Work";
import Showcase from "./components/welcome-banner/Showcase";

function App() {

  return (
    <div className="antialiased bg-white dark:bg-[#0d121c] min-h-screen">
      <Header />
      <Showcase />
      <ProfileTagMarquee />

      <div className="px-4 md:px-20">
        <Expertise />
        <Work />
      </div>

      <Footer />
    </div>
  )
}

export default App

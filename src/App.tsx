import "./App.css";
import Header from "./components/header/Header";
import ProfileTagMarquee from "./components/profileTag-marquee";
import Showcase from "./components/welcome-banner/Showcase";

function App() {

  return (
    <div className="antialiased">
      <Header />
      <Showcase />
      <ProfileTagMarquee />
    </div>
  )
}

export default App

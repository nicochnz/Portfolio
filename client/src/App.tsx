import ReactFullpage from "@fullpage/react-fullpage";
import "./App.css";
import RandomButton from "./components/Bonus1/Button";
import Firework from "./components/Bonus2/Firework";
import ContactForm from "./components/Form/Form";
import HomeSection from "./components/HomeSection/HomeSection";
import FirstProject from "./components/Project-1/FirstProject";
import SecondProject from "./components/Project-2/SecondProject";
export default function App() {
  return (
    <ReactFullpage
      credits={{ enabled: false }}
      scrollingSpeed={1000}
      render={() => (
        <div id="fullpage-wrapper">
          <HomeSection />
          <FirstProject />
          <SecondProject />
          <RandomButton />
          <Firework />
          <ContactForm />
        </div>
      )}
    />
  );
}

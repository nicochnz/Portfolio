import ReactFullpage from "@fullpage/react-fullpage";
import "./App.css";
import RandomButton from "./components/Bonus1/Button";
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
          <div className="section contact">
            <h2>Contactez moi</h2>
            <p>Ajouter un formulaire</p>
          </div>
        </div>
      )}
    />
  );
}

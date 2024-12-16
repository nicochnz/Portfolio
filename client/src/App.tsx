import ReactFullpage from "@fullpage/react-fullpage";
import "./App.css";
import HomeSection from "./components/HomeSection/HomeSection";
import FirstProject from "./components/Project-1/Project-1";
export default function App() {
  return (
    <ReactFullpage
      credits={{ enabled: false }}
      scrollingSpeed={1000}
      render={() => (
        <div id="fullpage-wrapper">
          <HomeSection />
          <FirstProject />
          <div className="section project-2">
            <h2>Mon projet 2 </h2>
            <p>Présentation d'un projet.</p>
          </div>
          <div className="section contact">
            <h2>Contactez moi</h2>
            <p>Ajouter un formulaire</p>
          </div>
        </div>
      )}
    />
  );
}

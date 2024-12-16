import "./HomeSection.css";
export default function HomeSection() {
  return (
    <div className="section home">
      <h1>Chiche Nicolas</h1>
      <p className="presentation">Hi, I'm a french frontend developer.</p>
      <p>
        <span>HTML</span>
        <span>CSS</span>
        <span>Javascript</span>
        <span>Typescript</span>
        <span>React</span>
      </p>
      <p className="informations">
        For more information, please contact me <a href="s">here</a>.
      </p>
    </div>
  );
}

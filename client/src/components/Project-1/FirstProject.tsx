import "./FirstProject.css";
export default function FirstProject() {
  return (
    <div className="section project-1">
      <h2>Bordeaux Quizz</h2>
      <img src="images/Projet1(1).png" alt="img1" />
      <img src="images/Projet1(2).png" alt="img2" />
      <p>First project</p>
      <p className="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
        consequatur soluta exercitationem ab magnam id magni, eveniet dicta
        vitae autem aliquam sapiente ut, porro nesciunt doloremque consequuntur
        nisi fuga blanditiis.
      </p>
      <a rel="noreferrer" target="_blank" href="https://bdxquizz.netlify.app/">
        Click-me
      </a>
      <p>
        <span>HTML</span>
        <span>CSS</span>
        <span>Javascript</span>
      </p>
    </div>
  );
}

import "./SecondProject.css";
export default function SecondProject() {
  return (
    <div className="section project-2">
      <h2>
        Memory <span>Card</span> Game
      </h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ciQKhZ8PEko?si=Ebp9fwqPmDcJ3eas"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <p>Second project</p>
      <p className="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
        consequatur soluta exercitationem ab magnam id magni, eveniet dicta
        vitae autem aliquam sapiente ut, porro nesciunt doloremque consequuntur
        nisi fuga blanditiis.
      </p>
      <p>
        <span>CSS</span>
        <span>Typescript</span>
        <span>React</span>
        <span>Express</span>
      </p>
    </div>
  );
}

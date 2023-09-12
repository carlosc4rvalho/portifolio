// About.js

import "./about.css";

const About: React.FC = () => {
  return (
    <div className="about__container" id="about">
      <div className="about__content">
        <div className="about__title">
          Sobre mim
        </div>
        <div className="about__subtitle">
          Apaixonado por <span>Desenvolvimento Front-end</span>  focado na qualidade e na experiência do usuário eu busco criar soluções que impactem positivamente a vida das pessoas.
        </div>
      </div>
    </div>
  );
};

export default About;

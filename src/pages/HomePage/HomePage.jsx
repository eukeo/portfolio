import AnimatedPage from "../../components/NavBar/AnimatedPage/AnimatedPage";
import "./HomePage.css";

export default function HomePage() {
  return (
    <AnimatedPage>
      <div id="container">
        <div id="contents">
          <h1 id="name">Gabriel Gomez</h1>
          <h3 id="title">Software Engineer</h3>
          <h3 id="about-header">About Me</h3>
          <p id="about">
            Welcome, my name is Gabriel Gomez and I am a 29-year-old Software
            Engineer living in Los Angeles, California. My passion for
            technology, specifically Front-End Development, was sparked at a
            young age through my interest and passion for art. After exploring
            various career paths, I decided to attend General Assembly to
            immerse myself in the field. The intensive three-month program
            presented numerous challenges, but also proved to be highly
            rewarding. My experience solidified my love for Front-End
            Development and my dedication to creating a seamless user
            experience.
          </p>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"></img>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"></img>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"></img>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></img>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"></img>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"></img>
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"></img>
          <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg"></img>
        </div>
      </div>
    </AnimatedPage>
  );
}

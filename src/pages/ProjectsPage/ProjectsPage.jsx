import AnimatedPage from "../../components/NavBar/AnimatedPage/AnimatedPage";
import "./ProjectsPage.css";

export default function ProjectsPage() {
  return (
    <AnimatedPage>
      <div id="projects-container">
        <div id="projects-content">
          <div id="small-container">
            <img src="https://i.imgur.com/41pDTFh.jpg" id="b-m"></img>
            <h2 id="p-title">What To Do?</h2>
            <a href="https://todo-list-reboot-production.up.railway.app/" target="_blank">
              <img
                src="https://i.pinimg.com/originals/cf/58/4a/cf584aff36fb87c055a8a026bfcb859e.png"
                id="linkIcon"
              ></img>
            </a>
            <a href="https://github.com/eukeo/todo-list-reboot" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"></img>
            </a>
            <h5>
              What To Do? is a full CRUD, mobile friendly daily planner. Create, read, update and delete your daily plans as your day goes on right from the comfort of your phone! Screenshot your daily planner so you know exactly where you need to be at any time of the day!
            </h5>
          </div>

          <div id="small-container">
            <img src="https://i.imgur.com/LPGwMKG.jpeg" id="castle"></img>
            <h2 id="p-title">In My Mind</h2>
            <a
              href="https://mental-health-production.up.railway.app/"
              target="_blank"
            >
              <img
                src="https://i.pinimg.com/originals/cf/58/4a/cf584aff36fb87c055a8a026bfcb859e.png"
                id="linkIcon"
              ></img>
            </a>
            <a href="https://github.com/eukeo/mental-health" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"></img>
            </a>
            <h5>
              In My Mind is a project based around spreading awareness for
              mental health. From tips, to studies, In My Mind has information
              for anyone seeking help, or simply seeking interest in growing
              awareness for themselves on how mental health affects the world
              around us.
            </h5>
          </div>

          <div id="small-container">
            <img
              src="https://user-images.githubusercontent.com/99705240/168537917-c75e45ee-4f9b-4061-8434-b0aa1d1af2e8.PNG"
              id="p-u"
            ></img>
            <h2 id="p-title">Pokémon Universe</h2>
            <a
              href="https://pokemon-tcg-production.up.railway.app/"
              target="_blank"
            >
              <img
                src="https://i.pinimg.com/originals/cf/58/4a/cf584aff36fb87c055a8a026bfcb859e.png"
                id="linkIcon"
              ></img>
            </a>
            <a href="https://github.com/eukeo/pokemon-tcg" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"></img>
            </a>
            <h5>
              Welcome to the Pokémon Universe! This web application not only
              contains the latest updates on the Pokéverse, it also has a splash
              of nostalgia that will make any die hard Pokémon fan remember what
              it was like to be a kid. From the Pokédex, to Memory Lane, there
              is something for every Pokémon fan to enjoy!
            </h5>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

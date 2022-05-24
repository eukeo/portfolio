import AnimatedPage from '../../components/NavBar/AnimatedPage/AnimatedPage'
import './ProjectsPage.css'

export default function ProjectsPage() {
    return (
        <AnimatedPage>
            <div id="projects-container">
                <div id="projects-content">
                    <div id="small-container">
                        <img src="https://user-images.githubusercontent.com/99705240/168537917-c75e45ee-4f9b-4061-8434-b0aa1d1af2e8.PNG" id="p-u"></img>
                        <h2 id="p-title">Pokémon Universe</h2>
                        <a href="https://pokemonuniverse.herokuapp.com/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"></img></a>
                        <a href="https://github.com/eukeo/pokemon-tcg" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"></img></a>
                        <h5>Welcome to the Pokémon Universe! This web application not only contains the latest updates on the Pokéverse, it also has a splash of nostalgia that will make any die hard Pokémon fan remember what it was like to be a kid. From the Pokédex, to Memory Lane, there is something for every Pokémon fan to enjoy!</h5>
                    </div>
                    <div id="small-container">
                        <img src="https://camo.githubusercontent.com/4e8e41b9b27bc99885d84a040bcbdd4529d3d1e34a1259688e0061524650b707/68747470733a2f2f692e696d6775722e636f6d2f4546627a436d312e706e67"></img>
                        <h2 id="p-title">Castle</h2>
                        <a href="https://estates-castle.herokuapp.com/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"></img></a>
                        <a href="https://github.com/RaulL10/estates" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"></img></a>
                        <h5>Castle is a collaborative project implemented with authentication based on Real Estate that contains full CRUD specifically to fit the ultimate user experience. Sell, view, and list a home of your choosing and assign any of the provided realtors to fit your home's needs.</h5>
                    </div>
                    <div id="small-container">
                        <img src="https://i.imgur.com/Mmy5vzf.jpeg" id="b-m"></img>
                        <h2 id="p-title">Bit-Man!</h2>
                        <a href="" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"></img></a>
                        <a href="https://github.com/eukeo" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"></img></a>
                        <h5>Bit-Man! is a soft, retro take on Hangman. Inspired by old school, pixelated video games, Bit-Man! is something for all ages! Take a look at the hint provided and try your best to guess the word before your lives run out!</h5>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}
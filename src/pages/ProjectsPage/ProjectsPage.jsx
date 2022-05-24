import AnimatedPage from '../../components/NavBar/AnimatedPage/AnimatedPage'
import './ProjectsPage.css'

export default function ProjectsPage() {
    return (
        <AnimatedPage>
            <div id="projects-container">
                <div id="projects-content">
                    <ul>
                        <li>
                            <img src="https://user-images.githubusercontent.com/99705240/168537917-c75e45ee-4f9b-4061-8434-b0aa1d1af2e8.PNG"></img>
                            <h1>Pokémon Project</h1>
                            <h5>Welcome to the Pokémon Universe! This web application not only contains the latest updates on the Pokéverse, it also has a splash of nostalgia that will make any die hard Pokémon fan remember what it was like to be a kid. From the Pokédex, to Memory Lane, there is something for every Pokémon fan to enjoy!</h5>
                        </li>
                        <li>
                            <h1>Castle</h1>
                        </li>
                        <li>
                            <h1>Bit-Man!</h1>
                        </li>
                    </ul>
                </div>
            </div>
        </AnimatedPage>
    )
}
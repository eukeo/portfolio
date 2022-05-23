import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar(){
    return (
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="projects">Projects</Link>
            </ul>
        </nav>
    )
}
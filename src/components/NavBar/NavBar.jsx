import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar(){
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="projects">Projects</Link>
            <Link to="contact">Contact</Link>
        </nav>
    )
}
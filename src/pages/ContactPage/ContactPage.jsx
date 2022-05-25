import AnimatedPage from "../../components/NavBar/AnimatedPage/AnimatedPage"
import './ContactPage.css'

export default function ContactPage() {
    return (
        <AnimatedPage>
            <div id="business-card-container">
                <div id="business-card">
                    <img src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png" id="avatar"></img>
                    <h2>Gabriel Gomez</h2>
                    <section id="personal-links">
                            <a href="https://www.linkedin.com/in/gabrielgomez-" target="_blank"><img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"></img></a>
                            <a href="https://github.com/eukeo" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img></a>
                        </section>
                    <h4 id="info">Contact Information</h4>
                    <h4>Email: gabegomez419@gmail.com</h4>
                    <a href="https://drive.google.com/file/d/1x6MSM_sBfVTFmS8H5N1fujtR6kT4_FAN/view" download="Gabriel-Gomez-Resume" class="download-btn" target="_blank">Resume</a>
                </div>
            </div>
        </AnimatedPage>
    )
}
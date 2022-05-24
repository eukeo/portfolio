import AnimatedPage from "../../components/NavBar/AnimatedPage/AnimatedPage"
import './ContactPage.css'

export default function ContactPage() {
    return (
        <AnimatedPage>
            <div id="business-card-container">
                <div id="business-card">
                    <img src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png" id="avatar"></img>
                    <h2>Gabriel Gomez</h2>
                    <h4 id="info">Contact Information</h4>
                    <h4>Phone: (562) 454-9850</h4>
                    <h4>Email: gabegomez419@gmail.com</h4>
                </div>
            </div>
        </AnimatedPage>
    )
}
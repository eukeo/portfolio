import AnimatedPage from '../../components/NavBar/AnimatedPage/AnimatedPage' 
import './HomePage.css'
// import { Aos } from 'aos'
// import "aos/dist/aos.css"
// import { useEffect } from 'react'

export default function HomePage() {


    return (
        <AnimatedPage>
            <div id="container">
                <div id="contents">
                    <h1 id="name">Gabriel Gomez</h1>
                    <h3 id="title">Software Engineer</h3>
                        <section id="personal-links">
                            <a href="https://www.linkedin.com/in/gabrielgomez-" target="_blank"><img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"></img></a>
                            <a href="https://github.com/eukeo" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img></a>
                        </section>
                    <h3 id="about-header">About Me</h3>
                    <p id="about">Welcome! My name is Gabriel Gomez and I am a 28 year old Software Engineer born and raised in Los Angeles, California. As someone who has always enjoyed music, art, video games, and the slow development of the NFT space, I found myself stumbling across the beautiful world of code. I wrote my first few lines of CSS & HTML around 2005 on Myspace, but it wasn't until February of 2022 when I had realized just how much of a passion I truly had for Front-End Development. After years of career exploration, I finally decided to attend General Assembly. For 3 months it was nothing but pursiung tons of new, difficult, but highly rewarding challenges. It has become extremely clear just how much love I have for learning more about the beautiful world of Front-End Development, as well as the dedication to create a great user experience.</p>
                    {/* <a href="" id="contact">Contact</a> */}
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"></img>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"></img>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"></img>       
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></img>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"></img>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"></img>
                </div>
            </div>
        </AnimatedPage>
    )
}
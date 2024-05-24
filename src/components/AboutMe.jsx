import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="tech-stack">
                <h2>Tech Stack</h2>
                <div className="icons">
                    <img src={"/tech/html.png"} alt="HTML"/>
                    <img src={"/tech/css.png"}  alt="CSS" />
                    <img src={"/tech/sass.png"}  alt="Sass" />
                    <img src={"/tech/javascript.png"}  alt="JavaScript" />
                    <img src={"/tech/react.png"} alt="React" />
                    <img src={"/tech/java.png"}  alt="Java" />
                   <img src={"/tech/spring.png"} alt="Spring Boot" />
                    <img src={"/tech/sql.png"}  alt="SQL" />
                   
                </div>
            </div>
            <div className="about-content">
                <div className="about-image">
                <img src={"/images/about.jpeg"} alt="Virendra Paswan" />
                </div>
                <div className="about-text">
                    <h3>About Me</h3>
                    <h2>Front-end and Java Developer based in India <span role="img" aria-label="location-pin">📍</span></h2>
                    <p>Hey, my name is<strong> Virendra Paswan</strong>, and I'm a <strong>Frontend</strong> and <strong>Java Developer</strong>. My passion is to create and develop a clean UI/UX and building robust backend systems..</p>
                    <p>My main stack currently is <strong>JavaScript/React</strong>  in combination with  <strong>Spring Boot ,Microservices</strong> and <strong>Api</strong>.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

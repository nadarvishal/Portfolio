import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <p>
              I am currently in the final semester of my Master of Science in Computer Science from George Mason University with a GPA of 3.7/4. During my time at George Mason University, I gained hands-on experience in various programming languages, web technologies, and software. My coursework and research experience have allowed me to hone my skills in Python, Java, HTML, CSS, JavaScript, AngularJS, ReactJS, and Spring Boot. I am confident that my skills and experience make me a strong candidate for this position.
              </p>
              <p align="LEFT">
              As a Web Developer at George Mason University, I updated the university's faculty webpage using React.js. This experience helped me develop my skills in DOM, React Props, Lifecycle methods, working with React States, and Events. As a Graduate Research Assistant, I researched reasons for the increase in cyber-attacks due to COVID-19. My experience as a Teaching Assistant in Python, SysMl, and Data Structures and Algorithm has helped me develop my ability to grade assignments, provide feedback, and assist students with their questions.
              </p>
              <p>
              My experience as a Software Development Engineer at GAMIC SOLUTIONS PRIVATE LIMITED helped me develop my skills in analysis, design, implementation, and testing phases of the Software Development Life Cycle (SDLC). I have experience working with Java 8 & 11 features like Stream API, Time API, Functional Interfaces Multithreading, Transaction Management, Exception Handling, and Collection API. I have also implemented Microservices-based architecture using Spring Boot interacting through REST API. This experience helped me develop my skills in Angular 2 framework, HTML5, CSS3, JavaScript, Bootstrap, Node.js, and Mongo DB.
              </p>
              <p>
              I am confident that my skills and experience make me a strong candidate at your company. Thank you for considering my application. I look forward to the opportunity to discuss my qualifications in further detail.
              </p>
            </div>
        </div>
        <Loader type="ball-scale" />
        </>
    )
}

export default About
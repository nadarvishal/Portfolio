import './index.scss'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Logo from '../Logo'
import Pdf from '../../assets/Resume.pdf';

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
              I am in the final semester of my Master of Science in Computer Science at George Mason University. 
              My main expertise lies in Java and Python programming and full-stack development.  
              Other than that I like playing Chess, Football, and video games, going to the gym, 
              and watching tv shows. 
              </p>
              <p>
              I am currently Looking for Full-Time job opportunities. If you like my site, don’t hesitate to reach out!
              </p>
              <Link to="/Contact" className='flat-button'>Contact Me</Link>
              <a href={Pdf} className='flat-button' without rel="noopener noreferrer" target="_blank">
                          Resume
              </a>
              
            </div>
            <Logo />
        </div>
        
        <Loader type="ball-scale-multiple" />
        </>
    )
}

export default About
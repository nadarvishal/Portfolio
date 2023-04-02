import { Link } from 'react-router-dom';
import './index.scss';
import LogoTitle from '../../assets/images/logo-v.png';
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from "react";
import Logo from '../Logo'
import Loader from 'react-loaders' 

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [ 'i', 's', 'h', 'a', 'l']
    const jobArray = [ 's','o','f','t','w','a','r','e',' ','d','e','v','e','l','o','p','e','r','.',]
    
    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return(
      <>
        <div className="container home-page">
            <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Java Developer Name"/>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
            </h1>
            <h2> UI developer / full stack developer</h2>
            <Link to="/About" className='flat-button'>Dive Into My Universe</Link>

            </div>
            <Logo />
        </div>
        <Loader type="ball-scale-multiple" />
      </>
    );
}

export default Home
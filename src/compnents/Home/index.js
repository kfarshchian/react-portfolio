import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logosmallblue.png';
// import Logo from './Logo';
import Loader from 'react-loaders';
import bigLogo from '../../assets/images/newlogoblue.png';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['K', 'a', 'm', 'e', 'r', 'o', 'n', ' ', ]
    const nameLast = ['F', 'a', 'r', 's', 'h', 'c', 'h', 'i', 'a', 'n']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
        <>
        <div className="container home-page"  id='homeContainer'>
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span> 
                    <br />
                    <span className={`${letterClass} _13`}>I</span> 
                    <span className={`${letterClass} _14`}>'m</span> 
                <img src={LogoTitle} alt="developer" id='smallLogo'/>
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx={15}/>
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameLast}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2> Frontend Developer / Backend Developer </h2>
                <Link to="/contact" className='flat-button'>
                    CONTACT ME
                </Link>
            </div>
            <div>
            <img src={bigLogo} alt="developer" id='mainLogo' />
            </div>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home
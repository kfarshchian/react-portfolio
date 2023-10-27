import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
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
        <div className='container about-page' id='fullAboutMe'>
            <div className='text-zone'id='aboutMe'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                I am a web developer looking for a role in a IT company with the 
                opportunity to work with the latest technologies on challenging and diverse projects. 
                </p>
                <p>
                As a naturally curious person. I enjoy working on projects no matter how hard 
                it is to find a solution. I work on projects any chance I get to keep improving on my skills. 
                </p>
                <p>
                I have an Associates degree from SLCC in Computer Science and Information Technology, where I received
                a Certificate of Proficiency in Linux, Programming, and Cyber Security. I also have a Certificate from
                the University of Utah for Coding Bootcamp Full Stack Developer. 
                </p>
                <p>
                Some of my other hobbies include building computers, cars, and carpentry projects like tables and shelves.
                 I also enjoy playing games and reading books. My favorite games including Final Fantasy and Destiny. I enjoy 
                 fantasy books and Brandon Sanderson is my favorite author. 
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4D4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About
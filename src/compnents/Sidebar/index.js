import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/newLogo.png';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faHome, faSuitcase, faUser, faClose} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';


const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  
    return (
    <div className='nav-bar navbar' class="row">
        <div class="col navbar-brand">
        <Link className='logo' to='/' >
            <img src={Logo} alt='logo' />
        </Link>
        </div>
        <div class="col">
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#C8C6C6"
            size="3x"
            className='close-icon'
            />
        </nav>
        </div>
        <div class="col" id='otherPages'>
            
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/kameron-farshchian-27599582/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="black" id='otherPages'/>
                </a>
           
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/kfarshchian"
                >
                    <FontAwesomeIcon icon={faGithub} color="black" id='otherPages'/>
                </a>
                </div> 
        <FontAwesomeIcon 
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#C8C6C6"
        size="3x"
        className='hamburger-icon'
        id='hamburgerLabel'
        />
        
        
    </div>
)
}

export default Sidebar
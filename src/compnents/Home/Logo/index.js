import './index.scss';
import LogoS from '../../../assets/images/newlogoblue.png';
import {  useRef } from 'react'



const Logo = () => {

    const bgRef = useRef()
    const solidLogoRef = useRef()

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoS} alt='logo-main' />
            <svg
        width="350px"
        height="350px"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
         />
        </g>
      </svg>
        </div>
    )
}

export default Logo
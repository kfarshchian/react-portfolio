import Loader from 'react-loaders'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()


    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs
        .sendForm( 'service_smfxvqp', 'template_rjlkdso', form.current, 'auKEdycTRYhONf_t-')
        .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return (
        <>
        <div className="container contact-page" >
            <div className='text-zone' id='contactMe'>
                <h1>
                    <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']}
                    letterClass={letterClass}
                    idx={15}
                    />
                </h1>
                <p>
                I am interested in web development job opportunities. However, if you have any other requests or questions, don't hesitate to contact me using the form below.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                        <li>
                        <input type="submit" className="flat-button" value="SEND" to="https://kfarshchian.netlify.app/"/>
                        </li>
                    </ul>
                </form>
                </div>
            </div>
            <div className='info-map'>
                Kameron Farshchian
                <br />
                United States
                <br />
                Utah <br />
                Salt Lake City <br />
                <span>kfarshchian@gmail.com</span>
            </div>
            <div className="map-wrap">
              <MapContainer center={[40.7608, -111.8910]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[41.0838, -112.0580]}>
              </Marker>
            </MapContainer>
        </div>
        </div>
        <Loader type="pacman" />
        </>
    )

}

export default Contact
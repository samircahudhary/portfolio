import React, { useRef } from 'react';
import './Home.css';
import man from '../../assets/images/man.png';
import Typewriter from 'typewriter-effect';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Home() {
  const scope = useRef();

  useGSAP(() => {
    const t1 = gsap.timeline();

    t1.from('.line1', {
      y: -100,
      duration: 1,
      ease: 'bounce.out'
    });

    t1.from('.line2', {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    }, "-=0.5");

    t1.from('.line3', {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    }, "-=0.5");

    t1.from('.righthome img', {
      y: 50,
      opacity: 0,
      duration: 1
    }, "-=0.8");

  }, { scope });

  return (
    <div id='home' ref={scope}>
      <div className="lefthome">
        <div className="line1">I `AM</div>
        <div className="line2">SAMIR CHAUDHARY</div>
        <div className="line3">
          <Typewriter
            options={{
              strings: ['WEB DEVELOPER', 'MERN STACK DEVELOPER', 'FRONTEND DEVELOPER'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <a href="/resume.pdf" download>
          <button className='cv'>Download CV</button>
        </a>
      </div>

      <div className="righthome">
        <img src={man} alt="Samir" />
      </div>
    </div>
  );
}

export default Home;

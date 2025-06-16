import React, { useRef } from 'react';
import './About.css';
import Card from '../Card/Card';
import mern from '../../assets/images/mern.png';
import dsa from '../../assets/images/dsa.png';
import cpp from '../../assets/images/cpp.png';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // 🔥 Important

function About() {
  const scope = useRef(); // DOM scope

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scope.current,
        start: 'top 80%',
        end: 'bottom 40%',
        toggleActions: 'play restart play reverse', // You can change this
        scrub: false,
      }
    });

    tl.from('.circle', {
      scale: 0,
      opacity: 0,
      duration: 0.7,
      stagger: 0.8,
      ease: 'back.out(1.7)',
    })
    .from('.line', {
      height: 0,
      duration: 0.4,
      stagger: 0.2,
    }, '-=1')
    .from('.details > div', {
      x: -100,
      opacity: 0,
      duration: 0.6,
      stagger: 0.3,
      ease: 'power2.out'
    }, '-=0.8')
    .from('.aboutright .card', {
      x: 100,
      opacity: 0,
      duration: 0.6,
      stagger: 0.3,
      ease: 'power2.out'
    }, '-=1');

  }, { scope });

  return (
    <div id='about' ref={scope}>
      <div className="aboutleft">
        <div className="circleline">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="details">
          <div className="personalinfo">
            <h1>PERSONAL INFORMATION</h1>
            <p>Name: Samir Chaudhary</p>
            <p>Age: 21</p>
            <p>Gender: Male</p>
            <p>Mode of communication: Hindi, English</p>
          </div>

          <div className="educationinfo">
            <h1>EDUCATION</h1>
            <p>DEGREE: Bachelor of Engineering.</p>
            <p>BRANCH: Electronics and Telecommunication Engineering</p>
            <p>College: Army Institute of Technology</p>
          </div>

          <div className="skillsinfo">
            <h1>SKILLS</h1>
            <p>MERN STACK WEB DEVELOPER</p>
            <p>C++</p>
            <p>DSA</p>
            <p>FRONTEND DEVELOPER</p>
          </div>
        </div>
      </div>

      <div className="aboutright">
        <Card title="MERN STACK WEB DEVELOPER" image={mern} />
        <Card title="C++" image={cpp} />
        <Card title="DSA" image={dsa} />
      </div>
    </div>
  );
}

export default About;

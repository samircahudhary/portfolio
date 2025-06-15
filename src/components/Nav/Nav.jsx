import React, { useRef } from 'react'
import './Nav.css'
import {Link} from 'react-scroll'
import {useGSAP} from  '@gsap/react'
 import gsap from 'gsap'
function Nav() {
  const scope=useRef()
  let menu=useRef()
  let mobile=useRef()
useGSAP(() => {
  const t1 = gsap.timeline()

  t1.from('nav h1', {
    y: -100,
    duration: 1,
    ease: 'bounce.out'
  })

  t1.from('nav ul li', {
    y: 8,
    
    duration: 2,
    ease: 'bounce.out',
    stagger: 1,
    
  })
}, { scope })


  return (
    <nav ref={scope}>
    <h1>MY-PORTFOLIO</h1>
    <ul className='desktopmenu'>
     <Link to='home' smooth duration={200}>   <li>HOME</li> </Link>
    <Link to='about'smooth duration={500}> <li>ABOUT</li> </Link>
     <Link to='project'smooth duration={500}> <li>PROJECTS</li></Link>
      <Link to='contact'smooth duration={600}> <li>CONTACT </li></Link>
       </ul>
       <div className="hamburger" ref={menu} onClick={()=>{
        mobile.current.classList.toggle('activemobile');
        menu.current.classList.toggle('activeham');
       }}>
       <div className="ham"></div>
       <div className="ham"></div>
       <div className="ham"></div>
       </div>

       <ul className='mobilemenu' ref={mobile}>
     <Link to='home' smooth duration={200}>   <li>HOME</li> </Link>
    <Link to='about'smooth duration={500}> <li>ABOUT</li> </Link>
     <Link to='project'smooth duration={500}> <li>PROJECTS</li></Link>
      <Link to='contact'smooth duration={600}> <li>CONTACT </li></Link>
       </ul>
    </nav>
  )
}

export default Nav
import React from 'react'
import './Project.css'
import ai from '../../assets/images/ai.png'
import college from '../../assets/images/college.png'
import snake from '../../assets/images/snake.png'
import tic from '../../assets/images/tic.png'
import soon from '../../assets/images/soon.png'
import Card from '../Card/Card'
import ecom from '../../assets/images/ecom.png'


function Project() {
  return (
    <div id='project'> 
    <h2>PROJECTS</h2>
    <p>Here are some of my projects that I have worked on. You can find more on my  
      <a href="https://github.com/samircahudhary"> GITHUB</a>
    </p>
    <div className="projectcard">
      <a href="https://ai-chat-bot-flax-delta.vercel.app/"><Card title={'VIRTUAL ASSISTANCE'} image={ai}/></a>
       <a href="https://ecart-d69e.vercel.app/"> <Card title={"ECOMMERCE"} image={ecom}/></a> 
     <a href="https://collage-web-issues-lbud.vercel.app/"> <Card title={"COLLAGE WEBSITE GENZEE"} image={college}/></a>
    
     <a href=""> <Card title={"SNAKE GAME"} image={snake}/></a>
     <a href=""> <Card title={'TIC TOC'} image={tic}/></a>
    <a href=""><Card title={'FUTURE PROJECTS'} image={soon}/></a>

    </div>

    </div>
  )
}

export default Project
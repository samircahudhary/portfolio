import React from 'react'
import './Project.css'
import ai from '../../assets/images/ai.png'
import college from '../../assets/images/college.png'
import snake from '../../assets/images/snake.png'
import tic from '../../assets/images/tic.png'
import soon from '../../assets/images/soon.png'
import Card from '../Card/Card'
function Project() {
  return (
    <div id='project'> 
    <h2>PROJECTS</h2>
    <p>Here are some of my projects that I have worked on. You can find more on my GitHub.</p>
    <div className="projectcard">
      <Card title={'VIRTUAL ASSISTANCE'} image={ai}/>
      <Card title={"COLLAGE WEBSITE GENZee"} image={college}/>
      <Card title={"SNAKE GAME"} image={snake}/>
      <Card title={'TIC TOC'} image={tic}/>
      <Card title={'FUTURE PROJECTS'} image={soon}/>

    </div>

    </div>
  )
}

export default Project
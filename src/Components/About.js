import React from 'react'

import Jeremy from '../Assets/Jeremy.jpg'
import "./Style/About.css"
const About = () => {
  return (
    <div id="about">

      <div className="greet">
        What's his story?

      </div>
      <div className="storyBox">
        {/* <div className="photoBox"> */}
          <img className="myPhoto" src={ Jeremy } alt="Jeremy" />
        {/* </div> */}


        <p className="blurb"> I'm a Full-Stack Software Engineer with a passion for creativity, communication, and collaboration.<br /><br />
        Born and raised in Kansas, I seized the opportunity to escape, following theatrical passions and the hope for an exciting adventure. Along the journey, I discovered that to reach the metaphorical "Emerald City in the Land of OZ" I would have to become the wizard behind the curtain.<br /><br />
        Cue heroic montage of life lesson building experiences resulting in a multi-skilled problem solver and teammate. Through these labors, I discovered programming. Initially I taught myself the basics of HTML, CSS, and JS and later attended Lambda School learning React, Redux, and Node. I'm currently learning GraphQL, AWS, and Docker.<br /><br />
        Each new challenge, brings me closer to the "Emerald Tower", but I've learned along the way the journey matters more. I seek to reach the destination with a team delivering a solution that will be of great service to others.
        </p>
      </div>

    </div>
  )
}

export default About


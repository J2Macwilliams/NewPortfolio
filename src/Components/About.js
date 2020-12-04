import React, {useRef} from 'react'
import {useIntersection} from 'react-use'
import gsap from 'gsap'
import Jeremy from '../Assets/Jeremy.jpg'
import "./Style/About.css"
const About = () => {
  const sectionRef = useRef(null)
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  })

  const fadeIn = element => {
    gsap.to(element, {
      duration: 1,
      opacity: 1,
      y: -30,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    })
  }
  const fadeOut = element => {
    gsap.to(element, {
      duration: 1,
      opacity: 0,
      y: -40,
      ease: "power4.out",
    })
  }

  intersection && intersection.intersectionRatio < 0.3
    ? fadeOut(".fadeIn") :
    fadeIn(".fadeIn");

  return (
    <div id="about"  ref={sectionRef}>
      <div className="about fadeIn">
      <h1 >What's his story</h1>
      <h1>?</h1></div>
      <div className="storyBox">
        <img className="myPhoto fadeIn"  src={ Jeremy } alt="Jeremy" />
        <p className="blurb fadeIn" > I'm a Full-Stack Software Engineer with a passion for creativity, communication, and collaboration.<br /><br />
        Born and raised in Kansas, I seized the opportunity to escape, following theatrical passions and the hope for an exciting adventure. Along the journey, I discovered that to reach the metaphorical "Emerald City in the Land of OZ" I would have to become the wizard behind the curtain.<br /><br />
        Cue heroic montage of life lesson building experiences resulting in a multi-skilled problem solver and teammate. Through these labors, I discovered programming. Initially I taught myself the basics of HTML, CSS, and JS and later attended Lambda School learning React, Redux, and Node. I'm currently learning GraphQL, AWS, and Docker.<br /><br />
        Each new challenge, brings me closer to the "Emerald City", but I've learned along the way the journey matters more. I seek to reach the destination with a team delivering a solution that will be of great service to others.
        </p>
      </div>

    </div>
  )
}

export default About


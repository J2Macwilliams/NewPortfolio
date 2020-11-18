import React, { useState, useEffect } from 'react'
import "./Style/Nav.css"
import { Box } from '@chakra-ui/core'
import { BiMenuAltRight } from 'react-icons/bi';

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const openNav = (e) => {
    e.preventDefault();
    setShowNav(!showNav)
  }
  const closeNav = (e) => {
    e.preventDefault();
    setShowNav(!showNav)
  }
  useEffect(() => {
    if (showNav) {
     var smallNavigation = document.getElementsByClassName("smallAnchors")
     var sNLength = smallNavigation.length
     for(let i = 0; i< sNLength; i++){
      smallNavigation[i].addEventListener("click", () => setShowNav(!showNav))
     }
     console.log(smallNavigation)
    }
  }, [showNav])



  return (
    <>
      <nav id="navBar">
        <a href="/" >Home</a>
        <a href='#about'  >About</a>
        <a href='#projects'  >Projects</a>
        <a href='#contact'  >Contact</a>
        <Box onClick={ openNav } className="hamburger" color="white" as={ BiMenuAltRight } />
      </nav>
      {showNav ? <div className="navBackground">
        <div className="close" onClick={ closeNav }>&times;</div>
        <nav id="smallNav" >
          <a className="smallAnchors" href="#home" >Home</a>
          <a className="smallAnchors" href='#about'  >About</a>
          <a className="smallAnchors" href='#projects'  >Projects</a>
          <a className="smallAnchors" href='#contact'  >Contact</a>
        </nav>


      </div> : '' }



    </>
  )
}

export default Nav

import React from 'react'

import Nav from './Components/Nav'
import Splash from './Components/Splash'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

function App() {


  return (
    <div className="App">
      <Splash />
      <Nav />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

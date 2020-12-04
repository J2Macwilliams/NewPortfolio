import React from 'react'
import "./Style/Projects.css"
import "./Style/Slider.css"

import ToggleContent from './Modal/ToggleContent'
import Modal from './Modal/Modal'
import Slider from './Slider'

// GOK pics
import SignUp from '../Assets/GOK/signUp.png'
import Login from '../Assets/GOK/login.png'
import AdminDash from '../Assets/GOK/adminDash.png'
import Courses from '../Assets/GOK/courses.png'
import StudentInfo from '../Assets/GOK/studentInfo.png'
import UserDash from '../Assets/GOK/userDash.png'
import PlacementTest from '../Assets/GOK/placementTest.png'
// J2 pics
import Register from '../Assets/J2/register.png'
import Vacations from '../Assets/J2/Vacations.png'
import VacationDays from '../Assets/J2/vacationDays.png'
import ProfilePage from '../Assets/J2/profilePage.png'
import EventPage from '../Assets/J2/eventPage.png'
// D8Picker pics
import Splash from '../Assets/D8Picker/splash.png'
import Dashboard from '../Assets/D8Picker/dashboard.png'

import GOK from '../Assets/GOK/gok.jpeg'
import J2 from '../Assets/J2/Journey2.jpeg'
import D8Picker from '../Assets/D8Picker/d8picker.jpeg'
import ReactImg from '../Assets/Skills/react.png'
import ReduxImg from '../Assets/Skills/redux.png'
import NodeJsImg from '../Assets/Skills/nodejs.png'
import GraphQL from '../Assets/Skills/graphql.png'
import Apollo from '../Assets/Skills/Apollo.png'
import Prisma from '../Assets/Skills/prisma.png'
import PostgreSQL from '../Assets/Skills/postgres.png'
import MongoDB from '../Assets/Skills/mongoDB.png'
import Oauth2 from '../Assets/Skills/oauth.png'
import Jest from '../Assets/Skills/jest.png'

import { SiNotion } from 'react-icons/si';
import { FaGithub, FaLink, FaWindowClose } from 'react-icons/fa';

const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="prjBox">
        <div className="card">
          <div className="imgBox">
            <img src={ GOK } alt="Garden of Knowledge" />
          </div>
          <div className="content">
            <h2 >Garden of Knowledge</h2>
            <p>Learning Management System</p>
            <div className="cardSkills">
              <img src={ ReactImg } alt="React" />
              <img src={ ReduxImg } alt="Redux" />
              <img src={ NodeJsImg } alt="Node" />
              <img src={ PostgreSQL } alt="PostgreSQL" />
            </div>
            <ToggleContent
              toggle={ toggleSwitch => <button className="cardButton" onClick={ toggleSwitch }>Learn More</button> }
              content={ toggleSwitch => (
                <Modal overlay={ toggleSwitch }>
                  <div className="topBox">
                    <Slider arr={ [
                      SignUp, Login, UserDash, PlacementTest, AdminDash, Courses, StudentInfo
                    ] } />
                    <div className="projectTitle">
                      <h1>Garden of Knowledge</h1>
                    </div>
                  </div>
                  <div className="bottomBox">
                    <div className="goals">
                      <div>
                        <h3>Goal:</h3>
                        <p>Create a Learning Management System with onboarding for Admin, Staff, and students</p>
                      </div>
                      <div >
                        <h3>Lessons:</h3>
                        <p>Create a strong relationship with the stakeholder to deliver a product that truly met her needs. The work on this project incorporated the efforts of 2 remote teams, refactoring legacy code and fixing flawed logic. </p>
                      </div>
                    </div>
                    <div className="prjLinks">
                      <a href="https://www.notion.so/The-Garden-of-Knowledge-c6fe89f6e98d493fa597de84a8bd6818" rel="noreferrer noopener" target="_blank"><SiNotion /></a>
                      <a href="https://github.com/Labs24GOK" rel="noreferrer noopener" target="_blank"> <FaGithub /></a>
                      <a href="https://gardenofknowledge.netlify.app/" rel="noreferrer noopener" target="_blank"> <FaLink /></a>
                      <FaWindowClose className="exitModal" onClick={ toggleSwitch } />
                    </div>
                  </div>
                </Modal>
              ) }
            />
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={ J2 } alt="Journey2" />
          </div>
          <div className="content">
            <h2 >Journey2</h2>
            <p>Vacation Budget Planner</p>
            <div className="cardSkills">
              <img src={ ReactImg } alt="React" />
              <img src={ GraphQL } alt="GraphQl" />
              <img className="prisma" src={ Prisma } alt="Prisma" />
              <img src={ Apollo } alt="Apollo" />
              <img src={ NodeJsImg } alt="Node" />
              <img src={ PostgreSQL } alt="PostgreSQL" />
              <img src={ Jest } alt="Jest" />
            </div>
            <ToggleContent
              toggle={ toggleSwitch => <button className="cardButton" onClick={ toggleSwitch }>Learn More</button> }
              content={ toggleSwitch => (
                <Modal overlay={ toggleSwitch }>
                  <div className="topBox">


                    <Slider arr={ [Register, Vacations, VacationDays, EventPage, ProfilePage] } />
                    <div className="projectTitle">
                      <h1>Journey2</h1>
                    </div>
                  </div>
                  <div className="bottomBox">
                    <div className="goals">
                      <div>
                        <h3>Goal:</h3>
                        <p>Take the guess work out of financially planning a vacation. Organize vacations, excursions, and make vacation decisions based upon a budget.</p>
                      </div>
                      <div >
                        <h3>Lessons:</h3>
                        <p>Many architectural decisions made based upon production and testing environments. Could have gone serverless, but would miss testing opportunity. Side project budgetary needs reflect on server speed. Building with passion creates a better product.</p>
                      </div>
                    </div>
                    <div className="prjLinks">
                      <a href="https://www.notion.so/Vacation-Planner-e81c29178ad8410eb10f298e4f6d5860" rel="noreferrer noopener" target="_blank"><SiNotion /></a>
                      <a href="https://github.com/VacationJourney" rel="noreferrer noopener" target="_blank"> <FaGithub /></a>
                      <a href="https://journey2.netlify.app/" rel="noreferrer noopener" target="_blank"> <FaLink /></a>
                      <FaWindowClose className="exitModal" onClick={ toggleSwitch } />
                    </div>
                  </div>
                </Modal>
              ) }
            />
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src={ D8Picker } alt="D8Picker" />
          </div>
          <div className="content">
            <h2 >D8Picker</h2>
            <p>Aperiodic recurrence scheduler</p>
            <div className="cardSkills">
              <img src={ ReactImg } alt="React" />
              <img src={ Oauth2 } alt="oauth2" />
              <img src={ NodeJsImg } alt="Node" />
              <img src={ MongoDB } alt="MongoDB" />
            </div>
            <ToggleContent
              toggle={ toggleSwitch => <button className="cardButton" onClick={ toggleSwitch }>Learn More</button> }
              content={ toggleSwitch => (
                <Modal overlay={ toggleSwitch }>
                  <div className="topBox">
                    <Slider arr={ [Splash, Dashboard] } />
                    <div className="projectTitle">
                      <h1>D8Picker</h1>
                    </div>
                  </div>
                  <div className="bottomBox">
                    <div className="goals">
                      <div>
                        <h3>Goal:</h3>
                        <p>Pull in events from Google Calendar API, create template to schedule aperiodic events as group and publish to Google Calendar, and update DOm with respective changes. </p>
                      </div>
                      <div >
                        <h3>Lessons:</h3>
                        <p>DevOps configuration was tricky as we established the Oauth2 Authentication and Google Calendar connections. In the end we found a shortcut through Firebase to establish the API key.</p>
                      </div>
                    </div>
                    <div className="prjLinks">
                      <a href="https://www.notion.so/D8-Picker-School-Calendar-945247d05459402199c00843664fb4d1" rel="noreferrer noopener" target="_blank"><SiNotion /></a>
                      <a href="https://github.com/Labs20-D8Picker" rel="noreferrer noopener" target="_blank"> <FaGithub /></a>
                      <a href="https://labs20d8picker.netlify.app/" rel="noreferrer noopener" target="_blank"> <FaLink /></a>
                      <FaWindowClose className="exitModal" onClick={ toggleSwitch } />
                    </div>
                  </div>
                </Modal>
              ) }
            />
          </div>
        </div>
      </div>
    </div>



  )
}

export default Projects


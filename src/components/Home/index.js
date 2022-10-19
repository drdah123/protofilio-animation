import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['b', 'd', 'a', 'l', 'r', 'a', 'h', 'm', 'a', 'n']
  const jobArray = ['W', 'e', 'b', ' ', 'd', 'e', 'v', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass}`}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br></br>
            <span className={`${letterClass} _13`}>I </span>
            <span
              className={`${letterClass} _14`}
              style={{ marginLeft: 5, marginRight: 5 }}
            >
              {' '}
              am
            </span>
            <span className={`${letterClass} _14`} style={{ color: 'skyblue' }}>
              {' '}
              A
            </span>

            {/* <img src={LogoTitle} alt="developer" /> */}
            <AnimatedLetters
              strArray={nameArray}
              letterClass={letterClass}
              idx={15}
            />
            <br />
            <AnimatedLetters
              strArray={jobArray}
              letterClass={letterClass}
              idx={22}
            />
          </h1>
          <h2>
            Frontend developer / javascript excited / Full stack developer{' '}
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home

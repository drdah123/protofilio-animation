import './index.scss'

import React from 'react'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((chr, i) => (
        <span key={chr + i} className={`${letterClass} _${i + idx}`}>
          {chr}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters

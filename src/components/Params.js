import React from 'react'
import { useParams } from 'react-router-dom'

const Params = (props) => {
    const {word, color, background} = useParams()
  return (
    <div>
      {
        isNaN(word)? 
        <p style={
          color? {color: color, backgroundColor: background} : null
      }>
        Your word is: {word}
        </p>
        :
        <p>
        Your number is: {word}</p>
      }

    </div>
  )
}

export default Params
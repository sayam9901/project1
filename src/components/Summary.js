import React from 'react'
import { useState , useEffect } from 'react'
import Button from "react-bootstrap/Button";

const Summary = ({exitModel}) => {
    const [summary , setSummary] = useState([])
    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(response => response.json())
        .then(data => setSummary(data))
    
      })
  return (
    <div>{
        summary.map((summa)=>(
            <div  style={{border:"solid black"}}>
           <p>{summa.show.summary}</p>
           <Button onClick={exitModel}  variant="primary">GO BACK</Button>
           </div>
        ))
        }</div>
  )
}

export default Summary
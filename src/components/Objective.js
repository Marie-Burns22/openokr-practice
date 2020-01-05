import React from 'react'

const Objective = ({objective}) => (
    <div>
        <h1>{objective.description}</h1>
        <h2>Score:<span>{objective.score}</span></h2>
    </div>

)

export default Objective
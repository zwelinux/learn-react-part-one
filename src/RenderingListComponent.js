import React from 'react'

const simpleArrays = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
]

const RenderingListComponent = () => {

    const simpleArrayLists = simpleArrays.map(simpleArray => (
        <li>{simpleArray}</li>
    ))

    return(
        <>
            {simpleArrayLists}
        </>
    )
}

export default RenderingListComponent
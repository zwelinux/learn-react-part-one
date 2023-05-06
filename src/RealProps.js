import React from 'react'

const RealProps = (props) => {

    let title = props.title 
    let content = props.content 

    return(
        <>
            <h2>{title}</h2>
            <p>{content}</p>
        </>
    )
}

export default RealProps
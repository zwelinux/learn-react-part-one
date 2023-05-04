import React from 'react'
import './Accordion.css'

const Accordion = ({content}) => {
    return(
        <div className="accordion">
            <code>Notes : </code>
            {content}
        </div>
    )
}

export default Accordion
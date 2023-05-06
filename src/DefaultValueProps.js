import React from 'react'

const DefaultValueProps = ({ sccName, link = 'http://waaneiza.com' }) => {
    return(
        <>
            <h2>{sccName}</h2>
            <a href={link} target='blank'  >Website</a>
        </>
    )
}

export default DefaultValueProps
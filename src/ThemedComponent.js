import React from 'react'
import Profile from './Profile'

const ThemedComponent = () => {

    const myTheme = {
        theme: {
            backgroundColor: 'lightgreen',
            color: '#4d4d4d',
            fontFamily: 'verdana',
            fontSize: '1.3em',
            padding: '20px'
        }
    }

    return(
        <div style={myTheme.theme}>
            <h2>Theme Activated</h2>
            <Profile />
        </div>
    )
}

export default ThemedComponent
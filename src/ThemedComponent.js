import React from 'react'
import Profile from './Profile'

const ThemedComponent = () => {

    const myTheme = {
        theme: {
            backgroundColor: '#efefef',
            color: '#4d4d4d',
            fontFamily: 'lucida console',
            fontSize: '1.3em'
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
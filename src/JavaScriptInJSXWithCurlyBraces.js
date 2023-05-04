import React from 'react'

const JavaScriptInJSXWithCurlyBraces = () => {

    const avatar = "https://i.imgur.com/7vQD0fPs.jpg"
    const description = 'လူလည်အာရှသား'

    return(
        <>
            <img 
                src={avatar}
                alt={description}
            />
            <br />
            {description}
            <br />
            <ul
                style={{ 
                    backgroundColor: '#abcd77',
                    color: '#fff' }}
            >
                <li>
                    တေးဆို အရိုး
                </li>
                <li>
                    တေးရေး အရိုး
                </li>
            </ul>
        </>
    )
}

export default JavaScriptInJSXWithCurlyBraces
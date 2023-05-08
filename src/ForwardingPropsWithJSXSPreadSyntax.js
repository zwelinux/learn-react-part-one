import React from 'react'
import ss from './images/Screenshot 2023-05-06 at 10.33.18 AM.png'

const PropsToBeUsed = ({ message, date }) => {
    return(
        <>
            <p>{message}</p>
            <b><i>{date}</i></b>
        </>
    )
}

const ForwardingPropsWithJSXSpreadSyntax = () => {

    const props = {message: 'hello darkness, my old friend', date: '8.5.2023 ~ Monday'}
    return(
        <>
            <img src={ss} width="100%" alt='ss' />

            <PropsToBeUsed
                {...props}
            />

        </>
    )
}

export default ForwardingPropsWithJSXSpreadSyntax
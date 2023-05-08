import React from 'react'

const ChildrenAcceptedComponent = ({ children }) => {
    return(
        <div>
            <h2>This is Parent</h2>
            <p>Below these are children seperated by their CSS Styling</p>
            <div style={{ backgroundColor: '#123456', color: '#fff', padding: '10px' }}>
                {children}
            </div>
        </div>
    )
}

const ChildrenProps = () => {
    return(
        <>
            <ChildrenAcceptedComponent>
                <h3>Children 1</h3>
                <h4>Children 2</h4>
                <h5>Children 3</h5>
                <img src="https://images.unsplash.com/photo-1577349516274-37ff88a53627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80" width="200px" alt="ကြောင်ကျန်းမာလေး" style={{ borderRadius: '20px' }} />
            </ChildrenAcceptedComponent>
        </>
    )
}

export default ChildrenProps 
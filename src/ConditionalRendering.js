import React from "react"

const Item = ({ title, status = false }) => {
    return(
        <li>{status ? 
            (
                <del>
                    {title + ' ✔'}
                </del>
            ) : title}</li>
    )
}

const ConditionalRendering = () => {
    return(
        <>
            <h3>တစ်နေ့တာလုပ်စရာများ </h3>
            <ul>
                <Item 
                    title="React လုပ်၇န်"
                    status={false}
                />
                <Item 
                    title="ရေ 4 လီတာ သောက်ရန်။"
                    status={true}
                />
                <Item 
                    title="မသေအောင် နေရန်"
                    status={true}
                />
            </ul>
        </>
    )
}

export default ConditionalRendering 
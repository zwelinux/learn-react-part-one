import React from "react";

function setImageUrl(imageInfo) {
    return(
        'https://images.unsplash.com/' + imageInfo.id
    )
}


const ThirdPropsComponent = ({ imageInfo, size }) => {
    return(
        <img 
            src={setImageUrl(imageInfo)}
            alt={imageInfo.name}
            width={size}
            style={{
                borderRadius: '20px',
                padding: '3px'
            }}
        />
    )
}

const ThirdProps = () => {
    return(
        <section>
            <ThirdPropsComponent
                imageInfo={{
                    id : 'photo-1571988840298-3b5301d5109b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
                    name : 'ကြောင်ဝတုတ်လေး'
                }}

                size = {300}
            />

            <ThirdPropsComponent
                imageInfo={{
                    id : 'photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80',
                    name : 'ကြောင်ချစ်စရာလေး'
                }}

                size = {200}
            />
        </section>
    )
}

export default ThirdProps
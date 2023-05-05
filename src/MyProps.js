import React from 'react'
import { getImageUrl } from './utils'

const Avatar = ({ person, size }) => {
    return(
        <>
            <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
            />
        </>
    )
}

const MyProps = () => {
    return(
        <>
            <Avatar 
                person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={100}
            />
            <Avatar 
                person={{ name: 'zwelinux', imageId: 'OKS67lh' }} size={70}
            />
        </>
    )
}

export default MyProps
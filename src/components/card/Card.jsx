

import './card.css'
import Button from './../../components/button/Button'
import { useEffect, useState } from 'react'

const Card = ({
    image,
    title,
    price,
    listProps
}) => {
    const [list, setList] = useState(null)

    useEffect(() => {
        const list = listProps.map((item, index )=> {
            return <li key={index} id='paragraph'>{item}</li>
        })
        setList(list)
    }, [])
    return (
        <div className='wrapped-card'>
            <div className='card'>
                <img src={image} alt="icon" />
                <p className='title'>
                    {title}
                </p>
                <h1 className="price">
                    ${price}
                </h1>
                <ul className='list'>
                    {
                        list && list
                    }
                </ul>
            </div>
            <div className="button" >
                <Button text={"Sign Up"} />
            </div>
        </div>
    )
}

export default Card
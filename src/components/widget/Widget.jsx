/**
 * this component using for any card in the website this card has this style
 * Icon
 * Header
 * description
 */

import { useEffect } from 'react'
import './widget.css'

const Widget = ({
    icon,
    title,
    description,
    whiteColor
}) => {

    /**
     * return true if the icon is HTML element otherwise false
     */
    const isHTMLElement = (icon) => {
        if (typeof icon === 'object')
            return true
        else
            return false

    }

    return (
        <div className='widget'>
            <div className="icon-wrapper">
                {
                    isHTMLElement(icon) ? icon :
                        <img src={icon} alt="con" />

                }
            </div>
            <h2 className="title">
                {title}
            </h2>
            <p className="description" id={whiteColor ? 'white-color' : 'paragraph'}>
                {description}
            </p>
        </div>
    )
}

export default Widget
/**
 * header component for each page has title and description.
 */

import './header.css'

const Header = ({
    title,
    text,
    whiteColor,
}) => {
    return (
        <div className="wrapper-header">
            <h1 className="header">
                <span> {title}</span>
            </h1>
            <hr />
            <p className="description" id={whiteColor ? 'white-color' : 'paragraph'} >
                {
                    text ? text :
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam porro pariatur quaerat sit consequatur dolor sit amet consectetur adipisicing elit."
                }
            </p>
        </div>
    )
}

export default Header
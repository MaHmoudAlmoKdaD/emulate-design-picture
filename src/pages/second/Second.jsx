/**
 * this component wrapped the second page in the image that I imitate
 */

import Header from '../../components/header_of_pages/Header'
import Widget from '../../components/widget/Widget'
import './second.css'

/**
 * text to send it to widget component in our case we will use same text for all widget
 */
const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque facere quae modi cupiditate!'

const Second = () => {
    return (
        <div className='second'>
            <Header
                title={"Code Challenge"}
                
            />
            <div className="widgets">
                <Widget
                    icon={<i className="fa fa-hand-pointer-o"></i>}
                    title={"Fully Functional"}
                    description={text}
                />
                <Widget
                    icon={<i className="fa fa-check-circle-o" aria-hidden="true"></i>}
                    title={"Fully Functional"}
                    description={text}
                />
                <Widget
                    icon={<i className="fa fa-square-o" aria-hidden="true"></i>}
                    title={"Fully Functional"}
                    description={text}
                />
                <Widget
                    icon={<i className="fa fa-map-marker"></i>}
                    title={"Location Tracking"}
                    description={text}
                />
                <Widget
                    icon={<i className="fa fa-cogs"></i>}
                    title={"Powerful settings"}
                    description={text}
                />
                <Widget
                    icon={<i className="fa fa-globe "></i>}
                    title={"Multiple Languages"}
                    description={text}
                />

            </div>
        </div>
    )
}

export default Second
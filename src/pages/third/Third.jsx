/**
 * this component wrapped the third page in the image that I imitate
 */

import './third.css'
import mainImage from './../../images/thumb-2 (1).png'
import ListItem from '../../components/list_of_information_thirdPage/ListItem'
import Icon from '../../components/icon/Icon'
import checkIcon from './../../images/check.svg'

/**
 * this text use for the list of this component, it is a static cuz there is no any API
 */
const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Hic, eius."

const Third = () => {
    return (
        <div className='third'>
            <div className="image">
                <img src={mainImage} alt="mobile image" />
            </div>
            <div className="description">
                <h1 className="header">
                    Work faster with powerful tools.
                </h1>
                <div className="list" id="paragraph">
                    <ul>
                        <ListItem imageIcon={checkIcon} text={text} />
                        <ListItem imageIcon={checkIcon} text={text} />
                        <ListItem imageIcon={checkIcon} text={text} />
                        <ListItem imageIcon={checkIcon} text={text} />
                        <ListItem imageIcon={checkIcon} text={text} />
                    </ul>
                </div>
                <div className="icons">
                    <Icon icon={<i className="fa fa-bell" aria-hidden="true"></i>} />
                    <Icon icon={<i className="fa fa-envelope-open" aria-hidden="true"></i>} />
                    <Icon icon={<i className="fa fa-video-camera" aria-hidden="true"></i>} />
                </div>
            </div>
        </div>
    )
}

export default Third
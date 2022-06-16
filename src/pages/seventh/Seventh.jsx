/**
 * this component wrapped the seventh page in the image that I imitate
 */

import './seventh.css'
import Header from './../../components/header_of_pages/Header'
import googleAppImage from './../../images/google-play.png'
import AppStoreImage from './../../images/app-store.png'

/**
 * text to send it to widget component in our case we will use same text for all widget
 */
const text1 = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque facere quae modi cupiditate ipsum dolor sit, amet consectetur adipisicing elit. Neque facere.
Lorem ipsum dolor sit, amet elit. Neque facere quae modi cupiditate ipsum dolor sit, amet adipisicing elit. Neque facere.`

const Seventh = () => {
    return (
        <div className='seventh'>
            <div className="wrapper-content">
                <Header
                    title={"BASMA is available for all devices"}
                    text={text1}
                    whiteColor={true}
                />
                <div className="images">
                    <img src={googleAppImage} alt="" />
                    <img src={AppStoreImage} alt="" />
                </div>
                <p>* Available on iphone, ipad and all android devices</p>
            </div>
        </div>
    )
}

export default Seventh
/**
 * this component wrapped the fifth page in the image that I imitate
 */

import './fifth.css'
import Widget from '../../components/widget/Widget'
import download from '../../images/download.png'
import setting from '../../images/settings.png'
import app from '../../images/app.png'
import Header from '../../components/header_of_pages/Header'
/**
 * static text for the texts widgets
 */
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magnam commodi optio quod recusandae voluptates."
const Fifth = () => {
    return (
        <div className='five'>
            <Header
                title={"Code Challenge"}
                whiteColor={true}
            />
            <div className="widgets">
                <Widget
                    icon={download}
                    title={"Install the app"}
                    description={text}
                    whiteColor={true}
                />
                <div className="greater-than-sign">
                    &gt;
                </div>
                <Widget
                    icon={setting}
                    title={"Setup  your profile"}
                    description={text}
                    whiteColor={true}
                />
                <div className="greater-than-sign">
                    &gt;
                </div>
                <Widget
                    icon={app}
                    title={"Engoy the features"}
                    description={text}
                    whiteColor={true}
                />
            </div>
        </div>
    )
}

export default Fifth
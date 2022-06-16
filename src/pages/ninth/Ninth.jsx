/**
 * this component wrapped the ninth page in the image that I imitate
 */

import './ninth.css'
import Header from './../../components/header_of_pages/Header'
import ListItem from './../../components/list_of_information_thirdPage/ListItem'
import Button from './../../components/button/Button'
import Icon from '../../components/icon/Icon'
import Input from './../../components/input/Input'
/**
 * text to send it to widget component in our case we will use same text for all widget
 */
const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem similique esse aut magni? Sunt mollitia id, veritatis sed praesentium incidunt!'

// icons
const homeIcon = <i className="fa fa-home" aria-hidden="true"></i>
const callIcon = <i className="fa fa-phone" aria-hidden="true"></i>
const mailIcon = <i className="fa fa-envelope" aria-hidden="true"></i>
const Ninth = () => {
    const handleSubmit = (e) => {
        e.preventDefault ()
    }
    
    const goToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className='ninth'>
            <div className="header">
                <Header
                    title={"Stay Turned"}
                    text={text}
                />
            </div>
            <div className="contact-info">
                <div className="info">
                    <p className="description" id='paragraph'>
                        Contrary to popular, Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos soluta animi, facilis veritatis exercitationem !
                    </p>
                    <ul className='list'>
                        <ListItem
                            icon={
                                <Icon
                                    icon={homeIcon}
                                    background={"#761DFD"}
                                    color={"#fff"}
                                />
                            }
                            text={'Vestibulul nulla libero, convaliis, tincidunt suscipti diam, DC 2002'}
                        />
                        <ListItem
                            icon={
                                <Icon
                                    icon={callIcon}
                                    background={"#761DFD"}
                                    color={"#fff"}
                                />
                            }
                            text={'+1230 456 798-012 345 6789'}
                        />
                        <ListItem
                            icon={
                                <Icon
                                    icon={mailIcon}
                                    background={"#761DFD"}
                                    color={"#fff"}
                                />
                            }
                            text={'exampledomain@domain.com'}
                        />

                    </ul>
                </div>
                <div className="contact">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Input
                                type={'text'}
                                placeholder={'Name'}
                            />
                        </div>
                        <div>
                            <Input
                                type={'email'}
                                placeholder={'Email'}
                            />
                        </div>
                        <div>
                            <Input
                                type={'text'}
                                placeholder={'Subject'}
                            />
                        </div>
                        <div>
                            <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
                        </div>
                        <div>
                            <Button
                                text={"Send Message"}
                                width={"100%"}
                                icon={<i className="fa fa-paper-plane" aria-hidden="true"></i>}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div
                className="go-to-top"
                onClick={goToTop}
            >
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Ninth
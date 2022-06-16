/**
 * this component wrapped the eight(subscribe) page in the image that I imitate
 */

import './subscribe.css'
import Header from './../../components/header_of_pages/Header';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

/**
 * text to send it to widget component in our case we will use same text for all widget
 */

const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, aspernatur corrupti harum dolores quia maxime architecto excepturi, veritatis accusantium aliquam sit!"

const Subscribe = () => {
    const handleSubmit = (e) => {
        e.preventDefault ()
    }
    return (
        <div className='subscribe'>
            <div className="wrapper-subscribe">
                <Header
                    title={"Subscribe to get update"}
                    text={text}
                />
                <form onSubmit={handleSubmit}>
                    <Input
                        type={'email'}
                        placeholder={'Enter Your Email'}
                    /><br />
                    <Button
                        text={"Subscribe"}
                        width={'65%'}
                    />
                </form>
            </div>
        </div>
    )
}

export default Subscribe
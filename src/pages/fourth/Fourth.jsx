/**
 * this component wrapped the fourth page in the image that I imitate
 */

import './fourth.css'
import image from './../../images/thumb-2.png'
import ListItem from '../../components/list_of_information_thirdPage/ListItem'
import Icon from '../../components/icon/Icon'
import { list } from './listOfItems'
import Button from '../../components/button/Button'




const Fourth = () => {

  const listOfinformation = () => {
    const items = list.map((item, index) => {
      return <ListItem
        key={index}
        icon={<Icon icon={item.icon} />}
        text={item.text}
      />
    })
    return items
  }


  return (
    <div className='fourth'>
      <div className="description">
        <h1 className="header">
          Share your photos with friends easily
        </h1>
        <div className="list">
          <ul>
            {listOfinformation()}
          </ul>
        </div>
        <Button text={"Learn more"} />
      </div>
      <div className="image">
        <img src={image} alt="mobile image" />
      </div>
    </div>
  )
}

export default Fourth
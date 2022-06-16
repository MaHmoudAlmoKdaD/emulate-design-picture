/**
 * this component wrapped the sixth page in the image that I imitate
 */

import './sixth.css'
import Header from './../../components/header_of_pages/Header'
import Card from '../../components/card/Card'
import { list } from './listOfItems'
import { useEffect, useState } from 'react'

const Sixth = () => {
  const [cards, setCards] = useState(null)

  useEffect(() => {
    const cards = list.map(item => {
      
      return <Card
        key={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
        listProps={item.list}
      />
      
    })
    setCards(cards)
  }, [])

  const handleAnchorElement =(e)=>{
    e.preventDefault()
  }

  return (
    <div className='sixth'>
      <Header
        title={"BASMA Code Challege"}
      />
      <div className="cards">
        {
          cards && cards
        }
      </div>
      <p id='paragraph'>Not sure what to choose? <a href="#" onClick={handleAnchorElement}>Contact us</a></p>
    </div>
  )
}

export default Sixth
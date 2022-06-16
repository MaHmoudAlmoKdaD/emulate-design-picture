/**
 * this component wrapped the first page in the image that I imitate
 */
import './home.css'
import homeImage from '../../images/thumb-1.png'
import Button from '../../components/button/Button'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__wrapped'>
        <div className="text-wrapped">
          <div className='text-content'>
            <h1>Cretive way to showcase your app </h1>
            <p id='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt enim inventore sint? Sequi magnam temporibus, placeat fugiat corrupti enim nihil, sunt labore est iste pariatur porro commodi autem quibusdam harum.</p>
            <Button text={"Get Started"}/>
          </div>
        </div>
        <div className='image'>
          <img src={homeImage} alt="moile image" />
        </div>
      </div>
    </div>
  )
}

export default Home
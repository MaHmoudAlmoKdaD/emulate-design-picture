import Home from './pages/home/Home.jsx'
import './app.css'
import Second from './pages/second/Second.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Third from './pages/third/Third.jsx';
import Fourth from './pages/fourth/Fourth.jsx';
import Fifth from './pages/fifth/Fifth.jsx';
import Sixth from './pages/sixth/Sixth.jsx';
import Seventh from './pages/seventh/Seventh.jsx';
import Subscribe from './pages/eight-subscribe/Subscribe.jsx';
import Ninth from './pages/ninth/Ninth.jsx';
function App() {
  return (
    <div >
      <Navbar />
      <div className='container'>
        <Home />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
        <Seventh />
        <Subscribe />
        <Ninth />
      </div>
    </div>
  );
}

export default App;

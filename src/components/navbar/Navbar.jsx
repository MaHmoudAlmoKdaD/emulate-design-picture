
import './navbar.css'
const Navbar = () => {
    const handleNavbar = () => {
        if (document.getElementById('menuButton').classList.contains('fa-close')) {
            document.getElementById('menuButton').classList.remove('fa-close');
            document.getElementById('menuButton').classList.add('fa-bars');
            document.getElementById('navigation').style.top = '-50vh'
    
        }
        else {
            document.getElementById('menuButton').classList.remove('fa-bars');
            document.getElementById('menuButton').classList.add('fa-close');
            document.getElementById('navigation').style.top = '38px'
        }
    }

    const handleAnchorElement = (e) => {
        e.preventDefault()
    }

    return (
        <nav className='navbar'>
            <ul id='navigation'>
                <li >
                    <a className='hover-underline-animation' href="#" onClick={handleAnchorElement}>Home</a>
                </li>
                <li >
                    <a className='hover-underline-animation' href="#" onClick={handleAnchorElement}>features</a>
                </li>
                <li >
                    <a className='hover-underline-animation' href="#" onClick={handleAnchorElement}>Pages</a>
                </li>
                <li >
                    <a className='hover-underline-animation' href="#" onClick={handleAnchorElement}>Screenshot</a>
                </li>
                <li >
                    <a className='hover-underline-animation' href="#" onClick={handleAnchorElement}>Pricing</a>
                </li>
                <li >
                    <a className='hover-underline-animation' href="#" onClick={handleAnchorElement}>Contact</a>
                </li>
            </ul>
            <div className="menu-icon" >
                <i
                    id='menuButton'
                    className="fa fa-bars fs-3"
                    onClick={handleNavbar}
                >
                </i>
            </div>
        </nav>
    )
}

export default Navbar
// import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../images/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

    return (
        <nav className='navbar navbar-expand-sm bg-body-tertiary sticky-top'>
            <div className='container-fluid'>
                <Link to='/' className='nav-link'>
                    <img src={logo}/>
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to="/#home-content" className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/#northeast" className='nav-link'>Northeast</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/#midwest" className='nav-link'>Midwest</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/#west" className='nav-link'>West</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/#southwest" className='nav-link'>Southwest</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/#southeast" className='nav-link'>Southeast</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

};

export default Navbar;
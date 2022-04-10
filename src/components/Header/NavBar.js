import 'bootstrap/dist/css/bootstrap.min.css';
import '../../componentsCSS/Header/NavBar.css';
import logoPrincipal from '../../image/iconoTienda.png';
import CartWidget from '../Header/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
             
            <ul className="nav justify-content-center"  id='navBar'>
                <Link to='/' id='logoNav' >
                    <a className="navbar-brand" href="#" >
                        <img src={logoPrincipal} alt="" width="80" height="80" /> Cavamito
                    </a>
                </Link>
                <Link to='/category/ESPAÑA' id='liEspaña'>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Hogar y Muebles</a>
                    </li>
                </Link>
                <Link to='/category/EUROPA' id='liEuropa'>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Electrodomésticos</a>
                    </li>
                </Link>
                <Link to='/category/ASIA' id='liAsia'>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Moda</a>
                    </li>
                </Link>
                <Link to='/category/MARRUECOS' id='liMarruecos'>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >Bebés</a>
                    </li>
                </Link>
                <Link to='/category/OTROS' id='liOtros'>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >Otros</a>
                    </li>
                </Link>
                 
                <Link to='/cart' id="btonLogin" >                
                    <CartWidget />
                </Link>
            </ul>
        </div>
    );
}

export default NavBar;
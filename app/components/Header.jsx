import { Link } from '@remix-run/react';

import Navegacion from './Navegacion';

import logo from '../../public/img/logo.svg';

const Header = () => {

    return (
        <header className="header">
            <div className="contenedor barra">
                <Link to='/'>
                    <img className='logo' src={logo} alt="logo imagen" />
                </Link>
                <Navegacion/>
            </div>
        </header>
    );
}

export default Header;

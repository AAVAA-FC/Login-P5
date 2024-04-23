import './Header.css';
import cart from '../../assets/shoppingcart.png';

function Header() {
    return(
        <header>
            <img src={cart} alt="Shopping cart"></img>
            <div className='header-text-wrap'>
                <p className='header-text'>CIENCIASMART</p>
            </div>
        </header>
    );
}

export default Header;
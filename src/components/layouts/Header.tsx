import { useContext } from 'react';
import CartCTX from '../../context/store/cart-context';
import c from './header.module.css';

interface HeaderProps {
    title: string;
}
 
const Header: React.FunctionComponent<HeaderProps> = (props) => {
    const cart = useContext(CartCTX);

    return (  
        <header className={c.header}>
            <div className={c.header__logo}>{props.title}</div>
            <div className={`${c.header__cart} ${c.cart}`}>
                <div className={c.cart__logo}>🛒</div>
                <div className={c.cart__title}>Your Cart</div>
                <div className={c.cart__state}>{cart?.count}</div>
            </div>
        </header>
    );
}
 
export default Header;
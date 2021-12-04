import { useContext } from 'react';
import CartCTX from '../../../context/store/cart-context';
import c from './header.module.css';

interface HeaderProps {
    title: string;
    toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}
 
const Header: React.FunctionComponent<HeaderProps> = (props) => {
    const cart = useContext(CartCTX);

    return (  
        <header className={c.header}>
            <div className={c.header__logo}>{props.title}</div>
            <button className={`${c.header__cart} ${c.cart}`} onClick={() => props.toggleModal(p => !p)}>
                <div className={c.cart__logo}>🛒</div>
                <div className={c.cart__title}>Your Cart</div>
                <div className={c.cart__state}>{cart?.count}</div>
            </button>
        </header>
    );
}
 
export default Header;
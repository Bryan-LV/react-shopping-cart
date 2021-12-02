import Header from './components/layouts/Header';
import Hero from './components/layouts/Hero';
import { Modal } from './components/layouts/modal/Modal';
import Meals from './components/meals/Meals';
import { CartContext } from './context/store/cart-context';
import ReactDOM from 'react-dom';

function App() {
  return (
    <CartContext>
      <div className="App">
        <Header title="ReactMeals" />
        <Hero />
        <Meals />
      </div>
      {ReactDOM.createPortal(<Modal/>, document.getElementById('modal-root') as HTMLDivElement)}
    </CartContext>
  );
}

export default App;

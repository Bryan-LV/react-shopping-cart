import ReactDOM from 'react-dom';
import { useState } from 'react';
import { CartContext } from './context/store/cart-context';

import Header from './components/layouts/header/Header';
import Hero from './components/layouts/hero/Hero';
import Meals from './components/meals/Meals';
import { Modal } from './components/layouts/modal/Modal';

import data from "./mealData";
import { Cart } from './components/cart/Cart';

function App() {
  const [modalState, setModalState] = useState(false);
  
  return (
    <CartContext>
      <div className="App">
        <Header title="ReactMeals" toggleModal={setModalState} />
        <Hero />
        <Meals meals={data} />
      </div>
      {ReactDOM.createPortal(<Modal modalState={modalState} toggleModal={setModalState}><Cart/></Modal>, document.getElementById('modal-root') as HTMLDivElement)}
    </CartContext>
  );
}

export default App;

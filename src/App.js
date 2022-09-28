import logo from './logo.svg';
import './App.css';
import Club from './components/Club/Club';
import Activity from './components/Activity/Activity';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const handelAddToList = (selectSport) => {
    let newCart = [...cart, selectSport];
    setCart(newCart)
  }
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 '>
      <div className='lg:col-span-4 bg-slate-300'>
        <Club handelAddToList={handelAddToList}
        ></Club>
      </div>
      <div>
        <Activity
          cart={cart}
        ></Activity>
      </div>
    </div>
  );
}

export default App;

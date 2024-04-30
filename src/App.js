import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import FormAddMoney from './components/FormAddMoney';
import { useState } from 'react';
import MainControl from './components/MainControl';

function App() {
  const [count,SetCount] = useState(0);
  const [isValid, SetIsValid] = useState(false);

  const component = isValid
   ? <MainControl count={count}/> 
   : <FormAddMoney SetCount={SetCount} SetIsValid={SetIsValid}/>

  return (
    <div className="App">
      <Header/>
      { component }      
    </div>
  )
}

export default App;

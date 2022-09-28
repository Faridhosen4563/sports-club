import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import Select from './components/Select/Select';

function App() {
  return (
    <div className='grid grid-cols-5 gap-4'>
      <div className='col-span-4'>
        <Main></Main>
      </div>
      <div>
        <Select></Select>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Club from './components/Club/Club';
import Activity from './components/Activity/Activity';

function App() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 '>
      <div className='lg:col-span-4 bg-slate-300'>
        <Club></Club>
      </div>
      <div>
        <Activity></Activity>
      </div>
    </div>
  );
}

export default App;

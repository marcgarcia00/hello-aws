import './App.css';
import Login from './components/login/login';

function App() {
  return (
    <div className="App flex flex-col items-center justify-center">
      <div className="flex flex-col w-full bg-blue-500 p-2 mb-5">
        <h3 className='text-left text-3xl text-white font-bold'>PLANNING POKER</h3>
      </div>
      <div className="flex flex-col"><Login/></div>
    </div>
  );
}

export default App;

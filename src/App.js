import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='flex'>

    <NavigationBar/>
    {/* {Main Comonent} */}
    <main className='grow m-3'>
      <Dashboard/>
    </main>
    </div>
  );
}

export default App;

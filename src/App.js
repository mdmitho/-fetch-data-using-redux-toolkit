import logo from './logo.svg';
import './App.css';
import Index from './routes/Index';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';



function App() {
  return (
    <div className="App">
      <h1 className='m-5'>My New React Redux App</h1>

      <Navbar></Navbar>
      <Index />
      <Footer/>
    </div>
  );
}

export default App;

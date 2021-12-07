import logo from './images/purcellcomm_logo.png';
import './App.css';
import Welcome from './components/Welcome'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App ">
      <header className="App-header p-8 sm:p-12 max-h-20">
        <img src={logo} className="App-logo max-h-21" alt="Purcell Communications Logo" />
      </header>

      <Welcome />
      <Footer />
      
    </div>
  );
}

export default App;

import logo from './images/purcellcomm_logo.png';
import './App.css';
import Welcome from './components/Welcome'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo min-h-25" alt="Purcell Communications Logo" />
      </header>

      <Welcome />
      <Footer />
      
    </div>
  );
}

export default App;

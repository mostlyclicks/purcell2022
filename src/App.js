import logo from './images/purcellcomm_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Purcell Communications Logo" className=" min-h-25" />
        <h2>Website coming soon!</h2>
        <p>
          <strong>Ruth Purcell</strong><br/>
          <a href="mailto:ruthpurcell@tds.net">ruthpurcell@tds.net</a><br/>
          5602 Barton Road<br/>
          Madison, WI 53711
        </p>

        <p>Phone: <a href="tel:+16094425721">609.442.5721</a></p>
        <small>Copyright © 2021 Ruth Purcell Communications</small>
        
      </header>
    </div>
  );
}

export default App;

import Header from './Components/Header';
import Nav from './Components/Nav';
import Grayscale from './Components/Grayscale';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Nav />
      </div>
      <div>
        <Grayscale />
      </div>
    </div>
  );
  
}

export default App;
 
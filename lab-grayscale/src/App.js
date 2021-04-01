import Header from './Components/Header';
import Nav from './Components/Nav';
import Grayscale from './Components/Grayscale';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <div className="top">
        <Header />
        <Nav />
        </div>
        <Grayscale />
      </div>
    </div>
  );
  
}

export default App;
 
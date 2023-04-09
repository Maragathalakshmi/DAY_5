import './App.css';
import Day5 from './Day5';
import Errorboundary from './Errorboundary';
function App() {
  return (
    <div className="App" >
      <h1>MY FAVOURITES</h1>
      <Errorboundary>
        <Day5 a={["Chocalate", "Icecream", "Fruits", "Cookies"]} />
      </Errorboundary>
    </div>
  );
}

export default App

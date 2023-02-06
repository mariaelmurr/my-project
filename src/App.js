import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Coffees from './components/Coffees'
import data from "./data"

function App() {
  const coffees=data.map(coffee=>{
    return(
        <Coffees
            coffee={coffee}
        />
    )
})
  return (
    <div>
      <Navbar />
      {coffees}
    </div>
  );
}

export default App;

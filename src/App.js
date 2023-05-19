import Home from './companents/home'
import {Router, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes path="/" element={ <Home/>} />
      </Router>
    
    </div>
  );
}

export default App;

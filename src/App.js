import Sentimain from './components/Sentimain';
import Navbar from './components/Navbar';
import './App.css';
import Guide from './components/Guide';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
      <Navbar />
        <div>
          <Routes>
            <Route path="/guide" element={<Guide/>} />
            <Route path="/" element={<Sentimain/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

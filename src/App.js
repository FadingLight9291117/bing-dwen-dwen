import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
/*import Home from './containers/Home/index';
import City from './containers/City/index';
import Earth from './containers/Earth/index';
import Demo from './containers/Demo/index';
import Lunar from './containers/Lunar/index';
import Cell from './containers/Cell/index';
import Car from './containers/Car/index';
import Zelda from './containers/Zelda/index';
import Metaverse from './containers/Metaverse/index';
import SegmentFault from './containers/SegmentFault/index';
import Diamond from './containers/Diamond/index';
import Human from './containers/Human/index';*/
import Olympic from './containers/Olympic/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={ <Olympic /> } path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

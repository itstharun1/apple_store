import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Collections from './components/Collections';
import Size from './components/Size';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/size" element={<Size />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

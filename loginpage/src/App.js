import { Loginpagecell ,Sign} from './components';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Mainpage from './components/Mainpage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpagecell/>}/>
        <Route path="/mainpage" element={<Mainpage/>}/>
        <Route path="/sign" element={<Sign/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Params from './components/Params';

function App() {
  return (
<BrowserRouter>
    <div className="App">
      <h1>Routing in React</h1>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/:word' element={<Params/>}/>
      <Route path='/:word/:color/:background' element={<Params/>}/>
    </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;

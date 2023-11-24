
import Register from './Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sign from './Sign';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<Sign/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About'
import SpecificCategory from './components/Specific_category_food/SpecificCategory';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/specific_category/:category' element={<SpecificCategory></SpecificCategory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}
export default App;

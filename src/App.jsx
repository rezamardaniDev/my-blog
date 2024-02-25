import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import SinglePost from './Pages/SinglePost';
import FilterdPosts from './Pages/FilterdPosts';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/post/:postId' element={<SinglePost/>}/> 
      <Route path='/filterdposts/:tag' element={<FilterdPosts/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

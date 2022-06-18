import React from 'react';
import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Post from './Components/Post'
import SinglePost from './Components/SinglePost'
import Projects from './Components/Projects'
function App() {
  return (
   <BrowserRouter>
    <Routes>

    <Route path='/' exact element = {<Home/>} />
    <Route path='/about' element = {<About/>} />
    <Route path='/post' element = {<Post/>} />
    <Route path='/post/:slug' element = {<SinglePost/>} />
    <Route path='/projects' element = {<Projects/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;

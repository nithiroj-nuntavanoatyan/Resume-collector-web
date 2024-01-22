import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Resume from './pages/Resume'
import Search from './pages/Search'
import Favorites from './pages/Favorites'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Resume' element={<Resume/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/Favorites' element={<Favorites/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App

import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Resume from './pages/Resume'
import Search from './pages/Search'
import Favorites from './pages/Favorites'
import Account from './pages/Account'
import Home from './pages/Home'
import Footer from './components/Footer'
import Job from './pages/๋Job'
import Searchbar from './components/Searchbar'


//this is where most our pages and component went  we use app to render in main.jsx
function App() {
  return (
    <div className='Mainpage flex flex-col h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to= "/Home" />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Resume/:Jobtitle' element={<Job />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Search/Searchbar' element={<Searchbar />} />
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Account' element={<Account />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

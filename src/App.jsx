
import './App.css'
import Detailpage from './pages/Detailpage'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomeAlt from './pages/HomeAlt'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:title/:language" element={<HomeAlt/>}/>
        <Route path="/detailpage/:title/:language/:index" element={<Detailpage/>}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App

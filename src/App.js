import axios from "axios"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/DefaultPage/Navbar/Navbar"
import Sports from "./Components/Pages/Sports/Sports"
import Kids from "./Components/Pages/Kids/Kids"
import Movies from "./Components/Pages/Movies/Movies"
import Home from "./Components/Pages/Home/Home"
import DisneyPlus from "./Components/Pages/Disney/DisneyPlus"
import Tv from "./Components/Pages/TV/tv"
import Login from "./Components/Pages/Login/Login"
import Footer from "./Components/Pages/Footer/Footer"

axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {}
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="tv" element={<Tv />} />
          <Route path="movies" element={<Movies />} />
          <Route path="sports" element={<Sports />} />
          <Route path="disney" element={<DisneyPlus />} />
          <Route path="kids" element={<Kids />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App

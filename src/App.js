import Navbar from "./Navbar"
import Home from "./pages/Home"
import Clicker from "./pages/Clicker"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clicker" element={<Clicker />} />
        </Routes>
      </div>
    </>
  )
}

export default App

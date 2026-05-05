import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import ZingFashion from './pages/ZingFashion'
import Test from './pages/Test'
import WatchLive from './pages/LiveWatch'
import ScrollToTop from './components/ScrollToTop'
function App() {

  return (
    <>
      <ScrollToTop/>
      <Navbar />
      <div className="flex flex-col items-center justify-start min-h-screen w-auto overflow-x-hidden" data-theme="acid">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/zing-fashion" element={<ZingFashion />} />
          <Route path="/test" element={<Test/>}/>
          <Route path="/live-watch-party" element={<WatchLive/>}/>
        </Routes>

        <Footer />

      </div>

    </>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import Footer from './components/Footer'
function App() {

  return (
    <>
    <Navbar/>

<div className="flex flex-col items-center justify-start min-h-screen w-auto overflow-x-hidden" data-theme="acid">
        <Routes>
        
      <Route path="/" element={
             <Home/>
          
           
          
      }/>
        
      </Routes>
      
      <Footer/>

    </div>
    
    </>
  )
}

export default App

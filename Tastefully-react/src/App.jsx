

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Detail from './Components/Detail'
import PreviousPage from './Components/PreviousPage'

function App() {


  return (

    <>

      


      <BrowserRouter>
        



        <Routes>
          <Route path='/' element={<PreviousPage/>}/>
          <Route path="/details" element={<Detail />} />
        </Routes>

      </BrowserRouter>

    </>



  )
}

export default App

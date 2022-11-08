import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EditorContent from './components/editor/EditorContent'
import HomeContent from './components/home/HomeContent'

const Routers = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeContent/>}/>
            <Route path='/editor' element={<EditorContent/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routers
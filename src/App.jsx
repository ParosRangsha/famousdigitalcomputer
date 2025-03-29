import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Report from './pages/Report'
import Post from './pages/Post'
import About from './pages/About'
import Errorpage from './pages/Errorpage'
function App() {
  let multipage = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/report' element={<Report/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Errorpage/>}/>

    </Route>
  ))

  return (
    <>
      <RouterProvider router={multipage}/>
    </>
  )
}

export default App

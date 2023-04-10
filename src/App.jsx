import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header'

function App() {
  
  return (
    <div className=' bg-slate-50'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App

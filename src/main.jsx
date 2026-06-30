import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SideBar from './SideBar'
import Hero from './Hero'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='w-screen bg-neutral-100'>
      <SideBar></SideBar>
      <Hero></Hero>
    </div>
  </StrictMode>,
)

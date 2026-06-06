import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function AppLayout() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#1b1464' }}>
      <Navbar />
      <Outlet />
    </div>
  )
}

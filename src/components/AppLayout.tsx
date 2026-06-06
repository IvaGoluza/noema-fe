import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function AppLayout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ fontFamily: 'Inter, sans-serif', color: '#1b1464' }}>
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

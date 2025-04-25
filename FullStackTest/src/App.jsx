import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignupPage from './components/Signup'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <div>
    {isSidebarVisible&&<Sidebar/>}
    <Routes>
      <Route path="/" element={<Home toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible}/>} />
      <Route path ='/login' element={<LoginPage />} />
      <Route path ='/signup' element = {<SignupPage/>}/>
    </Routes>
    </div>

  )
}

export default App

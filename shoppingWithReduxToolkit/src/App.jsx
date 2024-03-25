import { Navigate, Route, Routes } from "react-router-dom"
import DashBoard from "./components/MainContentComponents/DashBoard"
import './App.css'

function App() {
  return<>
        <Routes>
          <Route path="/*" element={<DashBoard></DashBoard>}></Route>
          <Route path="/" element={<Navigate to='/admin'/>}></Route>
        </Routes>
    </>
}

export default App

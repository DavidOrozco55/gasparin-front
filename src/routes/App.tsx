import { Component, FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/pages/login'

const App: FC = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
)

export default App

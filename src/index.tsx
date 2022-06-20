import * as ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/pages/login'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)

import { useEffect } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const App: FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const loginData = localStorage.getItem('loginInfo')
    console.log(loginData)
    if (!loginData) {
      console.log('no data')
      navigate('login')
    }
  }, [])
  return (
    <div>
      Inicio
    </div>
  )
}

export default App

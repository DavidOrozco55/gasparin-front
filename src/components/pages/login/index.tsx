import { useEffect } from "react";
import { FC, Fragment } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoginForm from "../../organisms/LoginForm";
import TopBar from "../../organisms/TopBar/topBar";

const Login: FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const loginInfo = localStorage.getItem('loginInfo')
    if (loginInfo) {
      navigate('/')
    }
  })
  return (
    <Fragment>
      <LoginForm></LoginForm>
    </Fragment>
  )
}

export default Login

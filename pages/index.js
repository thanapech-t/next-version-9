import React from 'react'
import Login from '../components/Login'
import styled from 'styled-components'
import Landing from '../components/Landing'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Auth = props =>
  console.log(props.isLogin) || (
    <Container>{props.isLogin ? <Landing /> : <Login />}</Container>
  )

export default Auth

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import Layout from './layouts/main'
import { Input } from 'antd'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #e3e3e3;
`
const TextBox = styled(Input.TextArea)``

const ContainerBox = styled.div`
  width: 500px;
  height: 150px;
  background-color: white;
  border-radius: 5px;
`

const AvatarImg = styled.img`
  width: 50px;
  border-radius: 50%;
`

const Landing = ({ user }) => (
  <Container>
    <ContainerBox>
      <AvatarImg src={user.avatar} />
    </ContainerBox>
  </Container>
)

const enhancer = compose(
  connect(
    state => ({
      user: state.auth.user,
    }),
    {},
  ),
)

export default Layout(enhancer(Landing))

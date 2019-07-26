import React from 'React'
import styled from 'styled-components'
import { logout } from '../../ducks/auth'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import Button from '../share/Button'
import TwittyBird from '../../static/images/Twitter_bird_white.png'

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const Header = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(to bottom, #1c92d2, #f2fcfe);
`

const CustomButton = styled(Button)`
  color: black;
  margin: 0 10px;
  background: linear-gradient(to bottom, #1c92d2, #f2fcfe);
  :hover {
    background: linear-gradient(to top, #43c6ac, #f8ffae);
  }
`
const Twittee = styled.img`
  transform: rotate3d(1, 1, 1, 45deg);
  width: 55px;
  margin: 0 15px;
  filter: blur(0.5px);
`
const ContainerUser = styled.div``

const AvatarImg = styled.img`
  width: 50px;
  border-radius: 50%;
`

const enhancer = compose(
  connect(
    state => ({
      user: state.auth.user,
    }),
    { logout },
  ),
)

const HeaderComponents = enhancer(({ user, logout }) => {
  return (
    <Header>
      <Twittee src={TwittyBird} />
      <ContainerUser>
        <AvatarImg src={user.avatar} />
        <CustomButton type="primary" onClick={() => logout()}>
          Log out
        </CustomButton>
      </ContainerUser>
    </Header>
  )
})

const Layout = WrappedComponent => () => (
  <Container>
    <HeaderComponents />
    <WrappedComponent />
  </Container>
)

export default Layout

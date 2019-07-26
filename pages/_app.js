import App, { Container } from 'next/app'
import React, { useEffect } from 'react'
import { Provider, connect } from 'react-redux'
import store from '../ducks/'
import { GlobalStyle } from '../style'
import { compose, lifecycle } from 'recompose'
import { getUserInfo } from '../ducks/auth'
import styled from 'styled-components'

const bodyEnhancer = compose(
  connect(
    state => {
      return {
        isLogin: state.auth.isLogin,
      }
    },
    { getUserInfo },
  ),
)

const Body = bodyEnhancer(({ Component, getUserInfo, ...OtherProps }) => {
  useEffect(() => {
    getUserInfo()
  }, [])
  return <Component {...OtherProps} />
})

class MyApp extends App {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Provider store={store}>
            <GlobalStyle />
            <Body {...this.props} />
          </Provider>
        </Container>
      </React.Fragment>
    )
  }
}

export default MyApp

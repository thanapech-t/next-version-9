import App, { Container } from 'next/app'
import React from 'react'
// import withReduxStore from '../libs/with-redux-store'
import { Provider, connect } from 'react-redux'
import store from '../ducks/'
import { GlobalStyle } from '../style'
import { compose, lifecycle } from 'recompose'

const bodyEnhancer = compose(
  connect(
    state => {
      return {}
    },
    {},
  ),
  lifecycle({
    componentDidMount() {},
  }),
)

const Body = bodyEnhancer(({ Component, ...OtherProps }) => {
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

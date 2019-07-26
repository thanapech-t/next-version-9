import React from 'react'
import styled from 'styled-components'
import Field from './share/Field'
import Loading from './share/Loading'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { compose } from 'recompose'
import { login, setDataUser } from '../ducks/auth'
import { Button, Icon } from 'antd'
import { isEmail } from '../core/helper'
import TwittyBird from '../static/images/Twitter_bird.png'

const Container = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to top, #1c92d2, #f2fcfe);
`
const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 400px;
`

const CustomField = styled(Field)`
  margin: 0 auto 30px;
  width: 100%;
  max-width: 300px;
`

const Submit = styled(Button)`
  width: fit-content;
  margin: 0 auto;
`

const Error = styled.span`
  color: red;
  margin-bottom: 20px;
`

const Twittee = styled.img`
  transform: rotate3d(1, 1, 1, 45deg);
  width: 55px;
  margin-right: 15px;
`

const HeaderTopic = styled.div`
  margin-bottom: 30px;
`

const Header = styled.span`
  font-size: 20px;
  font-weight: bold;
`

const validate = value => {
  const error = {}
  if (!value.email) {
    error.email = 'please fill email '
  } else if (!isEmail(value.email)) {
    error.email = 'email is incorrect pattern'
  }
  if (!value.password) {
    error.password = 'please fill password'
  }

  return error
}

const Login = ({ isLoading, login, handleSubmit, errorMessage, ...props }) => (
  <Loading isLoading={isLoading}>
    <Container onSubmit={handleSubmit(values => login(values))}>
      <Form>
        <HeaderTopic>
          <Twittee src={TwittyBird} />
          <Header>TWITTEE</Header>
        </HeaderTopic>
        <CustomField
          name="email"
          type="text"
          placeholder="email"
          addonBefore={<Icon type="user" />}
        />
        <CustomField
          name="password"
          type="password"
          placeholder="password"
          addonBefore={<Icon type="lock" />}
        />
        {errorMessage && <Error>{errorMessage}</Error>}
        <Submit type="primary" htmlType="submit">
          Submit
        </Submit>
      </Form>
    </Container>
  </Loading>
)

const enhancer = compose(
  connect(
    state => ({
      isLoading: state.auth.isLoading,
      errorMessage: state.auth.errorMessage,
    }),
    { login, setDataUser },
  ),
  reduxForm({
    form: 'login',
    validate,
    onChange: (values, _, props) => {
      props.errorMessage !== '' && props.setDataUser({ errorMessage: '' })
    },
  }),
)

export default enhancer(Login)

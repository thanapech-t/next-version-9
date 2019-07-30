import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
import { compose } from 'recompose'
import Layout from './layouts/main'
import Button from '../components/share/Button'
import Field from './share/Field'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #e3e3e3;
`

const TextArea = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  overflow-y: scroll;
`

const ContainerBox = styled.div`
  display: flex;
  padding: 40px;
  background-color: white;
  border-radius: 5px;
`

const AvatarImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`

const ContainerTweetBox = styled.div`
  display: flex;
  flex-direction: column;
`

const TweetButton = styled(Button)`
  margin: 0;
`

const ProgressTweet = styled.div`
  height: 5px;
  max-width: 100px;
  width: ${props => props.tweet.length / 3}%;
  background: ${props => (props.tweet.length / 3 <= 100 ? 'blue' : 'red')};
`

const ContainerButtonTweet = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const TweetMaxLength = styled.span``

const ContainerMaxlength = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`

const Landing = ({ user }) => {
  const [tweet, setTweet] = useState('')
  const [overtext, setOvertext] = useState('')

  useEffect(() => {
    let inputText = document.getElementById('textarea')
    let innerHTML = inputText.innerHTML
    if (tweet.length > 10) {
      innerHTML =
        tweet.substr(0, 10) +
        '<span style=color:white;background-color:red>' +
        'AAA' +
        '</span>'
      inputText.innerHTML = innerHTML
    }
  }, [tweet])

  return (
    <Container>
      <ContainerBox>
        <AvatarImg src={user.avatar} />
        <ContainerTweetBox>
          <TextArea
            contentEditable
            id="textarea"
            onInput={() =>
              setTweet(document.getElementById('textarea').innerHTML)
            }
          />
          <ContainerButtonTweet>
            <ContainerMaxlength>
              <ProgressTweet tweet={tweet} />
              <TweetMaxLength>{tweet.length} / 300</TweetMaxLength>
            </ContainerMaxlength>
            <TweetButton disabled={tweet.length === 0 || tweet.length > 300}>
              Tweet
            </TweetButton>
          </ContainerButtonTweet>
        </ContainerTweetBox>
      </ContainerBox>
    </Container>
  )
}
const selector = formValueSelector('Tweet')

const enhancer = compose(
  connect(
    state => ({
      user: state.auth.user,
    }),
    {},
  ),
)

export default Layout(enhancer(Landing))

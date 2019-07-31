import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
import { compose } from 'recompose'
import Layout from './layouts/main'
import Button from '../components/share/Button'
import { getTweetInfo, postTweet, deleteTweet } from '../ducks/landing'
import Loading from '../components/share/Loading'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  padding: 20px;
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
  width: ${props => props.tweet.length}%;
  background: ${props =>
    props.tweet.length <= 100 && props.overtext.length === 0 ? 'blue' : 'red'};
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

const ContainerTweetBoxNew = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  word-wrap: break-word;
  :hover {
    cursor: pointer;
    background-color: red;
  }
`

const Text = styled.span`
  width: 250px;
  margin-top: 10px;
`

const TweetsAvatarImg = styled(AvatarImg)`
  margin: 0;
`

const TweetBox = ({ name, surname, avatar, tweet, deleteTweet, id }) => (
  <ContainerTweetBoxNew onClick={() => deleteTweet(id)}>
    <TweetsAvatarImg src={avatar} />
    <Text>{tweet}</Text>
    <Text>
      เขียนโดย {name} {surname}
    </Text>
  </ContainerTweetBoxNew>
)

const Landing = ({
  user,
  getTweetInfo,
  postTweet,
  deleteTweet,
  tweets,
  isLoading,
}) => {
  const [tweet, setTweet] = useState('')
  const [overtext, setOvertext] = useState('')

  useEffect(() => getTweetInfo(), [])
  useEffect(() => {
    let inputText = document.getElementById('textarea')
    let innerHTML = inputText.innerHTML

    if (overtext) {
      innerHTML =
        tweet +
        '<span style=color:white;background-color:red>' +
        overtext +
        '</span>'
      inputText.innerHTML = innerHTML
      inputText.focus()
      document.execCommand('selectAll', false, null)
      document.getSelection().collapseToEnd()
    }
  }, [tweet, overtext])

  return (
    <Loading isLoading={isLoading}>
      <Container>
        <ContainerBox>
          <AvatarImg src={user.avatar} />
          <ContainerTweetBox>
            <TextArea
              contentEditable
              id="textarea"
              onInput={() => {
                let text = document.getElementById('textarea').innerText
                if (text.length > 100) {
                  setOvertext(text.substr(100, text.length).trim())
                } else {
                  setOvertext('')
                  setTweet(text.substr(0, 100).trim())
                }
              }}
            />
            <ContainerButtonTweet>
              <ContainerMaxlength>
                <ProgressTweet tweet={tweet} overtext={overtext} />
                <TweetMaxLength>
                  {tweet.length + overtext.length} / 100
                </TweetMaxLength>
              </ContainerMaxlength>
              <TweetButton
                disabled={tweet.length === 0 || overtext.length > 0}
                onClick={() => {
                  postTweet({ ...user, tweet: tweet }, setTweet)
                }}>
                Tweet
              </TweetButton>
            </ContainerButtonTweet>
          </ContainerTweetBox>
        </ContainerBox>
        {tweets &&
          tweets.map(val => (
            <TweetBox key={val.id} {...val} deleteTweet={deleteTweet} />
          ))}
      </Container>
    </Loading>
  )
}

const enhancer = compose(
  connect(
    state => ({
      user: state.auth.user,
      tweets: state.landing.tweets,
      isLoading: state.landing.isLoading,
    }),
    { getTweetInfo, postTweet, deleteTweet },
  ),
)

export default Layout(enhancer(Landing))

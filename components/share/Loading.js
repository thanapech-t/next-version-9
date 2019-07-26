import React from 'react'
import styled from 'styled-components'
import LoadingAnimation from '../../static/images/loading.gif'

const Container = styled.div`
  position: relative;
`

const ContainerLoading = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(255, 255, 255, 0.8);
`
const LoadingGif = styled.img``

const Loading = ({ children, isLoading }) => (
  <Container>
    {isLoading && (
      <ContainerLoading>
        <LoadingGif src={LoadingAnimation} />
      </ContainerLoading>
    )}
    {children}
  </Container>
)

export default Loading

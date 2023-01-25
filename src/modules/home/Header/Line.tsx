import styled from '@emotion/styled'
import React from 'react'

const Line = () => {
  return (
    <Container>
      <LineBlue />
      <LineRed />
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 0px;
  display:flex;
`
const LineBlue = styled.div`
  background: #49E2FF;
  width: 50%;
  height: 18px;
`
const LineRed = styled.div`
  background: #F37368;
  width: 50%;
  height: 18px; 
`

export default Line
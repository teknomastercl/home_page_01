import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import ContainerInfo from './ContainerInfo/ContainerInfo'

const Contact = () => {
  return (
    <Container>
      <Grid container justifyContent='center'>
        <Grid item xs={12}  container justifyContent='center'>
            <ContainerInfo />
        </Grid>
        {/* <Grid item xs={8} container justifyContent="center">
           <ContactForm />
        </Grid> */}
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  padding-left: 57px;
  padding-right: 57px;
  padding-top: 58px;
  max-width: 1325px;
  margin: auto;
  @media (max-width: 1300px) {
        height: inherit;
        padding-top: 0px;
        padding-left: 0px;
        padding-right: 0px;
        &  div {
          border-radius: 0px;
        }
  }
`
export default Contact
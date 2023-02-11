import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import ContactForm from './ContactForm/ContactForm'
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
`
export default Contact
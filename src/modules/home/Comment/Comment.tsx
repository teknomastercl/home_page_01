import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const Comment = () => {
  return (
    <Backgroud>
      <Container>
        <Grid container>
          <Grid item xs={4} container justifyContent="center" alignItems="center">
            <Image src={require('@/assets/img/google.png')} />
          </Grid>
          <Grid item xs={8} container justifyContent="center">
            <ContainerDesc>
              <Typography variant="h4" color="white"><b>Opiniones de clientes</b></Typography>
            </ContainerDesc>
          </Grid>
        </Grid>
      </Container>
    </Backgroud>
  )
}

const Backgroud = styled.div`
  background: #434350;
`

const Container = styled.div`
  height: 347px;
  padding-left: 57px;
  background: #434350;
  max-width: 1325px;
  margin: auto;
`
const ContainerDesc = styled.div`
    padding-top: 41px;
`
const Image = styled.img`
    padding-top: 93px;
    width: 212px;
    height: 145px
`
const CRed = styled.span`
    color: #F37368;
`

export default Comment
import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const BackendPage = () => {
  return (
    <Container>
      <Grid container spacing={10}>
        <Grid item xs={6} container justifyContent="center" alignItems="center">
          <Image src={require('@/assets/img/services/backend.png')} />
        </Grid>
        <Grid item xs={6} container justifyContent="center" alignItems="center">
          <div>
            <Typography variant="h4" color="white">
              Ofrecemos soluciones personalizadas para la arquitectura de tu negocio
            </Typography>
            <Typography variant="h5" color="white" className={css`padding-top:20px; padding-bottom: 30px;`}>
              Con profesionales especializados en bases de datos, creación de API REST y todo lo relacionado con el BACK-END.
            </Typography>
            <a href='/contact'>
              <Button variant="contained" className={buttonContact}>Cotizar proyecto de Backend</Button>
            </a>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1144px;
  margin:auto;
`
const Image = styled.img`
    width: 602px;
    height: 499px;
`
const buttonContact = css`
  background-color: #88889E !important;
`

export default BackendPage
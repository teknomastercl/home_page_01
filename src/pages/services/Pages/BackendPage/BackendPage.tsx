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
                Desarrollamos la arquitectura de tu negocio
            </Typography>
            <Typography variant="h5" color="white" className={css`padding-top:20px; padding-bottom: 30px;`}>
            Contamos con profesionales eficientes para darte las mejores soluciones sobre Bases de datos, Creacion de API REST y Todo lo que tenga que ver con Back-end
            </Typography>
            <Button variant="contained" className={buttonContact}>Cotizar proyecto de Backend</Button>
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
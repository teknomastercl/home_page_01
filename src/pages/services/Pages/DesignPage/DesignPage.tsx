import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const DesignPage = () => {
  return (
    <Container>
      <Grid container spacing={10}>
        <Grid item xs={6} container justifyContent="center" alignItems="center">
          <Image src={require('@/assets/img/services/design.png')} />
        </Grid>
        <Grid item xs={6} container justifyContent="center" alignItems="center">
          <div>
            <Typography variant="h4" color="white">
              Brindamos soluciones eficaces para mejorar tu presencia en línea
            </Typography>
            <Typography variant="h5" color="white" className={css`padding-top:20px; padding-bottom: 30px;`}>
              Diseñamos la identidad visual de tu marca desde cero, desde el logotipo hasta la imagen completa, que cautivará a tus clientes y los diferenciará de la competencia.
            </Typography>
            <a href='/contact'>
              <Button variant="contained" className={buttonContact}>COTIZAR UN PROYECTO</Button>
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
    width: 538px;
    height: 592px;
`
const buttonContact = css`
  background-color: #88889E !important;
`

export default DesignPage
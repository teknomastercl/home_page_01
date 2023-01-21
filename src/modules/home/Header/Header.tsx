import { css } from '@emotion/css'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Logo } from './Header.style'
import Menu from './Menu/Menu'
import styled from "@emotion/styled";

const Header = () => {
  return (
    <div className={container}>
      <Line />
      <Grid container>
        <Grid item xs={3}>
          <Logo src={require('@/assets/img/logo_white.png')} />
        </Grid>
        <Grid item xs={9} container justifyContent="flex-end">
          <Menu />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <div className={css`margin-top: 111px`}>
            <Typography variant='h2' color='white' className={pBottom25}>
              <b>
                ¿Ya tienes tu <Ccyan>sitio web</Ccyan>{' '}
                o <Ccyan>aplicación mobile</Ccyan>?
              </b>
            </Typography>
            <Typography variant='h5' color='white' className={pBottom25}>
              Contamos con profesionales de alta gamma para lograr resultados innovadores
            </Typography>
            <Button className={btnInvite} variant="contained">Necesito aumentar mis ventas</Button>
          </div>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <div className={dataContainer}>
            <Grid container justifyContent='flex-end' spacing={6}>
              <Grid item xs={12} container flexDirection="column" justifyContent='center' alignItems="center">
                <Typography color="white" variant="h3"><b>+6</b></Typography>
                <Typography color="white" variant="body1"><b>Años de experiencia</b></Typography>
              </Grid>
              <Grid item xs={12}  container flexDirection="column" justifyContent='center' alignItems="center">
                <Typography color="white" variant="h3"><b>+33</b></Typography>
                <Typography color="white" variant="body1"><b>Proyectos terminados con éxito</b></Typography>
              </Grid>
              <Grid item xs={12}  container flexDirection="column" justifyContent='center' alignItems="center">
                <Typography color="white" variant="h3"><b>start</b></Typography>
                <Typography color="white" variant="body1"><b>Premios Mejor página</b></Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

const Line = () => {{
  return(
    <div className={css`
      position: absolute;
      width: 100%;
      bottom: 0px;
      left: 0px;
      display:flex;
    `}>
      <div className={css`
        background: #49E2FF;
        width: 50%;
        height: 18px;
      `}></div>
      <div className={css`
        background: #F37368;
        width: 50%;
        height: 18px;
      `}></div>
    </div>
  )
}}

const Ccyan = styled.span`
  color: #49E2FF;
`

const container = css`
  padding-top: 58px;
  padding-left: 58px;
  padding-right: 58px;
`

const btnInvite = css`
  background: #F37368 !important;
`
const pBottom25 = css`
  padding-bottom: 25px;
`
const dataContainer = css`
  width: 300px;
  padding-top: 120px;
`

export default Header
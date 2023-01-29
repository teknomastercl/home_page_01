import { css } from '@emotion/css'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Logo } from './Header.style'
import Menu from './Menu/Menu'
import styled from "@emotion/styled";
import Line from './Line'
// import Game from './Game/Game'
import Awards from './Awards/Awards'

const Header = () => {
  return (
    <>
      <Line />
      <div className={container}>
        {/* <Game /> */}
        <Grid container>
          <Grid item xs={3}>
            <a href='/'>
              <Logo src={require('@/assets/img/logo_white.png')} />
            </a>
          </Grid>
          <Grid item xs={9} container justifyContent="flex-end">
            <Menu />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <div className={containerTitle}>
              <Typography variant='h2' color='white' className={pBottom25}>
                <b>
                  ¿Ya tienes tu <Ccyan>sitio web</Ccyan>{' '}
                  o <Ccyan>aplicación mobile</Ccyan>?
                </b>
              </Typography>
              <Typography variant='h5' color='white' className={pBottom25}>
                Contamos con profesionales de alta gamma para lograr resultados innovadores
              </Typography>
              <a href="/contact">
              <Button className={btnInvite} variant="contained">Necesito aumentar mis ventas</Button>
              </a>
            </div>
          </Grid>
          <Grid item xs={6} container justifyContent="flex-end">
            <div className={dataContainer}>
              <Awards />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

const Ccyan = styled.span`
  color: #49E2FF;
`

const container = css`
  padding-top: 58px;
  padding-left: 58px;
  padding-right: 58px;
  max-width: 1325px;
  margin:auto;
  position:relative;
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
const containerTitle = css`margin-top: 111px`

export default Header
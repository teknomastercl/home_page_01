import { css } from '@emotion/css'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Logo } from './Header.style'
import Menu from './Menu/Menu'
import styled from "@emotion/styled";
import Line from './Line'
import Game from './Game/Game'
import Awards from './Awards/Awards'

const Header = () => {
  return (
    <>
      <Line />
      <div className={container}>
        <Grid container>
          <Grid item xs={3}>
            <a href='/'>
              <Logo src={require('@/assets/img/logo_white.png')} />
            </a>
          </Grid>
          <Grid item xs={9} container justifyContent="flex-end">
            {/* <OnlyMobileHide> */}
              <Menu />
            {/* </OnlyMobileHide> */}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <div className={containerTitle}>
              <Typography variant='h4' color='white' className={pBottom25}>
                <b>
                  ¿Quieres quedarte en el pasado mientras tus competidores saltan al <Ccyan>futuro digital</Ccyan>?
                </b>
              </Typography>
              <Typography variant='h5' color='white' className={pBottom25}>
                ¡Es hora de tener una página web o app móvil para tu empresa!
              </Typography>
              <a href="/contact">
                <Button className={btnInvite} variant="contained"><b>Cotización rápida y sencilla</b></Button>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} lg={6} container justifyContent="flex-end" className={justifyMobile}>
            <OnlyMobileHide>
              <div className={dataContainer}>
                <Awards />
              </div>
            </OnlyMobileHide>
            <OnlyMobile>
              <Awards horizontal />
            </OnlyMobile>
          </Grid>
        </Grid>
        <OnlyMobileHide>
          <Game />
        </OnlyMobileHide>
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
const containerTitle = css`
  margin-top: 111px;
  z-index: 10000;
  position: relative;
`
const justifyMobile = css`
  @media (max-width: 1300px) {
    justify-content: center !important;
    align-items: center !important;
    height: 240px;
  }
`
const OnlyMobile = styled.div`
  display:none;
  @media (max-width: 1300px) {
    display: block;
  }
`
const OnlyMobileHide = styled.div`
  @media (max-width: 1300px) {
    display: none;
  }
`

export default Header
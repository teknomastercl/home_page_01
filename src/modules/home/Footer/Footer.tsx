import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ContactDesc from '../Contact/ContactDesc'
import Services from './Services/Services'

import Line from '../Header/Line'
import RedesSociales from './RedesSociales'

const Footer = () => {
    const today = new Date().getFullYear()
    return (
        <Backgroud>
            <Line />
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} lg={3}>
                        <img src={require('@/assets/img/logo_full.png')} />
                    </Grid>
                    <Grid item xs={12} lg={3} container>
                        <Services />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Typography variant="body1" color="white"><b>¡Contáctanos!</b></Typography>
                        <div>
                            <ContactDesc rrssOff />
                        </div>
                    </Grid>
                    {/* <Grid item xs={3} container justifyContent="center">
                        <Button variant="contained" className={btnPay}>Paga aquí tu proyecto</Button>
                        <WebpayLogo src={require('@/assets/img/webpay.png')} />
                    </Grid> */}
                    <Grid item xs={6}>
                        <Typography variant='caption' color="white">Copyright © {today}. Tekno Master | Gestión Informática</Typography>
                    </Grid>
                    <Grid item xs={6} container justifyContent="flex-end">
                        <RedesSociales />
                    </Grid>
                </Grid>
            </Container>
        </Backgroud>
    )
}
const Backgroud = styled.div`
    background: #434350;
    margin-top: 57px;
    position:relative;
    @media (max-width: 1300px) {
        margin-top: 0px;
  }
`
const Container = styled.div`
    padding-top: 57px;
    padding-left: 57px;
    padding-right: 57px;
    padding-bottom: 57px;
    max-width: 1325px;
    margin: auto;
`
const WebpayLogo = styled.img`
    width: 252px;
    margin-top: 20px;
`
const btnPay = css`
    background: white !important;
    color: black !important;
    border-radius: 100px !important;
`


export default Footer
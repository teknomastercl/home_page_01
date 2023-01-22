import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ContactDesc from '../Contact/ContactDesc'
import Services from './Services/Services'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Backgroud>
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={3}>
                        <img src={require('@/assets/img/logo_full.png')} />
                    </Grid>
                    <Grid item xs={3} container>
                        <Services />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="body1" color="white"><b>¡Contáctanos!</b></Typography>
                        <div>
                            <ContactDesc />
                        </div>
                    </Grid>
                    <Grid item xs={3} container justifyContent="center">
                        <Button variant="contained" className={btnPay}>Paga aquí tu proyecto</Button>
                        <WebpayLogo src={require('@/assets/img/webpay.png')} />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='caption' color="white">Copyright © 2022. Tekno Master | Gestión Informática</Typography>
                    </Grid>
                    <Grid item xs={6} container justifyContent="flex-end">
                        <FacebookIcon className={iconStyle} />
                        <TwitterIcon className={iconStyle} />
                        <InstagramIcon className={iconStyle} />
                        <LinkedInIcon className={iconStyle} />
                    </Grid>
                </Grid>
            </Container>
        </Backgroud>
    )
}
const Backgroud = styled.div`
    background: #434350;
    margin-top: 57px;
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
const iconStyle = css`
    color:white;
    padding-left:10px;
`

export default Footer
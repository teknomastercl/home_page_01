import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AppPage = () => {
    return (
        <Container>
            <Grid container spacing={5}>
                <Grid item xs={12} lg={6} container justifyContent="center" alignItems="center">
                    <ContainerDesc>
                        <Typography variant="h4" color="white" className={onlyMobileFontTitle}>
                            Somos expertos en desarrollo de aplicaciones móviles
                        </Typography>
                        <Typography variant="h5" color="white" className={onlyMobileFontDesc}>
                            Desde el diseño al desarrollo y subirlos a Playstore y Appstore. Nos encargamos de manterner tu aplicación siempre activa
                        </Typography>
                        <Link to="/contact">
                            <Button variant="contained" className={buttonContact}>Necesito una App móvil</Button>
                        </Link>
                    </ContainerDesc>
                </Grid>
                <Grid item xs={12} lg={6} container justifyContent="center" alignItems="center">
                    <Image src={require('@/assets/img/services/app.png')} />
                </Grid>
            </Grid>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1144px;
  margin:auto;
  padding-top: 58px;
`
const ContainerDesc = styled.div`
    padding-left: 58px;
    padding-right: 58px;
`
const Image = styled.img`
    width: 538px;
    height: 466px;
    @media (max-width: 1300px) {
      width: 290px;
      height: inherit;
    }
`
const buttonContact = css`
  background-color: #88889E !important;
`
const onlyMobileFontTitle = css`
    @media (max-width: 1300px) {
        font-size: 24px !important;
        padding-top:50px; 
    }
`

const onlyMobileFontDesc = css`
    padding-top:20px; 
    padding-bottom: 30px;
    @media (max-width: 1300px) {
        font-size: 16px !important;
    }
`
export default AppPage
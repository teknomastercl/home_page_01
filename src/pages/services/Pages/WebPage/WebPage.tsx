import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const WebPage = () => {
    return (
        <Container>
            <Grid container spacing={5}>
                <Grid item xs={12} lg={6} container justifyContent="center" alignItems="center">
                    <ContainerDesc>
                        <Typography variant="h4" color="white" className={onlyMobileFontTitle}>
                            Diseñamos, desarrollamos y lanzamos tu sitio web al público.
                        </Typography>
                        <Typography variant="h5" color="white" className={onlyMobileFontDesc}>
                            Asegurando una experiencia de usuario óptima y una imagen profesional para tu marca.
                        </Typography>
                        <Link to="/contact">
                            <Button variant="contained" className={buttonContact}>Necesito un sitio web</Button>
                        </Link>
                    </ContainerDesc>
                </Grid>
                <Grid item xs={12} lg={6} container justifyContent="center" alignItems="center">
                    <Image src={require('@/assets/img/services/web.png')} />
                </Grid>
            </Grid>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1144px;
  margin:auto;
  padding-top: 100px;
`

const ContainerDesc = styled.div`
    padding-left: 58px;
    padding-right: 58px;
`
const Image = styled.img`
    width: 538px;
    height: 466px;
    @media (max-width: 1300px) {
      width: 250px;
      height: inherit;
    }
`
const buttonContact = css`
  background-color: #88889E !important;
`

const onlyMobileFontTitle = css`
    @media (max-width: 1300px) {
        font-size: 24px !important;
    }
`

const onlyMobileFontDesc = css`
    padding-top:20px; 
    padding-bottom: 30px;
    @media (max-width: 1300px) {
        font-size: 16px !important;
    }
`

export default WebPage
import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const BackendPage = () => {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} lg={6} container justifyContent="center" alignItems="center">
          <Image src={require('@/assets/img/services/backend.png')} />
        </Grid>
        <Grid item xs={12} lg={6} container justifyContent="center" alignItems="center">
          <ContainerDesc>
            <Typography variant="h4" color="white" className={onlyMobileFontTitle}>
              Ofrecemos soluciones personalizadas para la arquitectura de tu negocio
            </Typography>
            <Typography variant="h5" color="white" className={onlyMobileFontDesc}>
              Con profesionales especializados en bases de datos, creación de API REST y todo lo relacionado con el BACK-END.
            </Typography>
            <Link to="contact">
              <Button variant="contained" className={buttonContact}>Cotizar proyecto de Backend</Button>
            </Link>
          </ContainerDesc>
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
    width: 602px;
    height: 499px;
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
export default BackendPage
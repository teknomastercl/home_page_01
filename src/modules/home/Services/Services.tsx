import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import Line from '../Header/Line';

const Services = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} container justifyContent="center" alignItems="center">
                    <div className={css`padding-top: 36px;`}>
                        <Typography variant="h5" color="white"><b>¿Qué ofrecemos?</b></Typography>
                    </div>
                </Grid>
                <Grid item xs={12} container justifyContent="center" alignItems="center">
                    <ServicesInfo />
                </Grid>
            </Grid>
            <Line />
        </Container>
    )
}

const ServicesInfo = () => {
    const ServicesData = [
        {
            title: "Diseño",
            description: "Te ayudamos a crear o actualizar el logo e imagen de tu marca",
            icon: <CreateIcon sx={{ fontSize: 80, color: '#49E2FF' }} />
        },
        {
            title: "Página Web",
            description: "Te ofrecemos un sitio web innovador de alta gamma",
            icon: <ComputerIcon sx={{ fontSize: 80, color: '#49E2FF' }} />
        },
        {
            title: "Backend",
            description: "Contamos con informaticos expertos para diseñar tu negocio",
            icon: <LanguageIcon sx={{ fontSize: 80, color: '#49E2FF' }} />
        },
        {
            title: "Aplicación Móvil",
            description: "En conjunto la diseñamos y la lanzamos a la Appstore y Playstore",
            icon: <AppShortcutIcon sx={{ fontSize: 80, color: '#49E2FF' }} />
        },
    ]

    return (
        <ContainerServicesInfo>
            <Grid container spacing={5}>
                {
                    ServicesData.map(item => (
                        <Grid item xs={6} lg={3} container justifyContent="center" alignItems="center" flexDirection="column">
                            <ContainerItem>
                                {item.icon}
                            </ContainerItem>
                            <ContainerText>
                                <Typography color="white" variant='h6'><b>{item.title}</b></Typography>
                                <Typography color="white" variant='body2'>{item.description}</Typography>
                            </ContainerText>
                        </Grid>
                    ))
                }
            </Grid>
        </ContainerServicesInfo>
    )
}

const Container = styled.div`
    width: 100%;
    height: 399px;
    background: #434350;
    margin-top: 30px;
    position: relative;
`

const ContainerServicesInfo = styled.div`
    max-width: 1110px;
    margin:auto;
    padding-top: 40px;
`
const ServicesImage = styled.img`
    width: 1339px;
`
const ContainerText = styled.div`
    text-align: center;
    max-width: 246px;
`

const ContainerItem = styled.div`
    width: 114px;
    height: 114px;
    border: solid 11px #F37368;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Services
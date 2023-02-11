import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import { css } from '@emotion/css';
import useWindowDimensions from '@/utils/useWindowDimensions';

const RootPage = ({
    fullpageApi
}) => {
    return (
        <Container>
            <Grid container spacing={5}>
                <Grid item xs={12} container justifyContent="center" alignItems="center">
                    <Typography variant="h4" color="white" className={onlyMobileFont}><b>¿Cuál servicio buscas?</b></Typography>
                </Grid>
                <Grid item xs={12}>
                    <Services fullpageApi={fullpageApi} />
                </Grid>
            </Grid>
        </Container>
    )
}

const Services = ({
    fullpageApi
}) => {
    const { height, width } = useWindowDimensions()
    const fontSize = width < 1300 ? 30 : 80
    return (
        <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={6} lg={3} container justifyContent="center" alignItems="center">
                <ServiceItem
                    title="Diseño Gráfico"
                    icon={<CreateIcon sx={{ fontSize, color: '#49E2FF' }} />}
                    onClick={() => fullpageApi.moveTo(2)}
                />
            </Grid>
            <Grid item xs={6} lg={3} container justifyContent="center" alignItems="center">
                <ServiceItem
                    title="Página Web"
                    icon={<ComputerIcon sx={{ fontSize, color: '#49E2FF' }} />}
                    onClick={() => fullpageApi.moveTo(3)}
                />
            </Grid>
            <Grid item xs={6} lg={3} container justifyContent="center" alignItems="center">
                <ServiceItem
                    title="Back-End"
                    icon={<LanguageIcon sx={{ fontSize, color: '#49E2FF' }} />}
                    onClick={() => fullpageApi.moveTo(4)}
                />
            </Grid>
            <Grid item xs={6} lg={3} container justifyContent="center" alignItems="center">
                <ServiceItem
                    title="Aplicación Mobile"
                    icon={<AppShortcutIcon sx={{ fontSize, color: '#49E2FF' }} />}
                    onClick={() => fullpageApi.moveTo(5)}
                />
            </Grid>
        </Grid>
    )
}

const ServiceItem = ({
    title,
    icon,
    onClick
}) => {
    return (
        <ContainerService onClick={onClick}>
            <Box>
                {icon}
            </Box>
            <Typography className={titleStyle} color="white" variant="h5">{title}</Typography>
        </ContainerService>
    )
}

const Container = styled.div`
    max-width: 1062px;
    margin:auto;
`
const ContainerService = styled.div`
    width: 171px;
    text-align: center;
    @media (max-width: 1300px) {
        width: inherit;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
       & > * {
        font-size: 18px !important;
       }
    }
`
const Box = styled.div`
    width: 171px;
    height: 171px;
    border: 10px solid #F37368;
    border-radius: 17px;
    justify-content: center;
    align-items: center;
    display: flex;
    transition: all 0.4s;
    &:hover {
        background:#F37368;
        transform: translateY(-10px);
        box-shadow: 0px 15px 10px rgba(0,0,0,0.2);
    }
    &:hover > * {
       color: white !important;
    }
    &:active {
        transform: scale(1.2);
    }
    @media (max-width: 1300px) {
        width: 91px;
        height: 91px;
    }
`
const titleStyle = css`
    padding-top: 23px;
`
const onlyMobileFont = css`
    @media (max-width: 1300px) {
        font-size: 24px !important;
        padding-bottom: 27px;
    }
`

export default RootPage
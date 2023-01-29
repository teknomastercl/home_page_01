import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const Question = () => {
    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={6} container justifyContent="center" alignItems="center">
                    <Title>
                        <Typography variant="h2" color="white">
                            <b>¿Porque tener una Página Web o Aplicación Móvil?</b>
                        </Typography>
                    </Title>
                </Grid>
                <Grid item xs={6} container justifyContent="center" alignItems="center" spacing={3}>
                    <Grid item xs={12}>
                        <ContainerCards>
                            <Typography variant="h6">Tener una tarjeta de presentación digital</Typography>
                        </ContainerCards>
                    </Grid>
                    <Grid item xs={12}>
                        <ContainerCards>
                            <Typography variant="h6">Tener facilidad para ser encontrado</Typography>
                        </ContainerCards>
                    </Grid>
                    <Grid item xs={12}>
                        <ContainerCards>
                            <Typography variant="h6">Presencia online las 24 horas</Typography>
                        </ContainerCards>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

const Container = styled.div`
    background: #434350;
    height: 347px;
    padding-left: 57px;
    padding-left: 57px;
    padding-top: 61px;
`
const ContainerParticles = styled.div`
    overflow: hidden;
`

const Title = styled.div`
    width: 531px;
`

const ContainerCards = styled.div`
    background: white;
    height: 64px;
    border-radius: 6px;
    width: 599px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Question
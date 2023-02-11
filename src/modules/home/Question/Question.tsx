import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import CarrouselQuestion from './CarrouselQuestion/CarrouselQuestion'

const backgroundImage = require('@/assets/img/tech_background.jpg')

const Question = () => {
    return (
        <Container className={css`background-image: url(${backgroundImage});`}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} lg={6} container justifyContent="center" alignItems="center">
                    <Title>
                        <Typography variant="h3" color="white" style={{ textAlign: 'center' }}>
                            <b>5 Motivos de porque tener una <Ccyan>Página Web</Ccyan> <br />o <Ccyan>Aplicación Mobile</Ccyan></b>
                        </Typography>
                    </Title>
                </Grid>
                <Grid item xs={12} lg={6} container justifyContent="center" alignItems="center" spacing={3}>
                    <CarrouselContianer>
                        <CarrouselQuestion />
                    </CarrouselContianer>
                </Grid>
            </Grid>
        </Container>
    )
}

const Ccyan = styled.span`
  color: #49E2FF;
`

const Container = styled.div`
    height: 347px;
    padding-left: 57px;
    padding-left: 57px;
    padding-top: 61px;
    @media (max-width: 1300px) {
        height: inherit;
        padding: 0px;
        padding-top: 50px !important; 
        padding-left: 30px !important;
        padding-right: 30px !important;
    }
`

const Title = styled.div`
    width: 531px;
`

const CarrouselContianer = styled.div`
    width: 100%;
    padding-bottom: 58px;
`

export default Question
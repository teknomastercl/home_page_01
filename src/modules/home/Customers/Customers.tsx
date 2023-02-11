import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const Customers = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} container justifyContent="center" alignItems="center">
                    <Title>
                        <Typography variant="h5"><b>Clientes</b></Typography>
                    </Title>
                </Grid>
                <Grid item xs={12} spacing={8} container justifyContent="center" alignItems="center" className={containerImages}>
                    <Grid item xs={6} md={4} lg container justifyContent="center" alignItems="center">
                        <ImageCustomer src={require('@/assets/img/walmart.png')} />
                    </Grid>
                    <Grid item xs={6} md={4} lg container justifyContent="center" alignItems="center">
                        <ImageCustomer src={require('@/assets/img/sketchers.png')} />
                    </Grid>
                    <Grid item xs={6} md={4} lg container justifyContent="center" alignItems="center">
                        <ImageCustomer src={require('@/assets/img/theline.png')} />
                    </Grid>
                    <Grid item xs={6} md={4} lg container justifyContent="center" alignItems="center">
                        <ImageCustomer src={require('@/assets/img/hit.png')} />
                    </Grid>
                    <Grid item xs={6} md={4} lg container justifyContent="center" alignItems="center">
                        <ImageCustomer src={require('@/assets/img/viella.png')} />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1325px;
    margin: auto;
`

const Title = styled.div`
    padding-top: 28px;
    padding-bottom: 20px;
`

const ImageCustomer = styled.img`
    @media (max-width: 1300px) {
        width: 120px;
    }
`

const containerImages = css`
    @media (max-width: 1300px) {
        padding-left: 58px;
        padding-right: 58px;
        padding-top: 28px;
        padding-bottom: 28px;
    }
`

export default Customers
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
                <Grid item xs={12} container justifyContent="center" alignItems="center">
                    <Grid item xs container justifyContent="center" alignItems="center">
                        <ImageCustomer src={require('@/assets/img/walmart.png')} />
                    </Grid>
                    <Grid item xs container justifyContent="center" alignItems="center">
                        <ImageCustomer src={require('@/assets/img/sketchers.png')} />
                    </Grid>
                    <Grid item xs container justifyContent="center" alignItems="center">
                        <ImageCustomer src={require('@/assets/img/theline.png')} />
                    </Grid>
                    <Grid item xs container justifyContent="center" alignItems="center">
                        <ImageCustomer src={require('@/assets/img/hit.png')} />
                    </Grid>
                    <Grid item xs container justifyContent="center" alignItems="center">
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
    padding-top: 11px;
    padding-bottom: 20px;
`

const ImageCustomer = styled.img`

`

export default Customers
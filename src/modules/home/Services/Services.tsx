import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const Services = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} container justifyContent="center" alignItems="center">
                    <div className={css`padding-top: 36px;`}>
                        <Typography variant="h5"><b>¿Qué ofrecemos?</b></Typography>
                    </div>
                </Grid>
                <Grid item xs={12} container justifyContent="center" alignItems="center">
                    <div className={css`padding-top: 36px;`}>
                        <ServicesImage src={require('@/assets/img/services.png')} /> 
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 399px;
    background: #B9F4FF;
    margin-top: 30px;
`
const ServicesImage = styled.img`
    width: 1339px;
`

export default Services
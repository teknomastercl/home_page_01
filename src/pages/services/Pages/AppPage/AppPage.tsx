import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const AppPage = () => {
    return (
        <Container>
            <Grid container spacing={10}>
                <Grid item xs={6} container justifyContent="center" alignItems="center">
                    <div>
                        <Typography variant="h4" color="white">
                            Somos expertos en desarrollo de aplicaciones móviles
                        </Typography>
                        <Typography variant="h5" color="white" className={css`padding-top:20px; padding-bottom: 30px;`}>
                            Desde el diseño al desarrollo y subirlos a Playstore y Appstore. Nos encargamos de manterner tu aplicación siempre activa
                        </Typography>
                        <a href='/contact'>
                        <Button variant="contained" className={buttonContact}>Necesito una App móvil</Button>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={6} container justifyContent="center" alignItems="center">
                    <Image src={require('@/assets/img/services/app.png')} />
                </Grid>
            </Grid>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1144px;
  margin:auto;
`
const Image = styled.img`
    width: 538px;
    height: 466px;
`
const buttonContact = css`
  background-color: #88889E !important;
`

export default AppPage
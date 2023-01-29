import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const WebPage = () => {
    return (
        <Container>
            <Grid container spacing={10}>
                <Grid item xs={6} container justifyContent="center" alignItems="center">
                    <div>
                        <Typography variant="h4" color="white">
                            Primero diseñamos propuestas, desarrollamos la página web y se lanza al público
                        </Typography>
                        <Typography variant="h5" color="white" className={css`padding-top:20px; padding-bottom: 30px;`}>
                            Desde diseñar un mockup hasta desarrollar tu página y subirla a la web para ser vista por tus clientes
                        </Typography>
                        <Button variant="contained" className={buttonContact}>Necesito un sitio web</Button>
                    </div>
                </Grid>
                <Grid item xs={6} container justifyContent="center" alignItems="center">
                    <Image src={require('@/assets/img/services/web.png')} />
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

export default WebPage
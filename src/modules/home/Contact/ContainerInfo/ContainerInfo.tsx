import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ContactDesc from '../ContactDesc'

const ContainerInfo = () => {
    return (
        <Container>
            <Logo src={require('@/assets/img/logo_white.png')} />
            <div className={containerInfo}>
                <Typography variant="body1" color="white">
                    Tu negocio merece un servicio de alta calidad, transparente, cercano y profesional que te ayude a mejorar tus ventas y destacar sobre tu competencia. ¡Ponte en contacto!
                </Typography>
                <ContactDesc />
                <Grid container spacing={3} className={css`padding-top:30px;`}>
                    <Grid item xs={12}>
                        <Button variant="contained" fullWidth className={btnPhone}>
                            <Typography variant='h6'><b>Llamar por teléfono</b></Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" fullWidth className={btnWs}>
                            <Typography variant='h6'><b>Consulta por Whatsapp</b></Typography>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 459px;
    background: #434350;
    height: 604px;
    align-items: center;
    display:flex;
    flex-direction: column;
    border-radius:12px;
`
const Logo = styled.img`
    padding-top: 44px;
    width: 322px;
    height: 68.38px;
    object-fit: contained;
    padding-bottom: 24px;
`
const containerInfo = css`
    margin-left: 61px;
    margin-right: 61px;
`


const btnPhone = css`
    background: #24A1B9 !important;
    height: 64px;
    `
    const btnWs = css`
    background: #72B36F !important;
    height: 64px;
`

export default ContainerInfo
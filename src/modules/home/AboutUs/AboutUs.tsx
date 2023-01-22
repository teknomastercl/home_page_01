import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const AboutUs = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={6} container justifyContent="center">
                    <ImageAbout src={require('@/assets/img/aboutUs.png')} />
                </Grid>
                <Grid item xs={6} container justifyContent="center">
                    <ContainerDesc>
                        <Typography variant="h4"><b>¿Que hacemos en <CRed>Tekno Master?</CRed></b></Typography>
                        <Typography variant="body1" className={css`padding-top:15px;`}>
                            Somos una <CRed>agencia de informatica y diseño web</CRed> con sede en Santiago, Chile, que diseña y crea hermosos sitios web compatibles con motores de búsqueda para marcas en una amplia gama de sectores e industrias.
                        </Typography>
                        <div className={css`padding-top:15px;`}>
                            <Typography variant="body1">
                                Podemos manejar cualquier parte de su actividad en línea, desde diseño web receptivo y desarrollo web hasta comercio electrónico y aplicaciones móviles.
                            </Typography>
                        </div>
                        <div className={css`padding-top:15px;`}>
                            <Typography variant="body1">
                                Como una agencia dinámica de desarrollo web a la vanguardia de la tecnología, somos un par de manos seguras, con experiencia en la industria desde el año 2020. Nuestros clientes nos aman y nuestro personal también. Y eso nos gusta.
                            </Typography>
                        </div>
                    </ContainerDesc>
                </Grid>
            </Grid>
        </Container>
    )
}

const Container = styled.div`
  height: 528px;
  padding-left: 57px;
  padding-right: 57px;
  max-width: 1325px;
  margin: auto;
`

const ContainerDesc = styled.div`
    padding-top: 100px;
    padding-left: 57px;
    padding-right: 57px;
`
const ImageAbout = styled.img`
    padding-top: 41px;
    width: 632px;
`
const CRed = styled.span`
    color: #F37368;
`

export default AboutUs
import { Grid, Typography } from '@mui/material'
import React from 'react'

const Services = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography color="white" variant="body1"><b>Servicios</b></Typography>
            </Grid>
            <Grid item xs={12}>
                <a href="/services"><Typography color="white" variant="body1">Diseño Gráfico</Typography></a>
                <a href="/services"><Typography color="white" variant="body1">Página Web</Typography></a>
                <a href="/services"><Typography color="white" variant="body1">Backend</Typography></a>
                <a href="/services"><Typography color="white" variant="body1">Aplicación Mobile</Typography></a>
            </Grid>
        </Grid>
    )
}

export default Services
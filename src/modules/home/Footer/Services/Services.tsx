import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography color="white" variant="body1"><b>Servicios</b></Typography>
            </Grid>
            <Grid item xs={12}>
                <Link to="/services"><Typography color="white" variant="body1">Diseño Gráfico</Typography></Link>
                <Link to="/services"><Typography color="white" variant="body1">Página Web</Typography></Link>
                <Link to="/services"><Typography color="white" variant="body1">Backend</Typography></Link>
                <Link to="/services"><Typography color="white" variant="body1">Aplicación Mobile</Typography></Link>
            </Grid>
        </Grid>
    )
}

export default Services
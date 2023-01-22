import { css } from '@emotion/css'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const ContactForm = () => {
    return (
        <div className={css`max-width: 700px;`}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h3" color="#434350"><b>¡Contáctanos!</b></Typography>
                    <Typography variant="body1" color="#434350" className={css`padding-top: 16px;`}><b>
                        Si está buscando un nuevo sitio web, no está satisfecho con su configuración actual,
                        busca crecimiento o simplemente necesita un consejo, estamos aquí para ayudarlo.
                        Si su solicitud requiere un precio, le responderemos dentro de las 24 horas.
                    </b></Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Nombre" variant="filled" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Correo" variant="filled" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Teléfono" variant="filled" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="age">Motivo</InputLabel>
                        <Select
                            labelId="age"
                            id="demo-simple-select"
                            value={''}
                            label="Age"
                            onChange={() => {}}
                            variant="filled"
                        >
                            <MenuItem value={10}>Página Web</MenuItem>
                            <MenuItem value={20}>Aplicación Mobile</MenuItem>
                            <MenuItem value={30}>Backend</MenuItem>
                            <MenuItem value={30}>Diseño Gráfico</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="age">Presupuesto del proyecto</InputLabel>
                        <Select
                            labelId="age"
                            id="demo-simple-select"
                            value={''}
                            label="Age"
                            onChange={() => {}}
                            variant="filled"
                        >
                            <MenuItem value={10}>Menos de $500.000 (Desarrollo Express)</MenuItem>
                            <MenuItem value={20}>Entre $600.000 y $1.000.000 (Proyecto Corporativo)</MenuItem>
                            <MenuItem value={30}>+ $1.000.000 (Requisitos avanzados)</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="age">¿Como quieres que te contactemos?</InputLabel>
                        <Select
                            labelId="age"
                            id="demo-simple-select"
                            value={''}
                            label="Age"
                            onChange={() => {}}
                            variant="filled"
                        >
                            <MenuItem value={10}>Mensaje por WhatsApp</MenuItem>
                            <MenuItem value={20}>Llamada por teléfono</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        label="Detalles de tu proyecto"
                        multiline
                        variant="filled"
                        rows={4}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" fullWidth className={css`
                       background: #F37368 !important; 
                    `}>ENVIAR</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactForm
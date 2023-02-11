import sendEmail from '@/api/sendEmail'
import { css } from '@emotion/css'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { html_part } from './html_part'

const ContactForm = () => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [service, setService] = React.useState('')
    const [payment, setPayment] = React.useState('')
    const [contact, setContact] = React.useState('')
    const [message, setMessage] = React.useState('')

    const handleSubmit = () => {
        if (!name)
            return alert('Ingrese su correo')
        if (!email)
            return alert('Ingrese su correo')
        if (!phone)
            return alert('Ingrese su teléfono')
        if (!service)
            return alert('Ingrese su motivo')
        if (!payment)
            return alert('Ingrese su presupuesto')
        if (!contact)
            return alert('Ingrese su medio de contacto')
        if (!message)
            return alert('Ingrese su mensaje')
        handleSender()
    }

    const handleSender = async () => {
        const req = await sendEmail({
            "from": {
                "email": "contacto@teknomaster.cl",
                "name": "Tekno Master"
            },
            "to": [
                {
                    "email": email,
                    "name": name
                }
            ],
            "subject": "Ejemplo",
            html_part: html_part({ name, email, phone, service, payment, contact, message }),
            "headers": {
                "X-CustomHeader": "Header value",
                "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
                "Content-Type": "application/json"
            },
            "smtp_tags": [
                "string"
            ],
            "attachments": []
        })
        if (!req) {
            return alert('Error al enviar formulario')
        }
        alert('Formulario enviado')
    }


    // Connect useState to the input value
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
                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="Nombre"
                        variant="filled"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Correo"
                        variant="filled"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        label="Teléfono"
                        variant="filled"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="service">Motivo</InputLabel>
                        <Select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            labelId="service"
                            id="demo-simple-select"
                            label="service"
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
                        <InputLabel id="payment">Presupuesto del proyecto</InputLabel>
                        <Select
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
                            labelId="payment"
                            id="demo-simple-select"
                            label="payment"
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
                        <InputLabel id="contact">¿Como quieres que te contactemos?</InputLabel>
                        <Select
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            labelId="contact"
                            id="demo-simple-select"
                            label="contact"
                            variant="filled"
                        >
                            <MenuItem value={10}>Mensaje por WhatsApp</MenuItem>
                            <MenuItem value={20}>Llamada por teléfono</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        label="Detalles de tu proyecto"
                        multiline
                        variant="filled"
                        rows={4}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={handleSubmit} variant="contained" fullWidth className={css`
                       background: #F37368 !important; 
                    `}>ENVIAR</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactForm
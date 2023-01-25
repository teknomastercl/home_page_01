import { Grid, Typography } from '@mui/material'
import React from 'react'

interface Props {
    horizontal?: boolean
}

const Awards:React.FC<Props> = ({
    horizontal
}) => {
    const gridXS = horizontal ? 4 : 12
    return (
        <Grid container justifyContent='flex-end' spacing={6}>
            <Grid item xs={gridXS} container flexDirection="column" justifyContent='center' alignItems="center">
                <Typography color="white" variant="h3"><b>+6</b></Typography>
                <Typography color="white" variant="body1"><b>Años de experiencia</b></Typography>
            </Grid>
            <Grid item xs={gridXS} container flexDirection="column" justifyContent='center' alignItems="center">
                <Typography color="white" variant="h3"><b>+33</b></Typography>
                <Typography color="white" variant="body1"><b>Proyectos terminados con éxito</b></Typography>
            </Grid>
            <Grid item xs={gridXS} container flexDirection="column" justifyContent='center' alignItems="center">
                <Typography color="white" variant="h3"><b>start</b></Typography>
                <Typography color="white" variant="body1"><b>Premios Mejor página</b></Typography>
            </Grid>
        </Grid>
    )
}

export default Awards
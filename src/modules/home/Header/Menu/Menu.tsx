import { css } from '@emotion/css'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Menu = () => {
    return (
        <div className={container}>
            <Grid container justifyContent="flex-end" alignItems="center">
                <Grid item container xs>
                    <div className={css`width: 127px;`}>
                        <Typography variant="body1" color="white"><b>Servicios</b></Typography>
                    </div>
                </Grid>
                <Grid item container xs>
                    <div className={css`width: 127px;`}>
                        <Typography variant="body1" color="white"><b>Portafolio</b></Typography>
                    </div>
                </Grid>
                <Grid item container xs>
                    <div className={css`width: 127px;`}>
                        <Typography variant="body1" color="white"><b>Nosotros</b></Typography>
                    </div>
                </Grid>
                <Grid item container xs>
                    <div className={css`width: 230px;`}>
                        <Button className={buttonCss} variant='contained'>Cotizar Proyecto</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export const container = css`
    max-width: 626px;
    margin-top: 15px;
    justify-content:flex-end;
    display:flex;
`
export const buttonCss = css`
    background-image: linear-gradient(to right, #5dd7f7, #7dc0ff, #c49ff3, #f47ab4, #f36d62);
    font-weight: bold !important;
`


export default Menu
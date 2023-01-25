
import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import React from 'react'
import { Logo } from '../Header.style'
import Menu from '../Menu/Menu'

const HeaderTop = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={3}>
                    <a href='/'>
                        <Logo src={require('@/assets/img/logo_white.png')} />
                    </a>
                </Grid>
                <Grid item xs={9} container justifyContent="flex-end">
                    <Menu />
                </Grid>
            </Grid>
        </Container>
    )
}
const Container = styled.div`
    max-width: 1325px;
    margin:auto;
`

export default HeaderTop
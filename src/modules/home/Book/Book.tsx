import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const Book = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} container justifyContent="center">
          <div className={css`padding-top: 38px;`}>
          <Typography variant="h5" color="white"><b>Portafolio</b></Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  background: #434350;
  height: 528px;
`

export default Book
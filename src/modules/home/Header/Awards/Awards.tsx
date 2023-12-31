import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'

interface Props {
    horizontal?: boolean
}

const Awards: React.FC<Props> = ({
    horizontal
}) => {
    const gridXS = horizontal ? 4 : 12
    return (
        <Grid container justifyContent='flex-end' spacing={4}>
            <Grid item xs={gridXS} container flexDirection="column" justifyContent='center' alignItems="center">
                <ContainerStar>
                    <Typography color="white" variant="h3" className={onlyMobileTitle}><b>+6</b></Typography>
                    <Typography color="white" variant="body1" className={onlyMobileDesc}><b>Años de experiencia</b></Typography>
                </ContainerStar>
            </Grid>
            <Grid item xs={gridXS} container flexDirection="column" justifyContent='center' alignItems="center">
                <ContainerStar>
                    <Typography color="white" variant="h3" className={onlyMobileTitle}><b>+33</b></Typography>
                    <Typography color="white" variant="body1" className={onlyMobileDesc}><b>Proyectos terminados con éxito</b></Typography>
                </ContainerStar>
            </Grid>
            <Grid item xs={gridXS} container flexDirection="column" justifyContent='center' alignItems="center">
                <ContainerStar>
                    <Star src={require('@/assets/img/star.png')} />
                    <Typography color="white" variant="body1" className={onlyMobileDesc}><b>Experimentados en nuestra área</b></Typography>
                </ContainerStar>
            </Grid>
        </Grid>
    )
}

const Star = styled.img`
    width: 68px;
    padding-bottom: 10px;
    @media (max-width: 1300px) {
        width: 37px;
    }
`
const ContainerStar = styled.div`
    text-align: center;
    @media (max-width: 1300px) {
    }
`
const onlyMobileTitle = css`
    @media (max-width: 1300px) {
        font-size: 40px !important;
    }
`
const onlyMobileDesc = css`
    @media (max-width: 1300px) {
        font-size: 10px !important;
        height: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default Awards
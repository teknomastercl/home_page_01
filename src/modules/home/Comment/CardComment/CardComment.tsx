import styled from '@emotion/styled'
import { Avatar, Grid, Typography } from '@mui/material'
import React from 'react'

interface Props {
    name: string
    date: string
    comment: string
    src: string
}

const CardComment: React.FC<Props> = ({
    name,
    date,
    comment,
    src
}) => {
    const avatarSrc = require('@/assets/img/avatar/' + src)
    return (
        <Container>
            <SpacingStyle>
                <Grid container spacing={1}>
                    <Grid item xs={3} container justifyContent="center" alignItems="center">
                        <Avatar src={avatarSrc} sx={{ width: 35, height: 35 }} />
                    </Grid>
                    <Grid item xs={7} container alignItems="center">
                        <Info name={name} date={date} />
                    </Grid>
                    <Grid item xs={2} container justifyContent="flex-end" alignItems="center">
                        <img src={require('@/assets/img/logo-google.png')} width="20px" height="20px" />
                    </Grid>
                    <Grid item xs={12}>
                        <img src={require('@/assets/img/stars.png')} width="67px" height="14px" />
                    </Grid>
                    <Grid item xs={12}>
                        <CommentContainer>
                            <Typography variant="caption">{comment}</Typography>
                        </CommentContainer>
                    </Grid>
                </Grid>
            </SpacingStyle>
        </Container>
    )
}

const Info = ({ name, date }) => (
    <Grid container>
        <Grid item xs={12}>
            <Typography variant="caption"><b>{name}</b></Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="caption">{date}</Typography>
        </Grid>
    </Grid>
)

const Container = styled.div`
    background:white;
    width: 217px;
    height: 177px;
    border-radius: 7px;
    box-shadow: solid 20px 15px 55px rgba(0,0,0,1);
`

const CommentContainer = styled.div`
    overflow-y: scroll;
    height: 70px;
`

const SpacingStyle = styled.div`
   padding: 18px;
`

export default CardComment
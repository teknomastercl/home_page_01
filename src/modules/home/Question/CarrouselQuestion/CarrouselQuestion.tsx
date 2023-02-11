import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
const questionData = require('@/dummy/questionData.json');

interface Props {
    index: number
    title: string
    description: string
}

const CarrouselQuestion = () => {
    return (
        <div style={{ width: '100%' }}>
            <Swiper
                autoplay={{ delay: 100 }}
                slidesPerView={1}
                navigation
                modules={[Navigation, Pagination]}
                className={ContainerSwiper}
            >
                {
                    questionData.map((item, index) => {
                        return (
                            <SwiperSlide className={ContainerSwiperSlide}>
                                <CardQuestion
                                    index={index}
                                    title={item.title}
                                    description={item.description}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}


const CardQuestion: React.FC<Props> = ({
    index,
    title,
    description,
}) => {
    return (
        <Container>
            <div style={{ paddingTop: 17 }}>
                <Grid container>
                    <Grid item xs={12} container justifyContent="center" alignItems="center" style={{ paddingBottom: 12 }}>
                        <Grid item xs={12} lg={2} container justifyContent="center" alignItems="center">
                            <NumberCircle>{index + 1}</NumberCircle>
                        </Grid>
                        <Grid item xs={12} lg={10} container justifyContent="center" alignItems="center">
                            <Typography variant="h5" color="black"><b>{title}</b></Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={12} container justifyContent="center" alignItems="center">
                        <ContainerDesc>
                            <Typography variant="body1" color="black">{description}</Typography>
                        </ContainerDesc>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

const NumberCircle = styled.span`
    width: 50px;
    height: 50px;
    background-color: #F37368;
    color:white;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    @media (max-width: 1300px) {
        margin-bottom: 28px;
    }
`

const ContainerSwiper = css`
  max-width: 872px;
  height: 180px;
  margin-top: 80px;
  @media (max-width: 1300px) {
        height: inherit;
    }
`
const Container = styled.div`
    width: 441px;
    background-color: white;
    border-radius: 20px;
    padding: 10px;
    & > div {
        justify-content: center;
        align-items: center;
        display: flex;
    }
    @media (max-width: 1300px) {
        width: 60%;
        padding-bottom: 60px;
        padding-left: 34px;
        padding-right: 34px;
    }
`
const ContainerDesc = styled.div`

`

const ContainerSwiperSlide = css`
  display:flex;
  align-item:center;
  justify-content:center;
`

export default CarrouselQuestion
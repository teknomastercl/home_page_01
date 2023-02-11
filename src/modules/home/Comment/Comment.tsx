import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import Line from '../Header/Line'
import CardComment from './CardComment/CardComment'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useWindowDimensions from '@/utils/useWindowDimensions'
const commentsData = require('@/dummy/commentsData.json');

const Comment = () => {
  const { height, width } = useWindowDimensions()
  return (
    <Backgroud>
      <Line />
      <Container>
        <Grid container>
          <Grid item xs={12} lg={4} container justifyContent="center" alignItems="center">
            <Image src={require('@/assets/img/google.png')} />
          </Grid>
          <Grid item xs={12} lg={8} container justifyContent="center" flexDirection="column" alignContent="center">
            <ContainerDesc>
              <Typography variant="h5" color="white"><b>Opiniones de clientes</b></Typography>
            </ContainerDesc>
            <div>
              <Swiper
                slidesPerView={width < 1300 ? 1 : 3}
                spaceBetween={-50}
                navigation
                modules={[Navigation, Pagination]}
                className={ContainerSwiper}
                loop
                loopedSlides={3}
              >
                {
                  commentsData.map(item => {
                    return (
                      <SwiperSlide className={ContainerSwiperSlide}>
                        <CardComment
                          name={item.name}
                          date={item.date}
                          comment={item.comment}
                          src={item.src}
                        />
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Backgroud>
  )
}

const Backgroud = styled.div`
  background: #434350;
  position:relative;
`

const Container = styled.div`
  height: 347px;
  background: #434350;
  max-width: 1325px;
  margin: auto;
  @media (max-width: 1300px) {
    height: 617px;
  }
`
const ContainerDesc = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    @media (max-width: 1300px) {
      padding-top: 70px;
    }
`
const Image = styled.img`
    padding-top: 93px;
    width: 212px;
    height: 145px;
`

const ContainerSwiper = css`
  max-width: 872px;
  height: 177px;
  & > .swiper-wrapper {
    height: 177px;
  }
  & > .swiper-pagination {
  }
  @media (max-width: 1300px) {
    max-width: 332px;
  }
`

const ContainerSwiperSlide = css`
  display:flex;
  align-item:center;
  justify-content:center;
`

export default Comment
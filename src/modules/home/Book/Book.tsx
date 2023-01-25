import React from 'react'
import { css } from '@emotion/css'
import { Grid, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Line from '../Header/Line';

const Book = () => {
  return (
    <Container>
      <Line />
      <Grid container spacing={2}>
        <Grid item xs={12} container justifyContent="center">
          <div >
            <Typography variant="h5" color="white"><b>Portafolio</b></Typography>
          </div>
        </Grid>
        <Grid item xs={12} container display={"block"}>
          <div>
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              navigation
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              className={ContainerSwiper}
              loop
              loopedSlides={3}
            >
              <SwiperSlide className={ContainerSwiperSlide}>
                <img src={require('@/assets/img/book/01-viella.jpg')} className={ImgSlide} />
                <Typography variant="body1" className={titleSlide}><b>Viella.cl</b></Typography>
              </SwiperSlide>
              <SwiperSlide className={ContainerSwiperSlide}>
                <img src={require('@/assets/img/book/02-walmart.jpg')} className={ImgSlide} />
                <Typography variant="body1" className={titleSlide}><b>Tarjetaregalolider.cl</b></Typography>
              </SwiperSlide>
              <SwiperSlide className={ContainerSwiperSlide}>
                <img src={require('@/assets/img/book/03-match.png')} className={ImgSlide} />
                <Typography variant="body1" className={titleSlide}><b>Matchpádel</b></Typography>
              </SwiperSlide>
              <SwiperSlide className={ContainerSwiperSlide}>
                <img src={require('@/assets/img/book/01-viella.jpg')} className={ImgSlide} />
                <Typography variant="body1" className={titleSlide}><b>Viella.cl</b></Typography>
              </SwiperSlide>
              <SwiperSlide className={ContainerSwiperSlide}>
                <img src={require('@/assets/img/book/02-walmart.jpg')} className={ImgSlide} />
                <Typography variant="body1" className={titleSlide}><b>Tarjetaregalolider.cl</b></Typography>
              </SwiperSlide>
              <SwiperSlide className={ContainerSwiperSlide}>
                <img src={require('@/assets/img/book/03-match.png')} className={ImgSlide} />
                <Typography variant="body1" className={titleSlide}><b>Matchpádel</b></Typography>
              </SwiperSlide>
            </Swiper>
          </div>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Typography variant="body1" color="white"><b>Ver más proyectos</b></Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  background: #434350;
  height: 528px;
  position:relative;
`
const ContainerSwiper = css`
  max-width: 1009px;
  height: 394px;
  & > .swiper-wrapper {
    height: 349px;
  }
  & > .swiper-pagination {
  }
`

const ContainerSwiperSlide = css`
  display:flex;
  align-item:center;
  justify-content:center;
  flex-direction:column;
  text-align: center;
`

const ImgSlide = css`
  height: 269px;
  margin:auto;
`

const titleSlide = css`
  color:white;
`

export default Book
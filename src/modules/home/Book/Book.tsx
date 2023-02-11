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
import useWindowDimensions from '@/utils/useWindowDimensions';
import { Link } from 'react-router-dom';
const bookData = require('@/dummy/bookData.json');

const Book = () => {
  const { height, width } = useWindowDimensions()
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} container justifyContent="center">
          <div style={{ marginTop: 20 }}>
            <Typography variant="h5"><b>Portafolio</b></Typography>
          </div>
        </Grid>
        <Grid item xs={12} container display={"block"}>
          <div>
            <Swiper
              slidesPerView={width < 1300 ? 1 : 3}
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
              {
                bookData.map(item => {
                  const img = require('@/assets/img/book/' + item.src)
                  return (
                    <SwiperSlide className={ContainerSwiperSlide}>
                      <a href={item.href} target="_blank">
                        <img src={img} className={ImgSlide} />
                        <Typography variant="body1" className={titleSlide}><b>{item.title}</b></Typography>
                      </a>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Link to="/book">
            <Typography variant="body1"><b>Ver más proyectos</b></Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
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
`

export default Book
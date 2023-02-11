
import HeaderTop from '@/modules/home/Header/HeaderTop/HeaderTop'
import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import ParticlesBG from '../services/ParticlesBG/ParticlesBG'

const employersData = require('@/dummy/employersData.json');

const AboutUs = () => {
  return (
    <Container>
      <ContainerMenu>
        <HeaderTop />
      </ContainerMenu>
      <ParticlesBG />
      <ContainerRootEmployers>
        <Employers data={employersData} />
      </ContainerRootEmployers>
    </Container>
  )
}

const Employers = ({ data }) => {
  return (
    <Grid container spacing={5}>
      {
        data.map(item => {
          const img = require('@/assets/img/employers/' + item.src)
          return (
            <Grid item xs={6} lg={3} container justifyContent="center" alignItems="center">
              <ContainerEmployers>
                <Image src={img} />
                <Typography variant="h6" color="white" className={onlyMobileTitle}><b>{item.title}</b></Typography>
                <Typography variant="body1" color="white" className={onlyMobileRole}>{item.role}</Typography>
              </ContainerEmployers>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

const ContainerRootEmployers = styled.div`
  max-width: 1250px;
  width: 100%;
  margin: auto;
`
const ContainerEmployers = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: relative;
  z-index: 1000;
`
const Image = styled.img`
  width: 100%;
  height: 200px;
  padding-bottom: 20%;
  object-fit: contain;
  @media (max-width: 1300px) {
    width: 100px;
    height: 100px !important;
    object-fit: contain;
  }
`

const Container = styled.div`
  background: #434350;
  height: 100vh;
  display: flex;
  padding-left: 57px;
  padding-right: 57px;
  & > #tsparticles {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    background-image: url("");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
`
const ContainerMenu = styled.div`
  position:absolute;
  top:0;
  left:0;
  z-index: 10000;
  width:100%;
  margin-top: 28px;
  & > div {
      padding-left: 28px;
      padding-right: 28px;
    }
`
const onlyMobileTitle = css`
   @media (max-width: 1300px) {
    font-size: 14px !important;
    text-align: center;
  }
`
const onlyMobileRole = css`
  @media (max-width: 1300px) {
    font-size: 10px !important;
    text-align: center;
  }
`

export default AboutUs
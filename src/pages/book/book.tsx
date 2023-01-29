
import Footer from '@/modules/home/Footer/Footer';
import HeaderTop from '@/modules/home/Header/HeaderTop/HeaderTop'
import styled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'
const bookData = require('@/dummy/bookData.json');

console.log('bookData', bookData)

const Book = () => {
  return (
    <Container>
      <ContainerHeader>
        <HeaderTop />
      </ContainerHeader>
      <ContainerBook>
        <Grid container spacing={5}>
          {
            bookData.map(item => (
              <Grid item xs={4} container justifyContent="center" alignItems="center">
                <BookItem data={item} />
              </Grid>
            ))
          }
        </Grid>
      </ContainerBook>
      <Footer />
    </Container>
  )
}

const BookItem = ({
  data
}) => {
  const img = require('@/assets/img/book/' + data.src)
  return (
    <a href={data.href} target="_blank">
      <ContainerBookItem>
        <BookImageContainer>
          <Image src={img} />
        </BookImageContainer>
        <Typography variant='body1'>{data.title}</Typography>
      </ContainerBookItem>
    </a>
  )
}

export const ContainerHeader = styled.div`
    background: #434350;
    height: 126px;
    position: relative;
    padding-top: 58px;
`

const Container = styled.div`
`

const ContainerBook = styled.div`
  max-width: 952px;
  margin: auto;
  padding-top: 57px;
`
const ContainerBookItem = styled.div`
  text-align: center;
`
const BookImageContainer = styled.div`
  background-color: #88889E;
  width: 277px;
  height: 277px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
`
const Image = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
`

export default Book
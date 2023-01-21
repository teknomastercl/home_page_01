import React from 'react'
import { Container, ContainerHeader } from './Home.style'
import Header from '@/modules/home/Header'
import Customers from '@/modules/home/Customers/Customers'
import Services from '@/modules/home/Services/Services'
import Book from '@/modules/home/Book/Book'
import AboutUs from '@/modules/home/AboutUs/AboutUs'
import Comment from '@/modules/home/Comment/Comment'

const Home = () => {
  return (
    <Container>
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      <Customers />
      <Services />
      <Book />
      <AboutUs />
      <Comment />
    </Container>
  )
}

export default Home
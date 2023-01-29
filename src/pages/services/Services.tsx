import HeaderTop from '@/modules/home/Header/HeaderTop/HeaderTop';
import styled from '@emotion/styled';
import React from 'react'
import ParticlesBG from './ParticlesBG/ParticlesBG';
import ReactFullpage from '@fullpage/react-fullpage';
import RootPage from './Pages/RootPage/RootPage';
import DesignPage from './Pages/DesignPage/DesignPage';
import WebPage from './Pages/WebPage/WebPage';
import BackendPage from './Pages/BackendPage/BackendPage';
import AppPage from './Pages/AppPage/AppPage';

const Services = () => {
  return (
    <Container>
      <ContainerMenu>
        <HeaderTop />
      </ContainerMenu>
      <ParticlesBG />
      <ReactFullpage
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Section className="section">
                <RootPage fullpageApi={fullpageApi} />
              </Section>
              <Section className="section">
                <DesignPage />
              </Section>
              <Section className="section">
                <WebPage />
              </Section>
              <Section className="section">
                <BackendPage />
              </Section>
              <Section className="section">
                <AppPage />
              </Section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Container>
  )
}

const Section = styled.div``

const Container = styled.div`
  background: #434350;
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
  margin-top: 58px;
`

export default Services
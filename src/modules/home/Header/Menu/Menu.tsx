import { randomIntFromInterval } from '@/utils/helpers'
import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import ContactDesc from '../../Contact/ContactDesc'
import RedesSociales from '../../Footer/RedesSociales'

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className={container}>
            <Grid container justifyContent="flex-end" alignItems="center">
                <Grid item container xs={12} className={onlyMobileShow}>
                    <IconBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
                </Grid>
                <Grid item container xs={12} className={onlyMobileHide}>
                    <Grid item container xs>
                        <div className={css`width: 127px;`}>
                            <a href="services">
                                <Typography variant="body1" color="white"><b>Servicios</b></Typography>
                            </a>
                        </div>
                    </Grid>
                    <Grid item container xs>
                        <div className={css`width: 127px;`}>
                            <a href="book">
                                <Typography variant="body1" color="white"><b>Portafolio</b></Typography>
                            </a>
                        </div>
                    </Grid>
                    <Grid item container xs>
                        <div className={css`width: 127px;`}>
                            <a href="aboutus">
                                <Typography variant="body1" color="white"><b>Nosotros</b></Typography>
                            </a>
                        </div>
                    </Grid>
                    <Grid item container xs>
                        <a href="contact">
                            <div className={css`width: 230px;`}>
                                <Button className={buttonCss} variant='contained'>Cotizar Proyecto</Button>
                            </div>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
            <MenuOverlay active={openMenu} />
        </div>
    )
}

const IconBar = ({ openMenu, setOpenMenu }) => {
    return (
        <IconBarContainer id="nav-icon2" className={openMenu ? 'open' : ''} onClick={() => setOpenMenu(!openMenu)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </IconBarContainer>
    )
}

const MenuOverlay = ({ active }) => {
    const classActive = active ? activeMenuTitle : ''
    return (
        <MenuOverlayContainer className={active ? activeMenuOverlay : ''}>
            <ItemMenu href="/services" style={{ transform: `translateX(${randomIntFromInterval(0, 100) + 'vw'})` }} className={classActive}>Servicios</ItemMenu>
            <ItemMenu href="/book" style={{ transform: `translateX(${randomIntFromInterval(0, 100) + 'vw'})` }} className={classActive}>Portafolio</ItemMenu>
            <ItemMenu href="/aboutus" style={{ transform: `translateX(${randomIntFromInterval(0, 100) + 'vw'})` }} className={classActive}>Nosotros</ItemMenu>
            <ItemMenu href="/contact" style={{ transform: `translateX(${randomIntFromInterval(0, 100) + 'vw'})` }} className={classActive}>Pide tu cotización aquí</ItemMenu>
            <ItemMenu href="/" style={{ transform: `translateX(${randomIntFromInterval(0, 100) + 'vw'})` }} className={classActive}>
                <ImageLogo src={require('@/assets/img/logo_full.png')} />
            </ItemMenu>
            <ItemMenu style={{ transform: `translateX(${randomIntFromInterval(0, 100) + 'vw'})` }} className={classActive}>
                <ContactContainer>
                    <ContactDesc rrssOff />
                </ContactContainer>
            </ItemMenu>
            <ItemMenu style={{ transform: `translateX(${randomIntFromInterval(0, 100) + 'vw'})` }} className={classActive}>
                <RedesSociales className={redesSocialesStyle + ' ' + classActive} />
            </ItemMenu>
        </MenuOverlayContainer >
    )
}

export const container = css`
    max-width: 626px;
    margin-top: 15px;
    justify-content:flex-end;
    display:flex;
    z-index: 100000000;
    position: relative;
`
export const buttonCss = css`
    background-image: linear-gradient(to right, #5dd7f7, #7dc0ff, #c49ff3, #f47ab4, #f36d62);
    font-weight: bold !important;
`

export const activeMenuOverlay = css`
    opacity: 1 !important;
    transform: translateX(0) !important;
`

export const activeMenuTitle = css`
    opacity: 1 !important;
    transform: translateX(0) !important;
`
export const IconBarContainer = styled.div``
export const ItemMenu = styled.a`
    opacity: 0;
    transition: opacity 1s, transform 1s;
    color: white !important;
    padding-bottom: 40px;
    font-size: 24px;
`
export const MenuOverlayContainer = styled.div`
    transition: opacity 0.5s, transform 0.5s;
    transform: translateX(100vw);
    opacity: 0;
    background: #434350;
    position: fixed !important;
    top:0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 100000000;
    position:relative;
    display: flex;
    flex-direction: column;
    padding: 80px;

`
const onlyMobileShow = css`
        display: none !important;
    @media (max-width: 1300px) {
        display: block !important;
    }
`
const onlyMobileHide = css`
    @media (max-width: 1300px) {
        display: none !important;
    }
`
const redesSocialesStyle = css`
   transform: scale(1.5) translateX(35px);
`

const ImageLogo = styled.img`
    margin-top: 100px;
`

const ContainerInfo = styled.div`
    height: 540px;
`

const ContactContainer = styled.div`
    margin-bottom: 10px;
`


export default Menu
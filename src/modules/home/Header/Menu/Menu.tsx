import { randomIntFromInterval } from '@/utils/helpers'
import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import ContactDesc from '../../Contact/ContactDesc'
import RedesSociales from '../../Footer/RedesSociales'
import HouseIcon from '@mui/icons-material/House';
import { Link } from 'react-router-dom'

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
                            <Link to="/services">
                                <Typography variant="body1" color="white"><b>Servicios</b></Typography>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item container xs>
                        <div className={css`width: 127px;`}>
                            <Link to="/book">
                                <Typography variant="body1" color="white"><b>Portafolio</b></Typography>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item container xs>
                        <div className={css`width: 127px;`}>
                            <Link to="/aboutus">
                                <Typography variant="body1" color="white"><b>Nosotros</b></Typography>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item container xs>
                        <Link to="/contact">
                            <div className={css`width: 230px;`}>
                                <Button className={buttonCss} variant='contained'>Cotizar Proyecto</Button>
                            </div>
                        </Link>
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
            <Link to="/" className={itemMenu + ' ' + classActive} style={{ transform: `translateX(${randomIntFromInterval(0, 100) + 'vw'})` }}>
                <ImageLogo src={require('@/assets/img/logo_full.png')} />
            </Link>
            <Link to="/" className={itemMenu + ' ' + classActive} style={{ transform: `translateX(${randomIntFromInterval(0, 100) + 'vw'})` }}>
                <HouseIcon />
            </Link>
            <Link to="/services" className={itemMenu + ' ' + classActive} style={{ transform: `translateX(${randomIntFromInterval(0, 100) + 'vw'})` }}>Servicios</Link>
            <Link to="/book" className={itemMenu + ' ' + classActive} style={{ transform: `translateX(${randomIntFromInterval(0, 100) + 'vw'})` }}>Portafolio</Link>
            <Link to="/aboutus" className={itemMenu + ' ' + classActive} style={{ transform: `translateX(${randomIntFromInterval(0, 100) + 'vw'})` }}>Nosotros</Link>
            <Link to="/contact" className={itemMenu + ' ' + classActive} style={{ transform: `translateX(${randomIntFromInterval(0, 100) + 'vw'})` }}>Pide tu cotización aquí</Link>
            <div className={itemMenu + ' ' + classActive} style={{ transform: `translateX(${randomIntFromInterval(0, 100) + 'vw'})` }}>
                <ContactContainer>
                    <ContactDesc rrssOff />
                </ContactContainer>
            </div>
            <div className={itemMenu + ' ' + classActive} style={{ transform: `translateX(${randomIntFromInterval(0, 100) + 'vw'})` }}>
                <RedesSociales className={redesSocialesStyle + ' ' + classActive} />
            </div>
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
export const itemMenu = css`
    opacity: 0;
    transition: opacity 1s, transform 1s;
    color: white !important;
    padding-bottom: 12px;
    font-size: 18px;
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
    padding: 28px;
    padding-top: 120px;

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
    margin-bottom: 58px;
`

const ContainerInfo = styled.div`
    height: 540px;
`

const ContactContainer = styled.div`
    padding-top: 27px;
    margin-bottom: 10px;
`


export default Menu
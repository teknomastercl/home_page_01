import React from 'react'
import ContactFormulario from '@/modules/home/Contact/Contact'
import HeaderTop from '@/modules/home/Header/HeaderTop/HeaderTop'
import styled from '@emotion/styled'
import Awards from '@/modules/home/Header/Awards/Awards'
import Footer from '@/modules/home/Footer/Footer'

const Contact = () => {
    return (
        <div>
            <ContainerHeader>
                <HeaderTop />
            </ContainerHeader>
            <ContactFormulario />
            <Footer />
        </div>
    )
}

export const ContainerHeader = styled.div`
    background: #434350;
    height: 126px;
    position: relative;
    padding-top: 58px;
`

export const ContainerAwards = styled.div`
    max-width: 794px;
    margin:auto;
    padding-top: 80px;

`

export default Contact
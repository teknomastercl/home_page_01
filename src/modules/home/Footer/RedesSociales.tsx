import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { css } from '@emotion/css';

interface Props {
    className?: string
}
const RedesSociales:React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <a href="https://www.facebook.com/teknomaster.cl" target="_blank">
                <FacebookIcon className={iconStyle} />
            </a>
            <a href="https://www.instagram.com/teknomaster.cl/" target="_blank">
                <InstagramIcon className={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/in/tekno-master-ab7560202/" target="_blank">
                <LinkedInIcon className={iconStyle} />
            </a>
        </div>
    )
}
const iconStyle = css`
    color:white;
    padding-left:10px;
`
export default RedesSociales
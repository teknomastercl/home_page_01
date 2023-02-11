import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typography } from '@mui/material';
import { css } from '@emotion/css';
import { numberWithSpaces } from '@/utils/helpers';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const supportData = require('@/dummy/support.json')

interface Props {
    rrssOff?: boolean
}

const ContactDesc: React.FC<Props> = ({
    rrssOff
}) => {
    return (
        <>
            <div className={containerContact}>
                <LocalPhoneIcon className={iconStyle} fontSize={'large'} />
                <a href={'tel:' + supportData.phone}>
                    <Typography variant="h6" color="white" className={titleStyle}>
                        {numberWithSpaces(supportData.phone, '#### #### ####')}
                    </Typography>
                </a>
            </div>
            <div className={containerEmail}>
                <EmailIcon className={iconStyle} fontSize={'large'} />
                <a href={'mailto:' + supportData.email}>
                    <Typography variant="h6" color="white" className={titleStyle}>
                        {supportData.email}
                    </Typography>
                </a>
            </div>
            {
                !rrssOff && (
                    <>
                        <div className={containerEmail}>
                            <InstagramIcon className={iconStyle} fontSize={'large'} />
                            <a href={supportData.instagram} target="_blank">
                                <Typography variant="h6" color="white" className={titleStyle}>
                                    Consulta por Instragam
                                </Typography>
                            </a>
                        </div>
                        <div className={containerEmail}>
                            <FacebookIcon className={iconStyle} fontSize={'large'} />
                            <a href={supportData.facebook} target="_blank">
                                <Typography variant="h6" color="white" className={titleStyle}>
                                    Consulta por Facebook
                                </Typography>
                            </a>
                        </div>
                        <div className={containerEmail}>
                            <LinkedInIcon className={iconStyle} fontSize={'large'} />
                            <a href={supportData.linkedin} target="_blank">
                                <Typography variant="h6" color="white" className={titleStyle}>
                                    Consulta por Linkedin
                                </Typography>
                            </a>
                        </div>
                    </>
                )
            }
        </>
    )
}

const containerContact = css`
    display:flex;
    margin-top: 30px;
`
const containerEmail = css`
    display:flex;
`
const iconStyle = css`
    color:white;
    font-size: 38px;
    padding-right: 10px;
`
const titleStyle = css`
    padding-top: 3px;
`

export default ContactDesc
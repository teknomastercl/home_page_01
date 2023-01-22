import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@mui/material';
import { css } from '@emotion/css';

const ContactDesc = () => {
    return (
        <>
            <div className={containerContact}>
                <LocalPhoneIcon className={iconStyle} fontSize={'large'} />
                <Typography variant="h6" color="white" className={titleStyle}>
                    +569 6631 7533
                </Typography>
            </div>
            <div className={css`display:flex`}>
                <EmailIcon className={iconStyle} fontSize={'large'} />
                <Typography variant="h6" color="white" className={titleStyle}>
                    teknomaster@gmail.com
                </Typography>
            </div>
        </>
    )
}

const containerContact = css`
    display:flex;
    margin-top: 30px;
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
import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>    
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUpAll>Get The Disney Bundle</SignUpAll>
                <LegalText>Stream now. <span>Terms apply.</span></LegalText>
                <CTALogoTwo src="/images/cta-logo-two.png" />
                <SignUpDisney><span>Sign up for Disney+ only.
                </span>$7.99/month</SignUpDisney>
            </CTA>        
        </Container>
    )
}

export default Login

const Container = styled.main`
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        background: url('/images/login-background.jpg') center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -10;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
`
const CTALogoOne = styled.img`
`
const CTALogoTwo = styled.img`
`


const SignUpAll = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-size: 18px;
    border-radius: 4px;
    margin-top: 12px;
    margin-bottom: 30px;
    padding: 17px 0;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 250ms;
    letter-spacing: 1.5px;

    &:hover{
        background: #0483ee;
    }
`

const LegalText = styled.div`
    font-size: 10px;
    text-align: center;
    color: rgba(192, 192, 192, 0.8);
    line-height: 1.5;
    margin-bottom: 24px;

    span{
        text-decoration: underline;
        cursor: pointer;
        color: white;
    }
`

const SignUpDisney = styled.a`
    font-size: 1.1em;
    margin-top: 24px;
    text-align: center;
    cursor: pointer;
    line-height: 1.5;
    display: flex;
    flex-direction: column;

    color: rgba(192, 192, 192, 0.8);

    span{
        text-decoration: underline;
        color: white;
    }
`

import React from 'react'
import styled from 'styled-components'

function NotFound() {
    return (
        <Container>
            <Content>
                <ErrorMsg>The page you were looking for cannot be found.</ErrorMsg>    
                <BackHome href='/'>Disney+ Home</BackHome> 
            </Content>
        </Container>
    )
}

export default NotFound

const Container = styled.main`
    min-height: calc(100vh - 70px);
    position: relative;
    display: flex;
    flex-direction: column;
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

const Content = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
`

const ErrorMsg = styled.h2`
text-align: center;
color: white;
line-height: 1.5;
font-size: 2.2em;
`
const BackHome = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-size: 18px;
    border-radius: 4px;
    margin-top: 12px;
    margin-bottom: 30px;
    padding: 17px 0;
    text-align: center;
    cursor: pointer;
    transition: background 250ms;
    letter-spacing: 1.5px;

    color: white;
    text-transform: uppercase;
    text-decoration: none;


    &:hover{
        background: #0483ee;
    }
`
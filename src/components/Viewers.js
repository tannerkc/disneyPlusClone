import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <MainWrapper>
                <Wrap>
                    <img src="/images/viewers-disney.png" alt=""/>

                    <video class="hover-image" width="320" height="240" loop autoPlay playsInline muted>
                        <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
                    </video>
                </Wrap>
            </MainWrapper>
            <MainWrapper>
                <Wrap>
                    <img src="/images/viewers-pixar.png" alt=""/>

                    <video class="hover-image" width="320" height="240" loop autoPlay playsInline muted>
                        <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
                    </video>
                </Wrap>
            </MainWrapper>
            <MainWrapper>
                <Wrap>
                    <img src="/images/viewers-marvel.png" alt=""/>
                    
                    <video class="hover-image" width="320" height="240" loop autoPlay playsInline muted>
                        <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
                    </video>
                </Wrap>
            </MainWrapper>
            <MainWrapper>
                <Wrap>
                    <img src="/images/viewers-starwars.png" alt=""/>
                    
                    <video class="hover-image" width="320" height="240" loop autoPlay playsInline muted>
                        <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
                    </video>
                </Wrap>
            </MainWrapper>
            <MainWrapper>
                <Wrap>
                    <img src="/images/viewers-national.png" alt=""/>
                    
                    <video class="hover-image" width="320" height="240" loop autoPlay playsInline muted>
                        <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
                    </video>
                </Wrap>
            </MainWrapper>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`
const MainWrapper = styled.div`
    border-radius: 10px;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
    overflow: hidden;
    transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    }


`
const Wrap = styled.div`
    cursor: pointer;
    background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
    height: 100%;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .hover-image{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
        z-index: -1;
        display: none;
    }
    &:hover{
        background: none;

        .hover-image{
            display: block;
        }
    }
`

import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from 'react-redux'

function Movies() {

    const movies = useSelector(selectMovies)
    console.log(movies)

    let slidesValue = 4;

    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;
    function displayWindowSize() {
        // your size calculation code here
        console.log(window.innerWidth)
        if(window.innerWidth < 1050){
            slidesValue = 3
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesValue,
        slidesToScroll: 3
      };

    return (
        <Container>
            <h3>Recommended for You</h3>
            <Carousel {...settings}>
                {
                    movies && 
                    movies.map((movie)=>(
                        <LinkWrapper href={`/detail/${movie.id}`}>
                            <Wrap id={movie.id}>
                                <img src={movie.cardImg} alt=""/>
                            </Wrap>
                        </LinkWrapper>
                    ))
                }
            </Carousel>
        </Container>
    )
}

export default Movies

const Container = styled.div`
`

const Carousel = styled(Slider)`
    margin-top:20px;
    position: relative;
    

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow: visible;
        left: -10px;
    }

    .slick-slide{
        div{
            margin: 0 10px;
        }
    }

    .slick-arrow{
        height: 100%;
        background: rgba(0, 0, 0, .5);
        position: absolute;
    }
    
    button.slick-arrow.slick-prev {
        width: 4.5%;
        left: -5%;
    }
    button.slick-arrow.slick-next {
        width: 4.5%;
        right: -5%;
    }

    button{
        z-index: 1;
    }
`

const LinkWrapper = styled.a`
`

const Wrap = styled.div`
    border-radius: 5px;
    width: 100%;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249,249,249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
        border: 3px solid rgba(249,249,249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    }
`
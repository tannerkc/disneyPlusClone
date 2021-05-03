import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'
import {
    selectUserName,
    selectUserEmail,
    selectUserPhoto,
    setUserLogin,
    setSignOut
} from '../features/user/userSlice'
import { useSelector, useDispatch } from "react-redux" 
import { auth, provider } from '../firebase'

function Header() {
    let [bgColor, setBg] = useState("transparent");
    let scrollpos = window.scrollY
    
    window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY;
    
      if (scrollpos >= 20) { setBg("#090b13") }
      else { setBg("transparent") }
    
      console.log(bgColor)
    })

    const dispatch = useDispatch();
    const history = useHistory();

    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user = result.user
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }))
            history.push('/')
        })
    }

    const signOut = () =>{
        auth.signOut().then(()=>{
            dispatch(setSignOut());
            history.push('/login')
        })
    }


    useEffect(() => {
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                }))
            }
            else{ history.push('/login') }
        })
    }, [])

    return (
        <Nav style={{background: bgColor}}>
            <Logo src="/images/logo.svg" />
            {
                !userName ?
                <LoginContainer>
                    <Login onClick={signIn}>Login</Login> 
                </LoginContainer>
                :
                <>
                <NavMenu>
                    <a href="/">
                        <img src="/images/home-icon.svg" alt=""/>
                        <span>HOME</span>
                    </a>
                    <a href="/">
                        <img src="/images/search-icon.svg" alt=""/>
                        <span>SEARCH</span>
                    </a>
                    <a href="/">
                        <img src="/images/watchlist-icon.svg" alt=""/>
                        <span>WATCHLIST</span>
                    </a>
                    <a href="/">
                        <img src="/images/original-icon.svg" alt=""/>
                        <span>ORIGINALS</span>
                    </a>
                    <a href="/">
                        <img src="/images/movie-icon.svg" alt=""/>
                        <span>MOVIES</span>
                    </a>
                    <a href="/">
                        <img src="/images/series-icon.svg" alt=""/>
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                <UserContainer>
                    <UserImage onClick={signOut} src={userPhoto} />
                </UserContainer>
                </>
            }
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    z-index: 999;

    transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    align-items: center;

    a{
        display: flex;
        text-decoration: none;
        color: white;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        text-transform: uppercase;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            margin-left: 5px;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

const UserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid transparent;

    &:hover{
        border: 1px solid white;
    }
`

const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0,0,0,.6);
    cursor: pointer;
    transition: all .2s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
    }
`
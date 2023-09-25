import React from 'react'
import styled from 'styled-components'
import logo from './sissors.png'

const NavBarFrame = styled.div`
    background: gray;
    box-shadow: 0px 1px 5px black;
    height: 50px;
    color: white;
    display: flex;
    align-items: center;
    padding-left: 20px;
`

const ToggleButton = styled.div`
    cursor: pointer;
    color: white;
    font-size: 70px;
    background: transparent;
    text-shadow: 1px 1px 3px black;
    border: none;
    margin-top:-10px;
`

const Title = styled.div`
    cursor: pointer;
    color: white;
    font-size: 20px;
    background: transparent;
    text-shadow: 1px 1px 3px black;
    border: none;
`

const NavBar = ({onMenuClick}) =>
{
    return (
        <NavBarFrame>
            <ToggleButton onClick={onMenuClick}>
                &#8801;
            </ToggleButton> 
            <img style={{width: '30px', marginLeft: '20px'}} src={logo}></img>
            {/* <Title>Patricia Salón Integral</Title> */}
            <img style={{width: '30px'}} src={logo}></img>
        </NavBarFrame>
    )
}

export default NavBar
import { colors, fontSize } from "@/assets/styles/constants"
import { useNavigate } from "react-router"
import styled, { css } from "styled-components"
import { NavbarPros } from './types/Navbar'

function Navbar({title, onGoBack, className}:NavbarPros) {
    const navigate = useNavigate()

    function onGoBackClick() {
        if (typeof onGoBack === "function"){
            return onGoBack()
        }    
        navigate(onGoBack || '/')
    } 

    return (
        <Container className={'neon-text ' + className}>
            <span className="go-back">
                {onGoBack && <div onClick={onGoBackClick}>
                    <i className="fa-solid fa-chevron-left c-pointer"/> 
                    Go back
                </div> }
            </span>
            <span className="navbar-title">{title}</span>
            <div></div>
        </Container>
    )
}

export default Navbar

//#region styles
const height = '90px'
const Container = styled.div`
    //positioning
    position: relative;

    //box-model
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    height: ${height};
    max-height: ${height};
    min-height: ${height};
    min-width: 100%;

    //typography
    font-size: ${fontSize.sm};
    font-weight: 800;

    //visual
    background: rgb(${colors.black}, 0.8);

    .navbar-title{
        pointer-events: none;
        margin: auto;
        font-size: 50px;
        font-weight: 800;
        max-height: 100%;
    }    
    span{
        display: flex;
        align-items: center;
    }
    &::after{
        content: '';
        //position
        position: absolute;
        bottom: 0;

        //box-model
        display: block;
        min-width: 100%;
        min-height: 5px;
        //animation
        animation: loading 3s alternate infinite forwards;
    }
    .go-back {
        //typography
        font-size: 40px;
        margin: auto auto auto 40px ;
        i{
            margin-right: 40px;
        }
    }

    @keyframes loading {
        ${createAnimation()}
    }
`

function createAnimation(){
    const step = 1
    let animation = ''
    for (var i = 0; i <= 100; i = i + step){
        animation += `
        ${i}% {
            background: linear-gradient(to right, rgba(${colors.green}, ${1 - i/100}), rgba(${colors.green}, ${i/100}), rgba(${colors.green}, ${1 - i/100}));        
        }
        `
    }
    return css`${animation}`;
}
//#endregion
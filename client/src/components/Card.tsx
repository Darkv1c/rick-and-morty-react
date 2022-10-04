import { colors, breakPoints } from "@/assets/styles/constants"
import { useState } from "react"
import styled, { css, CSSObject } from "styled-components"
import { CardProps } from './types/Card'

function Card({ image, fields }: CardProps) {
    let [showText, setShowText] = useState(false)
    let showTextFunction: ReturnType<typeof setTimeout>

    function setShowTextFunction(show: boolean) {
        clearTimeout(showTextFunction)
        showTextFunction = setTimeout(() => { setShowText(show) }, 230);
    }

    /** Ruturns a list with the props of the object
    * @example [{name: 'Jhon'}, {'last-name': 'Doe'}]
    */
    function cardFields(): { [prop: string]: string }[] {
        let propsArray = []

        for (let prop in fields) {
            propsArray.push({ [prop]: fields[prop as keyof {}] })
        }

        return propsArray
    }

    return (
        <Container image={image} onMouseOver={() => setShowTextFunction(true)} onMouseLeave={() => setShowTextFunction(false)}>
            <div className="card-sub-container neon-text">
                <div style={showText ? { display: 'flex' } : { display: 'none' }} className="card-text-container d-flex">
                    {cardFields().map((prop, n) =>
                        <span key={'prop' + n}>
                            {Object.keys(prop)[0]}: {prop[Object.keys(prop)[0]]}
                        </span>
                    )}
                </div>
            </div>
        </Container >
    )
}

export default Card

//#region Styles
const Container = styled.div.attrs((props: { image: unknown }) => ({ image: props.image || '' }))`
    max-width: 250px;
    max-height: 250px;
    min-width: 150px;
    min-height: 150px;
    border-radius: 40px;
    margin: 12px;
    cursor: pointer;
    aspect-ratio: 1/1;
    flex: 0 1 25%;
    .card-sub-container{
        background-image: url(${props => props.image as CSSObject});
        background-size: cover;
        transition: all .5s ease-in-out;
        min-width: 100%;
        min-height: 100%;
        border-radius: 40px;
        position: relative  ;
        .card-text-container{
            display: flex;
            flex-direction: column;
            background: linear-gradient(to bottom, rgba(${colors.black}, .8), rgba(${colors.black}, .5), rgba(${colors.black}, .8), 
            rgba(${colors.black}, .5), rgba(${colors.black}, .8), rgba(${colors.black}, .5));
            min-width: 100%;
            min-height: 100%;
            border-radius: 40px;
            position: absolute;
            transform: rotatey(180deg);
            box-sizing: border-box;
            padding: 10%;
            animation: gradientChange;
            animation-delay: 0;
            animation-duration: .15s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }
    }
    &:hover > .card-sub-container {
        transform: rotatey(180deg);
        transition: all .5s ease-in-out 0s;                
    }

    @keyframes gradientChange {
        ${animateGradientChange()}
    }

    @media screen and (max-width: ${breakPoints.phone}) {
        &{
            display: flex;
            min-width: 100%;
            margin: 0;
            background: rgba(${colors.black}, 0.5);
            max-height: 30px;
            border-radius: 0;
            position: relative;
            .card-sub-container{
                border-radius: 0;
                max-height: 100%;
                min-width: 0%;
                aspect-ratio: 1/1;
                position: static;
                &:hover{
                    transform: none;
                }
                .card-text-container{
                    position: absolute;
                    max-height: 100%;
                    display: flex !important;
                    justify-content: center;
                    left: 0;
                    transform: rotateY(0deg);
                    border-radius: 0;
                    animation-name: none;
                    background: transparent;
                    span{
                        max-width: 50%;
                    }
                    &:hover{
                        animation-name: gradientChange;
                    }
                }
            }
        }

        .card-text-container {
           align-items: flex-end;
        }
        &:nth-child(2n){
            flex-direction: row-reverse;
             .card-text-container {
            align-items: flex-start;
        }
        }
    }
`

function animateGradientChange() {
    const base = 0.6
    const range = 0.3
    let animation = ''
    for (let i = 0; i <= 100; i += 1) {
        animation += `
            ${i}% {
                background: repeating-linear-gradient(to bottom, rgba(${colors.black}, ${base + range * (i / 100)}), 
                rgba(${colors.black}, ${base + (range - range * (i / 100))}), rgba(${colors.black}, ${base + range * (i / 100)}), 
                rgba(${colors.black}, ${base + (range - range * (i / 100))}) 10%);
            }
        `
    }
    return css`${animation}`
}
//#endregion
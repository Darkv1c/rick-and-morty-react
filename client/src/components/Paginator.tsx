import { colors, fontSize } from '@/assets/styles/constants';
import { useQuery } from '@/utils';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import styled, { css } from 'styled-components';
import { PaginatorProps } from './types/Paginator';

function Paginator({ maxPerView, lastIndex, onClick }: PaginatorProps) {
	const [block, setBlock] = useState(0)
	const navigate = useNavigate()
	const pagesArray = Array.apply(null, Array(maxPerView))

	function isLastBlock() {
		return block === Math.trunc(lastIndex / maxPerView)
	}

	/** It passes by query the page to go */
	function goToPage(page: number) {
		navigate({search: '?page=' + page})
		onClick(page)
	}
	/** It shows previous indexes */
	function goToPreviousBlock() {
		setBlock(block => block -= 1)
	}
	/** It shows next indexes */
	function goToNextBlock() {
		setBlock(block => block += 1)
	}


	return (
		<Container className="neon-text">
			{block > 0 && <span onClick={goToPreviousBlock} className="page-index c-pointer">Prev</span>}
			{pagesArray.map((_, n) => (
				(maxPerView * block + n + 1) <= lastIndex && <span key={'pag' + n} className="c-pointer page-index" onClick={() => goToPage((maxPerView * block) + n + 1)}>
					{maxPerView * block + n + 1}
				</span>
			))}
			{!isLastBlock() && <span onClick={goToNextBlock} className="page-index c-pointer">Next</span>}
		</Container>
	)
}

export default Paginator

//#region styles
const Container = styled.div`
	//positioning
	position: relative;
	//box-model
	display: flex;
	justify-content: center;
	box-sizing: border-box;
	padding: 10px;
	height: 100px;
	min-height: 50px;
	max-width: 100vw;
	overflow-x: hidden;
	//typography
	font-family: "Courier New", Courier, monospace;
	font-weight: 800;
	font-size: ${fontSize.m};

	//visual
	background: rgb(${colors.black}, 0.8);

	.page-index {
		//box-model
		padding: 3px;
		margin: 5px 3px;
		max-height: fit-content;
		//animation
		animation: distortion 0.1s 0s forwards;
	}
	&::before {
		content: "";
		//position
		position: absolute;
		top: 0;
		//box-model
		min-width: 100%;
		min-height: 5px;
		//visusal
		background: beige;
		//animation
		animation: loading 3s alternate infinite forwards;
	}

	@keyframes loading {
		${createAnimation()}
	}
`


function createAnimation() {
	const step = 1
	let animation = ''
	for (var i = 0; i <= 100; i = i + step) {
		animation += `
      ${i}% {
          background: linear-gradient(to right, rgba(${colors.green}, ${1 - i / 100}), rgba(${colors.green}, ${i / 100}), rgba(${colors.green}, ${1 - i / 100}));        
      }
      `
	}
	return css`${animation}`;
}
//#endregion
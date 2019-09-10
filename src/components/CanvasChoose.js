import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
	width: 100%;
	height: 100%;
`;

export default function Choose() {
	const canvasRef = useRef(null);
	useEffect(() => {
		const ctx = canvasRef.current.getContext('2d');
		ctx.beginPath();
		ctx.arc(100, 75, 50, 0, 2 * Math.PI);
		ctx.stroke();
	});
	return (
		<Canvas
			ref={canvasRef}
		/>
	);
}
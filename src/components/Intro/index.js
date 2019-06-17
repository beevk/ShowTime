import React from 'react';

const Intro = (props) => {
	let initialPosition = {
		x: null,
		y: null
	};

	const moveImage = (e) => {
		e.preventDefault();

		const diff = {
			x: initialPosition.x - e.nativeEvent.offsetX,
			y: initialPosition.y - e.nativeEvent.offsetY
		};

		const elem = e.target;
		elem.style.backgroundPositionX = diff.x / 2 + 'px';
		elem.style.backgroundPositionY = diff.y / 2 + 'px';
	};

	const reset = () => {
		initialPosition.x = null;
		initialPosition.y = null;
	};

	const setInitialValue = (e) => {
		initialPosition.x = e.nativeEvent.offsetX;
		initialPosition.y = e.nativeEvent.offsetY;
	};

	return (
		<p className="description" onMouseMove={moveImage} onMouseLeave={reset} onMouseEnter={setInitialValue}>
			{props.message}
		</p>
	);
};

export default Intro;

import {useCurrentFrame, interpolate, AbsoluteFill} from 'remotion';

export const SlideInText = (props) => {
	const {children} = props;
	const direction = 'left';
	const frame = useCurrentFrame();
	const translateX = interpolate(frame, [0, 30], [-1000, 0], {
		extrapolateRight: 'clamp',
	});

	const translateY = interpolate(frame, [0, 30], [0, 0], {
		extrapolateRight: 'clamp',
	});

	const style = {
		transform: `translate(${direction === 'left' ? translateX : -translateX}px, ${translateY}px)`,
		transition: 'transform 1s ease-out',
		fontSize: '50px',
	};

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#555555',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				width: '100%',
				color: 'white',
			}}
		>
			<div style={style}>{children}</div>
		</AbsoluteFill>
	);
};

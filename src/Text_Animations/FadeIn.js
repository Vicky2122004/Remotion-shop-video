import {useCurrentFrame, interpolate, AbsoluteFill} from 'remotion';

export const FadeInText = (props) => {
	const {children} = props;
	// Interpolate the current frame number between 0 and 30,
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#555555',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				width: '100%',
			}}
		>
			<div
				style={{
					opacity,
					transition: 'opacity 1s',
					fontSize: '40px',
					color: 'whitesmoke',
				}}
			>
				{children}
			</div>
		</AbsoluteFill>
	);
};

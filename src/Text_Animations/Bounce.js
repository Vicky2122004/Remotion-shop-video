import {useCurrentFrame, interpolate, AbsoluteFill} from 'remotion';

export const BounceText = (props) => {
	const {children} = props;
	const frame = useCurrentFrame();
	const translateY = interpolate(frame, [0, 30, 60], [0, -50, 0], {
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
					transform: `translateY(${translateY}px)`,
					transition: 'transform 0.5s',
					color: 'whitesmoke',
					fontSize: '50px',
				}}
			>
				{children}
			</div>
		</AbsoluteFill>
	);
};

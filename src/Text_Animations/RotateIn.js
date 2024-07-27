import {useCurrentFrame, interpolate, AbsoluteFill} from 'remotion';

export const RotateInText = (props) => {
	const {children} = props;
	const frame = useCurrentFrame();
	const rotate = interpolate(frame, [0, 70], [-360, 0], {
		extrapolateLeft: 'clamp',
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
					transform: `rotateY(${rotate}deg)`,
					transition: 'transform 1s',
					fontSize: '50px',
					color: 'whitesmoke',
				}}
			>
				{children}
			</div>
		</AbsoluteFill>
	);
};

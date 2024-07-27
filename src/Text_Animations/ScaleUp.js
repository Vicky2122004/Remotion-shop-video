import {useCurrentFrame, interpolate, AbsoluteFill} from 'remotion';

export const ScaleUpText = (props) => {
	const {children} = props;
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, 30], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#555555',
				height: '100%',
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					transform: `scale(${scale})`,
					transition: 'transform 1s',
					fontSize: '50px',
					color: 'white',
				}}
			>
				{children}
			</div>
		</AbsoluteFill>
	);
};

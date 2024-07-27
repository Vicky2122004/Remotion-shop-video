import {useCurrentFrame, interpolate, AbsoluteFill} from 'remotion';

export const WipeText = (props) => {
	const {children} = props;
	const frame = useCurrentFrame();
	const width = interpolate(frame, [0, 30], [0, 100], {
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
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					borderRight: `${width}px solid black`,
					fontSize: '50px',
					color: 'whitesmoke',
				}}
			>
				{children}
			</div>
		</AbsoluteFill>
	);
};

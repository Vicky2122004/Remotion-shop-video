import {useCurrentFrame, interpolate, AbsoluteFill} from 'remotion';

export const ShadowText = (props) => {
	const {children} = props;
	const frame = useCurrentFrame();
	const shadowOffset = interpolate(frame, [0, 60], [0, 20], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'whitesmoke',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				width: '100%',
			}}
		>
			<div
				style={{
					fontFamily: 'sans-serif',
					fontSize: '50px',
					color: '#555555',
					textShadow: `${shadowOffset}px ${shadowOffset}px 5px rgba(0,0,0,0.5)`,
				}}
			>
				{children}
			</div>
		</AbsoluteFill>
	);
};

import {useCurrentFrame, interpolate, AbsoluteFill} from 'remotion';

const WaveText = (props) => {
	const {children} = props;
	const frame = useCurrentFrame();

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
					fontSize: '48px',
					color: 'white',
				}}
			>
				{children.split('').map((letter, i) => {
					const wave = interpolate(frame - i * 5, [0, 40], [0, -20], {
						extrapolateRight: 'clamp',
					});
					const waveOffset = Math.sin((frame - i * 2) / 10) * wave;
					return (
						<span
							key={i}
							style={{
								display: 'inline-block',
								transform: `translateY(${waveOffset}px)`,
							}}
						>
							{letter}
						</span>
					);
				})}
			</div>
		</AbsoluteFill>
	);
};

export default WaveText;

import {
	AbsoluteFill,
	spring,
	useCurrentFrame,
	interpolate,
	useVideoConfig,
} from 'remotion';
import './Heading.css';

export const Heading = () => {
	const frame = useCurrentFrame();
	// const {fps} = useVideoConfig();
	const opacity = interpolate(frame, [0, 50], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const translate = interpolate(frame, [0, 40], [200, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const translateOffset = translate * 2;
	// const spr = spring({
	// 	frame,
	// 	fps,
	// 	config: {
	// 		mass: 1.8,
	// 		stiffness: 120,
	// 	},
	// });
	return (
		<AbsoluteFill>
			<h1
				style={{
					color: '#4B92DB',
					fontSize: '60px',
					textAlign: 'center',
					opacity,
					transform: `translate(${translateOffset}px)`,
				}}
			>
				Social Media
			</h1>
		</AbsoluteFill>
	);
};

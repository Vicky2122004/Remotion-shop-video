// Collage.js
import {
	Img,
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	spring,
	interpolate,
	Sequence,
} from 'remotion';
import {ImageCollage1} from './ImageCollage1';
import {ImageCollage2} from './ImageCollaging2';

export const ImageCollage2 = () => {
	// Replace these URLs with your image sources

	const frame = useCurrentFrame();
	const {fps, width} = useVideoConfig();

	const spr = spring({
		fps,
		frame,
		from: 0,
		to: 1,
		config: {
			stiffness: 70,
			damping: 100,
		}, // Adjust duration as needed
		durationInFrames: 200,
	});

	const translate = interpolate(frame, [0, 30], [0, 300]);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#555555',
			}}
		>
			<img
				src="https://e0.pxfuel.com/wallpapers/975/533/desktop-wallpaper-paper-walls-neon-plants-iphone-phone-galaxy-cool-neon-phone-thumbnail.jpg"
				style={{
					position: 'absolute',
					left: '3rem', // Adjust positioning as needed
					top: '3rem', // Adjust positioning as needed
					width: '50%',
					height: '50%',
					objectFit: 'cover',
					transform: `scale(${spr}) translateY(${translate}px)`, // Apply spring animation to each image
				}}
			/>
		</AbsoluteFill>
	);
};

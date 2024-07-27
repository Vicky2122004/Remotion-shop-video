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

export const ImageCollage = () => {
	// Replace these URLs with your image sources

	const frame = useCurrentFrame();
	const {fps, width} = useVideoConfig();

	// const spr = spring({
	// 	fps,
	// 	frame,
	// 	from: 0,
	// 	to: 1,
	// 	config: {
	// 		stiffness: 70,
	// 		damping: 100,
	// 	}, // Adjust duration as needed
	// 	durationInFrames: 200,
	// });

	const translate = interpolate(frame, [0, 30], [0, 360 / 3]);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#555555',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
			}}
		>
			<Sequence from={0} durationInFrames={130}>
				<img
					src="https://w7.pngwing.com/pngs/716/528/png-transparent-wartburg-353-car-3d-computer-graphics-sweet-home-3d-object-compact-car-sedan-3d-computer-graphics-thumbnail.png"
					style={{
						position: 'absolute',
						width: '50%',
						height: '50%',
						transform: `rotateY(${translate}deg)`, // Apply spring animation to each image
					}}
				/>
			</Sequence>

			{/* <Sequence from={fps * 1.2} durationInFrames={200}>
				<ImageCollage1 />
			</Sequence>

			<Sequence from={fps * 5} durationInFrames={250}>
				<ImageCollage2 />
			</Sequence> */}
		</AbsoluteFill>
	);
};

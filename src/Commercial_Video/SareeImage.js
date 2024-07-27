import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
	AbsoluteFill,
	interpolate,
	useVideoConfig,
	useCurrentFrame,
	spring,
} from 'remotion';

export const SareeImage = (props) => {
	const {url, src} = props;
	const [image, setImage] = useState();
	const {width, height, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	useEffect(() => {
		axios.get(url).then((apiData) => {
			let image = apiData.data.images[0].filename;
			let file1 = image[0];
			setImage(file1);
		});
	}, []);

	const pic1 = `${src}/${image}`;

	// const scale = Math.min(frame / 10, 1);
	// const scale = interpolate(frame, [0, 60], [0, 1], {
	// 	extrapolateLeft: 'clamp',
	// 	extrapolateRight: 'clamp',
	// });
	// const spr = spring({
	// 	frame,
	// 	fps,
	// 	from: 0,
	// 	to: 1,
	// 	config: {
	// 		damping: 16,
	// 		mass: 1.4,
	// 		stiffness: 129,
	// 	},
	// });
	const opacity = interpolate(frame, [0, 30], [0, 1]);

	// const skew = interpolate(frame, [0, 40], [160, 0], {
	// 	extrapolateLeft: 'clamp',
	// 	extrapolateRight: 'clamp',
	// });
	const zoom = interpolate(frame, [0, 50], [0.5, 1.5], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%',
				}}
			>
				<AbsoluteFill
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						opacity: '0.7',
					}}
				>
					<img
						src={pic1}
						style={{
							height: '70%',
							width: '75%',
							transform: `scale(${zoom})`,
							opacity,
							borderRadius: '15px',
							boxShadow: '2px 5px 12px rgba(0, 0, 0, 0.5)',
							zIndex: 3,
						}}
					/>
				</AbsoluteFill>
			</div>
		</>
	);
};

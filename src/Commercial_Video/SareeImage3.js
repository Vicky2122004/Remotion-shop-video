import axios from 'axios';
import {useEffect, useState} from 'react';
import {
	AbsoluteFill,
	spring,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
} from 'remotion';

export const SareeImage3 = (props) => {
	const {url, src} = props;
	const [image, setImage] = useState();

	useEffect(() => {
		axios.get(url).then((apiData) => {
			let image = apiData.data.images[0].filename;
			let file3 = image[2];
			setImage(file3);
		});
	}, []);
	const pic3 = `${src}/${image}`;

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const rotate3 = interpolate(frame, [0, 60], [0, 360], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const scale3 = interpolate(frame, [0, 60], [0.5, 1.5], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	// const opacity = interpolate(frame, [0, 50], [0, 1]);
	// const spr = spring({
	// 	frame,
	// 	fps,
	// 	from: 0,
	// 	to: 180,
	// 	config: {
	// 		damping: 10,
	// 		mass: 1.7,
	// 	},
	// });
	// const translate = interpolate(frame, [0, 30], [200, 0], {
	// 	extrapolateLeft: 'clamp',
	// 	extrapolateRight: 'clamp',
	// });

	// const rotate = interpolate(frame, [0, 40], [180, 0], {
	// 	extrapolateLeft: 'clamp',
	// 	extrapolateRight: 'clamp',
	// 	easing: (t) => t * (2 - t), // Slow start and end
	// });
	const opacity = Math.sin(frame / 10) * 0.5 + 0.5;

	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				width: '100%',
			}}
		>
			<img
				src={pic3}
				style={{
					position: 'absolute',
					width: '70%',
					height: '70%',
					transform: `rotate(${rotate3}deg) scale(${scale3})`,
					transition: 'opacity 0.3s, transform 0.3s',
					borderRadius: '15px',
					boxShadow: '2px 6px 15px rgba(0, 0, 0, 0.5)',
				}}
			/>
		</AbsoluteFill>
	);
};

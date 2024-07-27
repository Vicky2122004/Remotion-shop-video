import axios from 'axios';
import {useEffect, useState} from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const SareeImage5 = (props) => {
	const {url, src} = props;

	const [image, setImage] = useState();

	useEffect(() => {
		axios.get(url).then((apiData) => {
			let image = apiData.data.images[0].filename;
			let file5 = image[4];
			setImage(file5);
		});
	}, []);
	const pic5 = `${src}/${image}`;
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const x5 = interpolate(frame, [0, 60], [0, 100], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const y5 = interpolate(frame, [0, 60], [0, 100], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	// const opacity = interpolate(frame, [0, 30], [0, 1]);
	// const translate = interpolate(frame, [0, 40], [200, 0], {
	// 	extrapolateLeft: 'clamp',
	// 	extrapolateRight: 'clamp',
	// 	transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
	// });
	// const scale = spring({
	// 	frame,
	// 	fps,
	// 	config: {
	// 		damping: 200,
	// 		stiffness: 100,
	// 	},
	// });
	// const zoom = interpolate(scale, [0, 1], [3, 1], {
	// 	extrapolateLeft: 'clamp',
	// 	extrapolateRight: 'clamp',
	// 	transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
	// });
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					opacity: '0.7',
				}}
			>
				<AbsoluteFill
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backdropFilter: 'blur(6px) saturate(200%)',
						WebkitBackdropFilter: 'blur(6px) saturate(200%)',
						backgroundColor: 'rgba(17, 25, 40, 0.12)',
						borderRadius: '12px',
						border: '1px solid rgba(255, 255, 255, 0.125)',
					}}
				>
					<img
						src={pic5}
						style={{
							position: 'absolute',
							top: y5,
							left: x5,
							width: '100%',
							height: '100%',
							boxShadow: '2px 6px 15px rgba(0, 0, 0, 0.5)',
							borderRadius: '15px',
						}}
					/>
				</AbsoluteFill>
			</div>
		</>
	);
};

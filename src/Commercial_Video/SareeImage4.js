import axios from 'axios';
import {useState, useEffect} from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const SareeImage4 = (props) => {
	const {url, src} = props;
	const [image, setImage] = useState();
	useEffect(() => {
		axios.get(url).then((apiData) => {
			let image = apiData.data.images[0].filename;
			let file4 = image[3];
			setImage(file4);
		});
	}, []);

	const pic4 = `${src}/${image}`;

	const frame = useCurrentFrame();

	const opacity4 = interpolate(frame, [0, 60], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// const frame = useCurrentFrame();
	// const translate = interpolate(frame, [20, 40], [300, 0], {
	// 	extrapolateLeft: 'clamp',
	// 	extrapolateRight: 'clamp',
	// });
	// const scale = interpolate(frame, [0, 60], [0, 1], {
	// 	extrapolateLeft: 'clamp',
	// 	extrapolateRight: 'clamp',
	// });
	// const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<>
			<div
				style={{
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					width: '100%',
					height: '100%',
					opacity: '0.7',
				}}
			>
				<AbsoluteFill
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<img
						src={pic4}
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							opacity: opacity4,
							boxShadow: '2px 6px 15px rgba(0, 0, 0, 0.5)',
							borderRadius: '15px',
							zIndex: 3,
						}}
					/>
				</AbsoluteFill>
			</div>
		</>
	);
};

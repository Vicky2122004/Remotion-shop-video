import axios from 'axios';
import {useEffect, useState} from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const SareeImage2 = (props) => {
	const {url, src} = props;
	const [image, setImage] = useState();

	useEffect(() => {
		axios.get(url).then((apiData) => {
			let image = apiData.data.images[0].filename;
			let file2 = image[1];
			setImage(file2);
		});
	});

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pic2 = `${src}/${image}`;
	// const translate = interpolate(frame, [30, 80], [-300, 0], {
	// 	extrapolateLeft: 'clamp',
	// 	extrapolateRight: 'clamp',
	// });
	// const scale = interpolate(frame, [0, 60], [0, 1], {
	// 	extrapolateLeft: 'clamp',
	// 	extrapolateRight: 'clamp',
	// });
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	const x2 = interpolate(frame, [0, 60], [-100, 0], {
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
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						opacity: '0.7',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<img
						src={pic2}
						style={{
							position: 'absolute',
							top: 0,
							left: x2,
							width: '100%',
							height: '100%',
							opacity,
							borderRadius: '15px',
							boxShadow: '2px 6px 15px rgba(0, 0, 0, 0.5)',
							zIndex: 3,
						}}
					/>
				</AbsoluteFill>
			</div>
		</>
	);
};

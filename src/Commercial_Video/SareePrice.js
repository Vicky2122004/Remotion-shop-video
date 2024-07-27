import axios from 'axios';
import {useEffect, useState} from 'react';
import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const SareePrice = (props) => {
	const [price, setPrice] = useState();
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const {url} = props;

	useEffect(() => {
		axios.get(url).then((apiData) => {
			setPrice(apiData.data.price);
		});
	}, []);
	const opacity = interpolate(frame, [0, 40], [0, 1]);
	const skew = interpolate(frame, [0, 40], [180, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const translate = interpolate(frame, [0, 40], [200, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			}}
		>
			<h1
				style={{
					position: 'absolute',
					bottom: 170,
					width: '400px',
					color: '#FF3800',
					fontSize: 55,
					textAlign: 'center',
					backgroundColor: '#555555',
					padding: '25px',
					borderRadius: 7,
					boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
					opacity,
					transform: `translateY(${translate}px) skew(${skew}deg)`,
				}}
			>
				Price: {price}
			</h1>
		</AbsoluteFill>
	);
};

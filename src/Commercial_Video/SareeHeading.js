import {useEffect, useState} from 'react';
import axios from 'axios';
import {AbsoluteFill, interpolate, Sequence, useCurrentFrame} from 'remotion';

export const SareeHeading = (props) => {
	const {url} = props;
	const [heading, setHeading] = useState();
	useEffect(() => {
		axios.get(url).then((apiData) => {
			setHeading(apiData.data.title);
		});
	}, []);
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 100], [0, 1]);
	const translate = interpolate(frame, [0, 40], [200, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<AbsoluteFill>
			<p
				style={{
					fontSize: 50,
					color: '#893F45',
					position: 'relative',
					// textShadow: '2px 2px 4px #000000',
					textAlign: 'center',
					opacity,
					transform: `translateY(${translate}px)`,
					zIndex: 4,
				}}
			>
				{heading}
			</p>
		</AbsoluteFill>
	);
};

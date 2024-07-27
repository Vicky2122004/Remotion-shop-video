import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const PictureInPicture = ({images}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#555555',
			}}
		>
			<div>
				{images.map((src, index) => {
					const delay = index * 15; // Adjust delay for each image
					const springValue = spring({
						frame: frame - delay,
						fps,
						config: {
							damping: 10,
							stiffness: 100,
						},
					});

					return (
						<img
							key={index}
							src={src}
							alt={`Image ${index}`}
							style={{
								transform: `translateY(${springValue * 100}px)`,
								opacity: springValue,
								width: '100%', // Adjust width as needed
								height: 'auto', // Adjust height as needed
							}}
						/>
					);
				})}
			</div>
		</AbsoluteFill>
	);
};

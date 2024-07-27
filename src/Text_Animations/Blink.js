import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import React from 'react';

export const BlinkText = (props) => {
	const {children} = props;
	const frame = useCurrentFrame();

	// Calculate opacity using the interpolate function
	const opacity = interpolate(
		frame,
		[0, 15, 30], // Frames at which opacity changes
		[1, 0, 1], // Opacity values at those frames
		{
			extrapolateRight: 'extend',
		},
	);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#555555',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				width: '100%',
			}}
		>
			<div
				style={{
					opacity, // Apply the calculated opacity
					fontSize: '50px',
					color: '#ffffff',
				}}
			>
				{children}
			</div>
		</AbsoluteFill>
	);
};

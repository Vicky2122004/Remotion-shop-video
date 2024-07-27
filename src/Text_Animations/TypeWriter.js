import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const TypewriterText = (props) => {
	const {children} = props;
	const frame = useCurrentFrame();
	const charsToShow = Math.min(Math.floor(frame / 2), children.length);
	const displayedText = children.slice(0, charsToShow);
	const opacity = interpolate(frame, [0, 30], [0, 1]);

	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#555555',
				maxHeigh: '100%',
				maxWidth: '100%',
				zIndex: 100,
			}}
		>
			<div>
				<p
					style={{
						fontFamily: 'monospace',
						whiteSpace: 'pre',
						fontSize: 48,
						color: 'white',
						opacity,
						whiteSpace: 'normal', // Allow text wrapping
						wordBreak: 'break-word',
					}}
				>
					{displayedText}
				</p>
			</div>
		</AbsoluteFill>
	);
};

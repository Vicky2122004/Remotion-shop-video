import {useCurrentFrame, interpolate, AbsoluteFill} from 'remotion';

// Component to animate each letter
export const LetterBouncing = ({letter, index, duration}) => {
	const frame = useCurrentFrame();

	// Bounce animation effect
	const bounce = interpolate(frame - index * 10, [0, 10, 20], [0, -30, 0], {
		extrapolateRight: 'clamp',
	});

	// Final scale animation effect
	const finalAnimation = interpolate(
		frame - (index * 10 + duration),
		[0, 30],
		[0, 1],
		{
			extrapolateRight: 'clamp',
		},
	);

	const transform = `translateY(${bounce}px) scale(${finalAnimation})`;

	return (
		<span
			style={{display: 'inline-block', transform, transition: 'transform 1s'}}
		>
			{letter}
		</span>
	);
};

// Component to display the animated word
export const AnimatedWord = ({word}) => {
	const frame = useCurrentFrame();
	const duration = 150; // Total duration for the final animation of all letters

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				justifyContent: 'center',
				alignItems: 'center',
				display: 'flex',
				fontSize: '40px',
			}}
		>
			<div style={{display: 'flex'}}>
				{word.split('').map((letter, index) => (
					<LetterAnimation
						key={index} // Unique key for each letter
						letter={letter} // Letter to be animated
						index={index} // Position of the letter in the word
						duration={duration} // Duration of the final animation phase
					/>
				))}
			</div>
		</AbsoluteFill>
	);
};

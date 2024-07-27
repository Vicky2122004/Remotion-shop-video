import {
	AbsoluteFill,
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {FaFacebook} from 'react-icons/fa';
import {IoLogoWhatsapp} from 'react-icons/io';
import {FaSquareXTwitter} from 'react-icons/fa6';
import {FaSnapchatGhost} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {RotationC} from './RotationC';
import {Heading} from './Heading';

export const Rotation = () => {
	const frame = useCurrentFrame();
	const rotate = interpolate(frame, [0, 50], [0, 360 / 6]);
	const {fps, width} = useVideoConfig();
	// const scale = interpolate(frame, [0, 60], [0, 1], {
	// 	extrapolateLeft: 'clamp',
	// 	extrapolateRight: 'clamp',
	// });
	const scale = spring({
		frame,
		fps,
		config: {
			damping: 9,
			mass: 1.7,
			stiffness: 87,
		},
	});
	const opacity = interpolate(frame, [0, 40], [0, 1]);
	return (
		<AbsoluteFill
			style={{
				background: '#F0FFFF',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				width: '100%',
			}}
		>
			<Sequence from={0} durationInFrames={width}>
				<Heading />
			</Sequence>

			<Sequence from={fps * 2} durationInFrames={width}>
				<img
					src="https://i.pinimg.com/originals/70/66/93/706693c6b3c6940dbd67d41c69183ec4.gif"
					style={{
						zIndex: '10',
						overflow: 'hidden',
						width: '300px',
						height: '300px',
						borderRadius: '50%',
						position: 'relative',
						top: '50rem',
						left: '23rem',
						opacity,
						transform: `scale(${scale})`,
					}}
				/>
				<div
					style={{
						backgroundColor: 'aqua',
						width: '600px',
						height: '600px',
						borderRadius: '50%',
						background: 'transparent',
						position: 'relative',
						transform: `rotate(${rotate}deg) scale(${scale})`,
						transition: '0.5s linear',
						right: '5rem',
						top: '41rem',
					}}
				>
					<FaFacebook
						style={{
							fontSize: '5em',
							color: '#468FEA',
							position: 'relative',
							transform: `translate(5rem, 8rem) rotate(${rotate}deg) scale(${scale})`,
							top: '18rem',
							right: '3rem',
						}}
					/>
					<IoLogoWhatsapp
						style={{
							fontSize: '5em',
							color: '#55DD33',
							position: 'relative',
							transform: `translate(-10rem, -10rem) rotate(${rotate}deg) scale(${scale})`,
							left: '37rem',
							top: '20rem',
						}}
					/>
					<FaSquareXTwitter
						style={{
							fontSize: '5em',
							position: 'relative',
							transform: `translate(-10rem, 10rem) rotate(${rotate}deg) scale(${scale})`,
							bottom: '1rem',
							left: '1rem',
						}}
					/>
					<FaSnapchatGhost
						style={{
							fontSize: '5em',
							color: '#FCF75E',
							position: 'relative',
							transform: `translate(6rem, -4rem) rotate(${rotate}deg) scale(${scale})`,
							bottom: '-30rem',
							left: '10rem',
						}}
					/>
					<FaInstagram
						style={{
							fontSize: '5em',
							color: '#FF33CC',
							position: 'relative',
							bottom: '-33rem',
							right: '3rem',
							transform: `rotate(${rotate}deg) scale(${scale})`,
						}}
					/>
					<FaYoutube
						style={{
							fontSize: '5em',
							color: '#FF3800',
							position: 'relative',
							right: '9rem',
							bottom: '1rem',
							transform: `rotate(${rotate}deg) scale(${scale})`,
						}}
					/>
				</div>
			</Sequence>

			<Sequence from={fps * 4} durationInFrames={width}>
				<RotationC />
			</Sequence>
		</AbsoluteFill>
	);
};

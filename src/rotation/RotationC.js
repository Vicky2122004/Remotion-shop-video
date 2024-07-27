import {FaLinkedin} from 'react-icons/fa';
import {FaTelegram} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import {SiGooglechrome} from 'react-icons/si';
import {RiNetflixFill} from 'react-icons/ri';
import {FaSpotify} from 'react-icons/fa';
import {
	useCurrentFrame,
	interpolate,
	spring,
	AbsoluteFill,
	useVideoConfig,
} from 'remotion';

export const RotationC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const rotate_rev = interpolate(frame, [0, 50], [360 / 4, 0]);
	const rotate = interpolate(frame, [0, 50], [0, 360 / 6]);
	const scale = spring({
		frame,
		fps,
		config: {
			damping: 9,
			mass: 1.7,
			stiffness: 87,
		},
	});
	return (
		<AbsoluteFill>
			<div
				style={{
					backgroundColor: 'aqua',
					width: '1000px',
					height: '1000px',
					borderRadius: '50%',
					background: 'transparent',
					position: 'relative',
					transform: `rotate(${rotate_rev}deg) scale(${scale})`,
					top: '29rem',
					left: '2.7rem',
				}}
			>
				<FaLinkedin
					style={{
						fontSize: '5em',
						color: '#468FEA',
						position: 'relative',
						transform: `translate(3rem, 14rem) rotate(${rotate}deg) scale(${scale})`,
					}}
				/>
				<FaTelegram
					style={{
						fontSize: '5em',
						color: '#7DF9FF',
						position: 'relative',
						transform: `rotate(${rotate}deg) scale(${scale})`,
						left: '24rem',
						bottom: '1.6rem',
					}}
				/>
				<FcGoogle
					style={{
						fontSize: '5em',
						position: 'relative',
						transform: `rotate(${rotate}deg) scale(${scale})`,
						top: '46rem',
						right: '6.8rem',
					}}
				/>
				<SiGooglechrome
					style={{
						fontSize: '5em',
						color: '#FDEE00',
						position: 'relative',
						transform: `rotate(${rotate}deg) scale(${scale})`,
						top: '59rem',
						left: '18rem',
					}}
				/>
				<RiNetflixFill
					style={{
						fontSize: '5em',
						color: '#DE3163',
						position: 'relative',
						transform: `rotate(${rotate}deg) scale(${scale})`,
						top: '37rem',
						left: '37rem',
					}}
				/>
				<FaSpotify
					style={{
						fontSize: '5em',
						color: '#50C878',
						position: 'relative',
						transform: `rotate(${rotate}deg) scale(${scale})`,
						top: '13rem',
						left: '29rem',
					}}
				/>
			</div>
		</AbsoluteFill>
	);
};

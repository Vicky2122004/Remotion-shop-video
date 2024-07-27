import {useCurrentFrame, interpolate, AbsoluteFill} from 'remotion';
// import {ShadowText} from './TextShadow';
// import WaveText from './Wave';
// import {RotateInText} from './RotateIn';
// import {BlinkText} from './Blink';
// import {TypewriterText} from './TypeWriter';
// import {WipeText} from './WipeEffect';
// import {BounceText} from './Bounce';
// import {FadeInText} from './FadeIn';
// import {SlideInText} from './SlideIn';
// import {ScaleUpText} from './ScaleUp';
// import { LetterBouncing } from './LetterBouncing'

export const Home = () => {
	const children = 'Welcome To Remotion';
	const frame = useCurrentFrame();

	return (
		<AbsoluteFill>
			{/* <FadeInText children={children} /> */}
			{/* <SlideInText children={children} /> */}
			{/* <ScaleUpText children={children} /> */}
			{/* <WipeText children={children} /> */}
			{/* <BounceText children={children} /> */}
			{/* <LetterBouncing children={children} /> */}
			{/* <TypewriterText children={children} /> */}
			{/* <BlinkText children={children} /> */}
			{/* <RotateInText children={children} /> */}
			{/* <WaveText children={children} /> */}
			{/* <ShadowText children={children} /> */}
		</AbsoluteFill>
	);
};

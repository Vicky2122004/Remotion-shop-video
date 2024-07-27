import {Composition} from 'remotion';
import {Home} from './Commercial_Video/Home';
// import {Rotation} from './rotation/Rotation';
// import {FadeInText} from './Text_Animations/FadeIn';
// import {Home} from './Text_Animations/Home';
// import {ImageCollage} from './Collaging/ImageCollage';
// import {LetterBouncing} from './Text_Animations/LetterBouncing';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot = () => {
	return (
		<>
			{/* <Composition
				id="Collaging"
				component={ImageCollage}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1920}
			/> */}

			{/* <Composition
				id="TextAnimations"
				component={Home}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1920}
			/> */}

			{/* <Composition
				id="TextAnimations"
				component={() => <LetterBouncing word="Example" />}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1920}
			/> */}

			{/* <Composition
				id="Rotation"
				component={Rotation}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1920}
			/> */}

			<Composition
				id="CommercialVideo"
				component={Home}
				durationInFrames={500}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};

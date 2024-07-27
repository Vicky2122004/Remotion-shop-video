import {AbsoluteFill, Sequence, useVideoConfig} from 'remotion';
import {SareeHeading} from './SareeHeading';
import {SareeImage} from './SareeImage';
import {SareePrice} from './SareePrice';
import {SareeImage2} from './SareeImage2';
import {SareeImage3} from './SareeImage3';
import {SareeImage4} from './SareeImage4';
import {SareeImage5} from './SareeImage5';

export const Home = () => {
	const {fps, width} = useVideoConfig();
	return (
		<div
			style={{
				backgroundColor: '#F0FFFF',
				height: '100%',
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Sequence from={0} durationInFrames={width}>
				<SareeHeading url="https://yaashshopping.beyaash.in/api/sarees/7db3a721-e0dc-4588-8596-9e7122dca917" />
			</Sequence>

			<Sequence from={fps * 0.5} durationInFrames={100}>
				<SareeImage
					src="https://yaashshopping.beyaash.in/upload/images/product_images/"
					url="https://yaashshopping.beyaash.in/api/sarees/7db3a721-e0dc-4588-8596-9e7122dca917"
				/>
			</Sequence>

			<Sequence from={100} durationInFrames={100}>
				<SareeImage2
					src="https://yaashshopping.beyaash.in/upload/images/product_images/"
					url="https://yaashshopping.beyaash.in/api/sarees/7db3a721-e0dc-4588-8596-9e7122dca917"
				/>
			</Sequence>

			<Sequence from={185} durationInFrames={100}>
				<SareeImage3
					src="https://yaashshopping.beyaash.in/upload/images/product_images/"
					url="https://yaashshopping.beyaash.in/api/sarees/7db3a721-e0dc-4588-8596-9e7122dca917"
				/>
			</Sequence>

			<Sequence from={270} durationInFrames={100}>
				<SareeImage4
					src="https://yaashshopping.beyaash.in/upload/images/product_images/"
					url="https://yaashshopping.beyaash.in/api/sarees/7db3a721-e0dc-4588-8596-9e7122dca917"
				/>
			</Sequence>

			<Sequence from={355} durationInFrames={100}>
				<SareeImage5
					src="https://yaashshopping.beyaash.in/upload/images/product_images/"
					url="https://yaashshopping.beyaash.in/api/sarees/7db3a721-e0dc-4588-8596-9e7122dca917"
				/>
			</Sequence>

			<Sequence from={fps * 2.2} durationInFrames={100}>
				<SareePrice url="https://yaashshopping.beyaash.in/api/sarees/7db3a721-e0dc-4588-8596-9e7122dca917" />
			</Sequence>
		</div>
	);
};

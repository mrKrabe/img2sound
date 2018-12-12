import React, {PureComponent} from 'react';

const IMG_HEIGHT = '250px';
const IMG_WIDTH = 'auto';

export default class ImagePanel extends PureComponent {
	render() {
		const {src} = this.props;

		return <div>
			<img
				src={src}
				alt=''
				style={{
					height: IMG_HEIGHT,
					width: IMG_WIDTH,
				}}
			/>
		</div>;
	}
}

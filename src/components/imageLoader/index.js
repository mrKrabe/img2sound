import React, {PureComponent} from 'react';
import {getImageData, loadImage} from '../../utils/image';

const IMG_TYPES = 'image/png, image/jpeg';

export default class ImageLoader extends PureComponent {
	render() {
		return <input
			type='file'
			accept={IMG_TYPES}
			onChange={this.onImageChange}
		/>;
	}

	onImageChange = async event => {
		const {updateState} = this.props;
		const file = event.target.files && event.target.files[0];
		const image = await loadImage(file);
		const imageData = await getImageData(image);

		updateState({
			base64: image,
			imageData: imageData,
		});
	};
}

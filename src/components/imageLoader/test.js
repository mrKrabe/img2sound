import React from 'react';
import ReactDOM from 'react-dom';
import ImageLoader from './index';
// import {shallow} from 'enzyme';

// const TEST_DATA = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ImageLoader/>, div);
	ReactDOM.unmountComponentAtNode(div);
});

// // TODO img.onload is not called, try to find workaround
// it('loads image', () => {
// 	let state = {};
// 	const loader = shallow(<ImageLoader updateState={newState => state = newState}/>);
//
// 	return loader.instance().onImageChange(getTestEvent())
// 		.then(() => {
// 			expect(state.base64).toBe('');
// 			expect(state.imageData).toBe('');
// 		});
// });
//
// function getTestEvent() {
// 	return {
// 		target: {
// 			files: [new File([new Blob([atob(TEST_DATA)], {type: 'image/png'})], 'image.png')],
// 		},
// 	};
// }

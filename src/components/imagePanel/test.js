import React from 'react';
import ReactDOM from 'react-dom';
import ImagePanel from './index';

const TEST_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ImagePanel/>, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders with image', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ImagePanel
		src={TEST_IMAGE}
	/>, div);
	ReactDOM.unmountComponentAtNode(div);
});

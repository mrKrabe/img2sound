import {loadImage} from './image';

const TEST_DATA = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==';

it('loads image', async () => {
	const result = await loadImage(new File([new Blob([atob(TEST_DATA)], {type: 'image/png'})], 'image.png'));

	expect(result).toContain('base64');

});

export const getImageData = base64Image => {
	return new Promise((resolve, reject) => {
		try {
			const img = new Image();

			img.onload = () => {
				const canvas = document.createElement('canvas');
				const ctx = canvas.getContext('2d');

				canvas.width = img.width;
				canvas.height = img.height;

				ctx.drawImage(img, 0, 0);

				resolve(ctx.getImageData(0, 0, canvas.width, canvas.height));
			};

			img.src = base64Image;
		} catch (e) {
			reject(e);
		}
	});
};

export const loadImage = file => {
	if (!FileReader || !file) {
		return;
	}

	return new Promise((resolve, reject) => {
		try {
			const reader = new FileReader();

			reader.onload = () => {
				resolve(reader.result);
			};

			reader.readAsDataURL(file);
		} catch (e) {
			reject(e);
		}

	});
};

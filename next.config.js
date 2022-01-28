const withImages = require('next-images');

// module.exports = {
//   reactStrictMode: true,
// }

module.exports = withImages({
	images: {
		disableStaticImages: true,
	},
});

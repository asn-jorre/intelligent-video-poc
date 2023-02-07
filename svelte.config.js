//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	//preprocess: preprocessor(),
	kit: {
		adapter: adapter({
			// fallback: '200.html',
			fallback: null,
			pages: 'build-static',
			assets: 'build-static',
			precompress: false,
			trailingSlash: 'always'
		})
	}
};

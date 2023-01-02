import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
		  extensions: ['.md'],
		  layout: {
			_: 'src/layouts/PostLayout.svelte',
		  },
		})
	  ],

	kit: {
		adapter: adapter(),
		alias: {
			// this will match a file
			'src': 'src',
		  }
	}
};

export default config;

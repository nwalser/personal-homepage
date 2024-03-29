import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.svx'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
		  extensions: ['.svx'],
		  layout: {
			post: 'src/layouts/PostLayout.svelte',
			dockercompose: 'src/layouts/DockerComposeLayout.svelte',
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

import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Fully prerendered static site — deploys free to Netlify/Vercel/Cloudflare Pages.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: ({ path, message }) => {
				// Product photos under /guitars/ are placeholders for the pitch — the
				// GuitarImage component degrades gracefully, so don't fail the build.
				if (path.startsWith('/guitars/')) return;
				throw new Error(message);
			}
		}
	}
};

export default config;

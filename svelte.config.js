const sveltePreprocess = require('svelte-preprocess');
const adapter = require('@sveltejs/adapter-cloudflare');


module.exports = {
  kit: {
    adapter: adapter(),
        // ... truncated ...
      },
  preprocess: [
    sveltePreprocess({
      postcss: {
        plugins: [require('autoprefixer')],
      },
    }),
  ],
};

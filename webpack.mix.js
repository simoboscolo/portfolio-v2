const mix = require('laravel-mix');
const glob = require('glob');

const js = glob.sync(`resources/js/[^_]*.js`);
const scss = glob.sync(`resources/scss/[^_]*.scss`);

mix.js(`resources/js/app.js`, `public/app.js`).sass(`resources/scss/main.scss`, `public/main.css`);

mix.browserSync({
	proxy: '',
	server: 'public/views',
	files: ['public/**/**/*'],
});
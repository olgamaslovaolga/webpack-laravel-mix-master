const mix = require('laravel-mix')

mix.js('src/app.js', 'public/main.js')
	.sass('src/app.scss', 'public/main.css')

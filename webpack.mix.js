const mix = require('laravel-mix');

// Getting necessary vars from .env, take only var that you need
require('dotenv').config()
let webpack = require('webpack')

let dotenvplugin = new webpack.DefinePlugin({
    'process.env': {
        HMR_URL: JSON.stringify(process.env.HMR_URL || 'http://localhost'),
    }
})

mix.webpackConfig({
    plugins: [
        dotenvplugin
    ]
})

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ]);

mix.options({
    hmrOptions: {
        host: process.env.HMR_URL,
        port: 8080
    },
    optimization: { concatenateModules: false, providedExports: false, usedExports: false }
})

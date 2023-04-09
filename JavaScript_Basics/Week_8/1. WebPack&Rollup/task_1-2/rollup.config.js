import styles from "rollup-plugin-styles";
import { babel } from '@rollup/plugin-babel';
import image from 'rollup-plugin-img';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'



export default {
    input: './src/index.js',
    output: {
        file: './dist/bundle.js',
        format: 'iife'
    },
    watch: {
        exclude: './node_modules/**'
    },
    plugins: [
        styles(),
        babel({
            babelHelpers: "bundled",
            presets: ["@babel/env"]
        }),
        image({
            limit: 10000
        }),
        serve({
            open: true,
            contentBase: ['src', './'],
            port: 8000
        }),
        livereload()
    ]
};
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
    input: 'index.js',
    output: {
        file: '../dist/calculator.min.js',
        format: 'iife',
        name: 'HexCalculator',
        sourcemap: true
    },
    plugins: [
        resolve(),
        commonjs(),
        terser()
    ]
};

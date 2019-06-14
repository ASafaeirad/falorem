import { resolve } from 'path'
import sourceMaps from 'rollup-plugin-sourcemaps'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'

const lib = resolve(__dirname, 'lib')
const peerDependencies = pkg.peerDependencies || [];
const external = Object.keys(peerDependencies) || []
const renameMin = (filename) => filename.replace(/\.js$/, '.min.js');

const config = {
  input: resolve(lib, 'esm5', 'index.js'),
  output: {
    file: renameMin(resolve(lib, 'bundles', 'index.umd.js')),
    format: 'umd',
    name: 'falorem',
    sourcemap: true,
  },
  inlineDynamicImports: true,
  external,
  plugins: [
    commonjs(),
    nodeResolve(),
    sourceMaps(),
    uglify()
  ]
}

export default config;

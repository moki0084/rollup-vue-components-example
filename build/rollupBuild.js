const rollup = require('rollup')
const rollupVue = require('rollup-plugin-vue').default
const rollupCss = require('rollup-plugin-css-only')
const rollupBabel = require('rollup-plugin-babel')
const rollupBuble = require('rollup-plugin-buble')
const postcssAutoprefixer = require('autoprefixer')
const postcssPxtorem = require('postcss-pxtorem')
const rollupResolve = require('rollup-plugin-node-resolve')
const rollupUrl = require('rollup-plugin-url')
const rollupCommonJS = require('rollup-plugin-commonjs')
const {distPath} = require('./configs')

async function rollupBuild(opt) {
  console.time(`---  ${opt.name} 编译  ---`)
  console.log(`--- ${opt.name} 编译开始  ---`)
  const bundle = await rollup.rollup({
    input: opt.path,
    external: ['vue'],
    plugins: [
      rollupCss(),
      rollupVue({
        css: false,
        style: {
          postcssPlugins: [
            postcssAutoprefixer({
              browsers: [
                'Android >= 4',
                'iOS >= 7'
              ],
              cascade: true
            }),
            postcssPxtorem({
              rootValue: 75,
              propWhiteList: [],
              minPixelValue: 2
            })
          ],
          trim: true
        }
      }),
      rollupUrl(),
      rollupResolve({browser: true, jsnext: true, main: true}),
      rollupCommonJS({
        sourceMap: false
      }),
      rollupBuble({
        target: {
          ie: 8
        },
        transforms: {
          modules: false
        }
      }),
      rollupBabel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      })
    ]
  })
  await bundle.write({
    file: `${distPath}/${opt.name === 'index' ? 'index' : opt.name + '/index' }.js`,
    format: 'umd',
    sourcemap: false,
    name: opt.name !== 'index' ? opt.name : undefined,
    globals: {
      vue: 'Vue'
    }
  })
  console.log(`--- ${opt.name} 编译成功  ---`)
  console.timeEnd(`---  ${opt.name} 编译  ---`)
}

module.exports = rollupBuild

const glob = require('glob')
const path = require('path')
const rollupBuild = require('./rollupBuild')
const {componentsPath} = require('./configs')

async function build() {
  console.time(`---  组件编译  ---`)
  let filePathArr = glob.sync(path.join(componentsPath, '*/index.js'))
  let buildArr = []
  for (let i of filePathArr) {
    let fileArr = i.match(/\/components\/(.*)\/index\.js/)
    let fileName = fileArr && fileArr[1] ? fileArr[1] : 'index'
    await rollupBuild({
      name: fileName,
      path: i
    })
  }
  console.time(`---  组件编译  ---`)
}

build()

### rollup vue components

#### 默认配置
- babel （"iOS >= 7", "Android >= 4" transform-runtime）
- posscss-pxtorem （rootValue: 75）
- autoprefixer
- sass

#### bug
- 样式路径解析不正确，
- 同时构建子组件与整体，编译失败
- rollup-plugin-vue 不支持 postcss async style processing  https://github.com/vuejs/rollup-plugin-vue/issues/196#issuecomment-392239950
- rollup-plugin-vue template.transpileOptions 无效

#### 命令
```shell
    // eslint 检测
    lint: npm run lint
    // 清空输出目录
    clean: npm run clean
    // 编译子组件
    buildc: npm run buildc
    // 编译组件入口
    buildc: npm run buildi
    // 编译全部
    build: npm run build
```

#### 编译

    组件入口
    input components/index.js 
    output dist/index.js

    子组件
    input components/*/index.js 
    output dist/*/index.js

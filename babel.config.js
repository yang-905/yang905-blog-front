// babel.config.js
module.exports = {
  presets: [
    // 如果你使用 Vue 2 的官方预设（通常 Vite 项目会自动处理，但显式声明也没问题）
    ['@babel/preset-env', { modules: false }]
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
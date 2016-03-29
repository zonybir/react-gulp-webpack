var path = require('path'),
    entry = require('../../config.js');
entry=entry.entryJs;
var config={
  //configuration
      entry:[path.resolve(__dirname,'jsx/main.js')],
      output:{
        path:path.resolve(__dirname,entry),
        filename:'guide.js'
      },
      module: {
           loaders: [{
                test: /\.js[x]?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'jsx-loader' // 加载模块 "babel" 是 "babel-loader" 的缩写
            }
          ]
      }
}
module.exports = config;
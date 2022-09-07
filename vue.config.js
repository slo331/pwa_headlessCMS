const config = {
  pwa: {
    name: "My App",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    start_url: "/",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "dev/sw.js",
      // ...other Workbox options...
    },
  },
  filenameHashing: false,
  chainWebpack: config => {
    config
    .plugin('prefetch')
    .tap(args => {
      return [
        {
          rel: 'prefetch',
          include: 'asyncChunks',
          fileBlacklist: [
            /\.map$/,
            /pdfmake\.[^.]+\.js$/,
            /xlsx\.[^.]+\.js$/,
            /fabric[^.]*\.[^.]+\.js$/,
            /responsivedefaults\.[^.]+\.js$/
          ]
        }
      ];
    });
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },
  productionSourceMap: false,
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import '@/assets/styles/main';
        `
      }
    }
  }
};

module.exports = config;
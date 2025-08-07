/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

/* eslint func-names: 0 */
/* eslint global-require: 0 */

const { configure } = require('quasar/wrappers');

let host = '0.0.0.0';
if (process.env.HOST) {
  host = process.env.HOST;
}

const port = process.env.PORT || 8189;
let hmr = {
  host: 'localhost',
  port,
  path: '/',
};

if (process.env.HMR && process.env.HMR === 'default') {
  hmr = {
    protocol: 'wss'
  };
}

let proxy = {};

if (process.env.MOCK_API && process.env.MOCK_API === 'proxy') {
  const mockApiPort = process.env.MOCK_API_PORT || 3000;
  host = 'localhost';
  const proto = process.env.MOCK_API_PROTO || 'http';
  const target = `${proto}://${host}:${mockApiPort}`
  // Proxy API requests to the mock server
  // This is useful for development with a mock API server
  proxy = {
    '/api': {
      target,
      changeOrigin: true,
      secure: false,
      ws: true,
      logLevel: 'debug',
      headers: {
        'X-Forwarded-Host': host,
        'X-Forwarded-Proto': proto,
      },
    },
    '/campaigns/api': {
      target,
      changeOrigin: true,
      secure: false,
      ws: true,
      logLevel: 'debug',
      headers: {
        'X-Forwarded-Host': host,
        'X-Forwarded-Proto': proto,
      },
    },
    '/campaigns/export-data': {
      target,
      changeOrigin: true,
      secure: false,
      ws: true,
      logLevel: 'debug',
      headers: {
        'X-Forwarded-Host': host,
        'X-Forwarded-Proto': proto,
      },
    },
  };
}

module.exports = configure((ctx) => ({
  // https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
  // preFetch: true,

  // app boot file (/src/boot)
  // --> boot files are part of "main.js"
  // https://v2.quasar.dev/quasar-cli-vite/boot-files
  boot: [],

  // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#css
  css: [
    'app.scss',
  ],

  // https://github.com/quasarframework/quasar/tree/dev/extras
  extras: [
    'fontawesome-v6',
    'material-icons', // optional, you are not bound to it
  ],

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
  build: {
    target: {
      browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
    },
    vueRouterMode: 'hash', // available values: 'hash', 'history'
    publicPath: '/ui/',
    vitePlugins: [
      ['@intlify/unplugin-vue-i18n/vite'],
    ],
  },

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#devServer
  devServer: {
    port,
    strictPort: false,
    host: '0.0.0.0',
    hmr,
    proxy,
  },

  // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#framework
  framework: {
    config: {
      notify: {},
    },
    iconSet: 'fontawesome-v6', // Quasar icon set

    // Quasar plugins
    plugins: [
      'Notify', 'Loading', 'Dialog', 'LocalStorage',
    ],
  },

  // https://v2.quasar.dev/options/animations
  animations: [],

  // https://v2.quasar.dev/quasar-cli-vite/developing-ssr/configuring-ssr
  ssr: {
    // ssrPwaHtmlFilename: 'offline.html', // do NOT use index.html as name!
    // will mess up SSR
    pwa: false,
    prodPort: 3000, // The default port that the production server should use
    // (gets superseded if process.env.PORT is specified at runtime)

    middlewares: [
      'render', // keep this as last one
    ],
  },

  // https://v2.quasar.dev/quasar-cli-vite/developing-pwa/configuring-pwa
  pwa: {
    workboxMode: 'generateSW', // or 'injectManifest'
    injectPwaMetaTags: true,
    swFilename: 'sw.js',
    manifestFilename: 'manifest.json',
    useCredentialsForManifestTag: false,
  },

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-cordova-apps/configuring-cordova
  cordova: {},

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor
  capacitor: {
    hideSplashscreen: true,
  },

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/configuring-electron
  electron: {

    inspectPort: 5858,
    bundler: 'packager', // 'packager' or 'builder'
    packager: {
      // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
    },

    builder: {
      // https://www.electron.build/configuration/configuration
      appId: 'dashboard-quasar',
    },
  },

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-browser-extensions/configuring-bex
  bex: {
    contentScripts: [
      'my-content-script',
    ],
  },
}));

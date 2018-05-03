importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js');

let revision = (new Date()).toTimeString();
let filesToCache = [
  {
    'url': '/wrkFit/assets/css/main.css',
    'revision': revision,
  },
  {
    'url': '/wrkFit/assets/img/bg_blue.png',
    'revision': revision,
  },
  {
    'url': '/wrkFit/assets/img/bg_default.png',
    'revision': revision,
  },
  {
    'url': '/wrkFit/assets/img/bg_mixed.png',
    'revision': revision,
  },
  {
    'url': '/wrkFit/assets/img/bg_orange.png',
    'revision': revision,
  },
  {
    'url': '/wrkFit/assets/img/bg_purple.png',
    'revision': revision,
  },
  {
    'url': '/wrkFit/assets/img/logo.svg',
    'revision': revision,
  },
  {
    'url': '/wrkFit/assets/fonts/wrkFit.svg',
    'revision': revision,
  },
  {
    'url': '/wrkFit/assets/fonts/wrkFit.ttf',
    'revision': revision,
  },
  {
    'url': '/wrkFit/assets/fonts/wrkFit.woff',
    'revision': revision,
  },
  {
    'url': '/wrkFit/0.main.js',
    'revision': revision,
  },
  {
    'url': '/wrkFit/1.main.js',
    'revision': revision,
  },
  {
    'url': '/wrkFit/2.main.js',
    'revision': revision,
  },
  {
    'url': '/wrkFit/3.main.js',
    'revision': revision,
  },
  {
    'url': '/wrkFit/4.main.js',
    'revision': revision,
  },
  {
    'url': '/wrkFit/5.main.js',
    'revision': revision,
  },
  {
    'url': '/wrkFit/6.main.js',
    'revision': revision,
  },
  {
    'url': '/wrkFit/7.main.js',
    'revision': revision,
  },
  {
    'url': '/wrkFit/8.main.js',
    'revision': revision,
  },
  {
    'url': '/wrkFit/9.main.js',
    'revision': revision,
  },
  {
    'url': '/wrkFit/apiomat.js',
    'revision': revision,
  },
  {
    'url': '/wrkFit/',
    'revision': revision,
  },
  {
    'url': '/wrkFit/main.js',
    'revision': revision,
  },
  {
    'url': '/wrkFit/manifest.json',
    'revision': revision,
  },
];

workbox.setConfig({
   debug: true
});
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

workbox.precaching.precacheAndRoute(filesToCache);

workbox.routing.registerRoute(
  new RegExp('https://storage.googleapis.com/*'),
  workbox.strategies.staleWhileRevalidate()
);
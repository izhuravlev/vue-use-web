/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8dd1dc954459404b432d37e41d54f12c"
  },
  {
    "url": "assets/css/0.styles.f6ec81e7.css",
    "revision": "e6d58316f3d6676c8a765f0a10df07e9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.125db852.js",
    "revision": "86c49f84050a1729c1ffdbd0f953ed7c"
  },
  {
    "url": "assets/js/11.399f8957.js",
    "revision": "3977ff78da84d4ac0323fab63adbe85e"
  },
  {
    "url": "assets/js/12.b4e2d481.js",
    "revision": "a972873b908e4e827b58db542919d417"
  },
  {
    "url": "assets/js/13.8792a1e0.js",
    "revision": "dcda07a5651f1043d5583dc902190893"
  },
  {
    "url": "assets/js/14.34c0233a.js",
    "revision": "4704e7efb3312f9ea590685576fac78a"
  },
  {
    "url": "assets/js/15.585284d9.js",
    "revision": "fd88328badcb6dc59adbfd74b85f5838"
  },
  {
    "url": "assets/js/16.39b97826.js",
    "revision": "8409e5607666c1088bdac940bd33e040"
  },
  {
    "url": "assets/js/17.469b4e90.js",
    "revision": "09065d7eb0c5439685d3764d5e4f6931"
  },
  {
    "url": "assets/js/18.87c097fc.js",
    "revision": "38b8a9c210e710fc6bb05bfea5b0dbf5"
  },
  {
    "url": "assets/js/19.06b1170c.js",
    "revision": "d985c3e19fcbbf216c06da345f357ebc"
  },
  {
    "url": "assets/js/2.e68923ca.js",
    "revision": "43d6138199ed624c6b9a2d5cee64ed14"
  },
  {
    "url": "assets/js/20.28728d36.js",
    "revision": "b7e0cd6f7fb725bb5c938749e1655bcc"
  },
  {
    "url": "assets/js/21.552aa26f.js",
    "revision": "c678e2198b1092b041a6d72f342250ea"
  },
  {
    "url": "assets/js/22.603d2a09.js",
    "revision": "b7b0a31c6094e44579f17ea9a615d9fc"
  },
  {
    "url": "assets/js/23.1f323185.js",
    "revision": "c30642ba4ee594198138c4ac1370d29c"
  },
  {
    "url": "assets/js/24.41e9e394.js",
    "revision": "65a0aed5e089c8eb89fc9b76db8e115e"
  },
  {
    "url": "assets/js/25.796cbb49.js",
    "revision": "fffa4b9973674da8006f159c3f0306dd"
  },
  {
    "url": "assets/js/26.ea01a3af.js",
    "revision": "5a32d8dfa59b2dcb564f354f2025ee96"
  },
  {
    "url": "assets/js/27.d856e696.js",
    "revision": "a66eb889c79cb51d98c0b048a2b64b78"
  },
  {
    "url": "assets/js/28.37ee8477.js",
    "revision": "c2d73af6e723d037e6f9f571b2fa8624"
  },
  {
    "url": "assets/js/3.2cb97aaa.js",
    "revision": "dbb5197d8015c4a473b6122a1bfc6034"
  },
  {
    "url": "assets/js/4.bc715a54.js",
    "revision": "c66a03234ff95974b0231d3f71a4372a"
  },
  {
    "url": "assets/js/5.9c3e0aec.js",
    "revision": "092a1d033442971bf51ba5ad8c8aca71"
  },
  {
    "url": "assets/js/6.b95a0401.js",
    "revision": "0b204bc9ee8c88f4f7fa07d8091d3ffc"
  },
  {
    "url": "assets/js/7.d2125bbe.js",
    "revision": "5554a6a7c65886aaf439bb05943f208c"
  },
  {
    "url": "assets/js/8.2477a2d4.js",
    "revision": "54ee71dad96389e7c75e9cd2e6804dc6"
  },
  {
    "url": "assets/js/9.8d1ae289.js",
    "revision": "ab806baca5e19083bb082fd4daedfeb5"
  },
  {
    "url": "assets/js/app.d07ab393.js",
    "revision": "a14ef3a5cb4bd1d47eaf1d53b1ed32fc"
  },
  {
    "url": "guide/battery.html",
    "revision": "9dac5b7d60cbaedfd827a02bd6f38959"
  },
  {
    "url": "guide/clipboard.html",
    "revision": "830eda7a79afa62167d75ede5157a853"
  },
  {
    "url": "guide/device-light.html",
    "revision": "1f2accc2270751c873339030c2683d33"
  },
  {
    "url": "guide/device-motion.html",
    "revision": "8fb764f3cceb7f3fa6e49c13b5e7cd4e"
  },
  {
    "url": "guide/device-orientation.html",
    "revision": "b7a14e4ef15e2dea9f3879264ffa7775"
  },
  {
    "url": "guide/document-visibility.html",
    "revision": "3d4f4c0dea779f96f95f5c2075fb9752"
  },
  {
    "url": "guide/fetch.html",
    "revision": "757c596c0d643e5affa65a31bb56ade4"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "d1accd46fc95fc2c528cbe4bd83cb189"
  },
  {
    "url": "guide/geolocation.html",
    "revision": "a4941ed003590cdc97598360c3b8caf2"
  },
  {
    "url": "guide/index.html",
    "revision": "f454f0ccafca067fe30e9de684d83573"
  },
  {
    "url": "guide/intersection-observer.html",
    "revision": "248433fdb6b8bea7f21c93dd2ed08595"
  },
  {
    "url": "guide/local-storage.html",
    "revision": "58eca9576699ea6d745eed9e5391d782"
  },
  {
    "url": "guide/media-query.html",
    "revision": "0b1b896a81d74ac026f1aad3f5d15f54"
  },
  {
    "url": "guide/mouse-position.html",
    "revision": "b3caf06b56fbc78f0e91d885ab8b122d"
  },
  {
    "url": "guide/network.html",
    "revision": "4c77747814db83b5e8ea7a383f8a5acf"
  },
  {
    "url": "guide/preferred-color-scheme.html",
    "revision": "d14c8b798edda30fbe4e3c7ba490da75"
  },
  {
    "url": "guide/preferred-languages.html",
    "revision": "dbe91c9efafc4f7b77edc8bebdb63571"
  },
  {
    "url": "guide/script.html",
    "revision": "6b5e4f6d575e3924ae3a150449db7165"
  },
  {
    "url": "guide/scroll-position.html",
    "revision": "65586e8d1a94e1c862ef009de5cd1ff4"
  },
  {
    "url": "guide/websocket.html",
    "revision": "b1b85318fe70744299672b2a40d2ff69"
  },
  {
    "url": "guide/window-size.html",
    "revision": "2f80b178881ae4e587f16702beb75da5"
  },
  {
    "url": "index.html",
    "revision": "394fee22121ac28a9239b02a373644a1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

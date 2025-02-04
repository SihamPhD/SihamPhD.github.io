navigator.serviceWorker.getRegistrations().then(function (e) {
  for (let o of e) o.unregister();
}),
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.0.0-beta.1/workbox-sw.js"
  ),
  workbox.core.skipWaiting(),
  workbox.core.clientsClaim(),
  workbox.routing.registerRoute(
    /\.(?:js|css|json5)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "static-resources",
    })
  ),
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "google-fonts-stylesheets",
    })
  ),
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: "google-fonts-webfonts",
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 31536e3,
          maxEntries: 30,
        }),
      ],
    })
  ),
  self.addEventListener("message", (e) => {
    e.data &&
      "SKIP_WAITING" === e.data.type &&
      ("SKIP_WAITING" === e.data.type ||
        console.warn(`SW: Invalid message type: ${e.data.type}`));
  }),
  
  self.addEventListener('install', (event) => {
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
  });
  
  self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
  
    if (url.origin === location.origin) {
      const headers = new Headers(event.request.headers);
      headers.set('Cross-Origin-Opener-Policy', 'same-origin');
      headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
  
      const modifiedRequest = new Request(event.request, {
        headers: headers,
      });
  
      event.respondWith(fetch(modifiedRequest));
    }
  });
  workbox.precaching.precacheAndRoute([
    { revision: null, url: "/ohif/151.bundle.5d8090bf7e885f8f2384.js" },
    {
      revision: "fce97b63ba7e49aa2af632a3a260bbad",
      url: "/ohif/151.bundle.5d8090bf7e885f8f2384.js.map",
    },
    { revision: null, url: "/ohif/192.bundle.854654de64dcebad8ae2.js" },
    {
      revision: "44e0e09bca73decb9074eb45ac20793c",
      url: "/ohif/192.bundle.854654de64dcebad8ae2.js.map",
    },
    { revision: null, url: "/ohif/199.bundle.a8ca967aaff89e00bc83.js" },
    {
      revision: "13f9e21a9bc83e20c41ff09ea116b76d",
      url: "/ohif/199.bundle.a8ca967aaff89e00bc83.js.map",
    },
    { revision: null, url: "/ohif/205.bundle.7f5f555cb01cb08a199d.js" },
    {
      revision: "15b88977ce5bec381fc1eafc01dd988d",
      url: "/ohif/205.bundle.7f5f555cb01cb08a199d.js.map",
    },
    { revision: null, url: "/ohif/208.bundle.c36ccfae68d1265e433a.js" },
    {
      revision: "48e2b0c8d0eea572a502cefd28c9c923",
      url: "/ohif/208.bundle.c36ccfae68d1265e433a.js.map",
    },
    { revision: null, url: "/ohif/270.bundle.2cd8dce18409663d9d9e.js" },
    {
      revision: "a5719e55980cdd914c94e699583ca0fe",
      url: "/ohif/270.bundle.2cd8dce18409663d9d9e.js.map",
    },
    { revision: null, url: "/ohif/283.bundle.3093087adda6165607d2.js" },
    {
      revision: "3400a56c946436411b54f060f30eb3d7",
      url: "/ohif/283.bundle.3093087adda6165607d2.js.map",
    },
    { revision: null, url: "/ohif/295.bundle.7322fea4b6a64b7ae4d7.js" },
    {
      revision: "5693b3298c696396457bb7f4ff7ba6d7",
      url: "/ohif/295.bundle.7322fea4b6a64b7ae4d7.js.map",
    },
    { revision: null, url: "/ohif/331.bundle.fdc88bee53e620f443cc.js" },
    {
      revision: "4e0e34f265fae8f33b01b27ae29d9d6f",
      url: "/ohif/331.bundle.fdc88bee53e620f443cc.js.LICENSE.txt",
    },
    {
      revision: "d1e6029c9b4faa446aa505158d23ba05",
      url: "/ohif/331.bundle.fdc88bee53e620f443cc.js.map",
    },
    { revision: null, url: "/ohif/351.bundle.761aff2305a7f105b3d3.js" },
    {
      revision: "9ac4d4cf482c4f799676c4be146c0705",
      url: "/ohif/351.bundle.761aff2305a7f105b3d3.js.map",
    },
    { revision: "a04a2f233dc569826f5f6e21b65bc87b", url: "/ohif/351.css" },
    {
      revision: "c4ea120c6da08aa75348edfa3e57ece9",
      url: "/ohif/36785fbd89b0e17f6099.wasm",
    },
    { revision: null, url: "/ohif/381.bundle.18a76451a109137c9d4b.js" },
    {
      revision: "da211f4817a57fde1183961202d0a948",
      url: "/ohif/381.bundle.18a76451a109137c9d4b.js.map",
    },
    { revision: null, url: "/ohif/404.bundle.fc7185282fedc54f5f5c.js" },
    {
      revision: "f1adad4bce832d4c23a5f661648b63b4",
      url: "/ohif/404.bundle.fc7185282fedc54f5f5c.js.map",
    },
    { revision: null, url: "/ohif/50.bundle.88c79d1a582c213de4d8.js" },
    {
      revision: "c47b8b001d7f6e71a1773ee29919cfff",
      url: "/ohif/50.bundle.88c79d1a582c213de4d8.js.map",
    },
    {
      revision: "c377e1f5fe4a207d270c3f7a8dd3e3ca",
      url: "/ohif/5004fdc02f329ce53b69.wasm",
    },
    { revision: null, url: "/ohif/531.bundle.c77a306bc6b04f70bbca.js" },
    {
      revision: "783f14fa45b10e088e68f98251448010",
      url: "/ohif/531.bundle.c77a306bc6b04f70bbca.js.LICENSE.txt",
    },
    {
      revision: "08591dea57fffabde6822604f4d0f987",
      url: "/ohif/531.bundle.c77a306bc6b04f70bbca.js.map",
    },
    { revision: null, url: "/ohif/55.bundle.2dc7e04935a612a513a8.js" },
    {
      revision: "352a78070f5a3eefdb421ee75cb8bb87",
      url: "/ohif/55.bundle.2dc7e04935a612a513a8.js.map",
    },
    { revision: "0afb25509c7f072fbd7eda42c6895dbf", url: "/ohif/55.css" },
    { revision: null, url: "/ohif/569.bundle.177a5d33f9366905cdd5.js" },
    {
      revision: "f8a6589ec81c8e849dab752f268aa1c4",
      url: "/ohif/569.bundle.177a5d33f9366905cdd5.js.map",
    },
    { revision: null, url: "/ohif/581.bundle.a505c92593b53a95e93b.js" },
    {
      revision: "2658166585e3e117130cccf87063b1e7",
      url: "/ohif/581.bundle.a505c92593b53a95e93b.js.map",
    },
    { revision: null, url: "/ohif/606.bundle.8231f07f019a28873413.js" },
    {
      revision: "3df54bba2137ec524f3fb39f2c61461a",
      url: "/ohif/606.bundle.8231f07f019a28873413.js.LICENSE.txt",
    },
    {
      revision: "fa0b04fc30bd87fe64cdfceb8fdc8eb8",
      url: "/ohif/606.bundle.8231f07f019a28873413.js.map",
    },
    {
      revision: "adfcdf177b2a25b4861c65ec3055f98b",
      url: "/ohif/610.min.worker.js",
    },
    {
      revision: "3c2206525c18cd87dd28082949a4e43e",
      url: "/ohif/610.min.worker.js.map",
    },
    { revision: null, url: "/ohif/616.bundle.89b76c745cf4b3a82139.js" },
    {
      revision: "4dffaf73254b0e5557c0bfdc91cbea55",
      url: "/ohif/616.bundle.89b76c745cf4b3a82139.js.map",
    },
    {
      revision: "5800265b6831396572fb5d32c6bd8eef",
      url: "/ohif/62ab5d58a2bea7b5a1dc.wasm",
    },
    { revision: null, url: "/ohif/642.bundle.b65427ed00e9258d7e9b.js" },
    {
      revision: "5763ddbb5dfeec92043a3b9c3b646356",
      url: "/ohif/642.bundle.b65427ed00e9258d7e9b.js.map",
    },
    {
      revision: "ce10eced3ce34e663d86569b27f5bffb",
      url: "/ohif/65916ef3def695744bda.wasm",
    },
    { revision: null, url: "/ohif/664.bundle.f4930f71a5bfebece6d1.js" },
    {
      revision: "341d5ae96a434f2da07a601650341e75",
      url: "/ohif/664.bundle.f4930f71a5bfebece6d1.js.map",
    },
    { revision: null, url: "/ohif/707.bundle.9bb8af51ea642131fa69.js" },
    {
      revision: "c8629901d16b4c019c9203be52be006a",
      url: "/ohif/707.bundle.9bb8af51ea642131fa69.js.map",
    },
    { revision: "185e5e0a10fa6ab2fc7b3c38e63d550b", url: "/ohif/707.css" },
    { revision: null, url: "/ohif/728.bundle.7ec6cd8aaeb91c992b69.js" },
    {
      revision: "0e9b0c785f6ab44e694934571d764d58",
      url: "/ohif/728.bundle.7ec6cd8aaeb91c992b69.js.LICENSE.txt",
    },
    {
      revision: "ce90dc28338305b322f5f5ad25206e7c",
      url: "/ohif/728.bundle.7ec6cd8aaeb91c992b69.js.map",
    },
    { revision: null, url: "/ohif/744.bundle.640dc4a3d3fdd7b97222.js" },
    {
      revision: "8b090c48eeddd72c1baeec102162c406",
      url: "/ohif/744.bundle.640dc4a3d3fdd7b97222.js.map",
    },
    {
      revision: "cf3e4d4fa8884275461c195421812256",
      url: "/ohif/75788f12450d4c5ed494.wasm",
    },
    {
      revision: "cc4a3a4da4ac1b863a714f93c66c6ef2",
      url: "/ohif/75a0c2dfe07b824c7d21.wasm",
    },
    { revision: null, url: "/ohif/780.bundle.92259d3aa76713eea41e.js" },
    {
      revision: "22570ec03d870bf6aa9299b3477e6c79",
      url: "/ohif/780.bundle.92259d3aa76713eea41e.js.map",
    },
    { revision: null, url: "/ohif/790.bundle.6ae7960182a26b850e13.js" },
    {
      revision: "8bfda5a1c56976e5650d242a157591cc",
      url: "/ohif/790.bundle.6ae7960182a26b850e13.js.map",
    },
    { revision: null, url: "/ohif/799.bundle.8402bdd7c49760fa2375.js" },
    {
      revision: "2c39b6cf28b0055513d4c4c3fd8efa27",
      url: "/ohif/799.bundle.8402bdd7c49760fa2375.js.map",
    },
    { revision: "51b8ed55f5b8d448837222f03bdd6de8", url: "/ohif/806.css" },
    { revision: null, url: "/ohif/82.bundle.567b6c3e992103f9c33a.js" },
    {
      revision: "37b2420a54a5cd004c971b4a93c15112",
      url: "/ohif/82.bundle.567b6c3e992103f9c33a.js.map",
    },
    { revision: null, url: "/ohif/917.bundle.82b9fb17f429d65fc8a2.js" },
    {
      revision: "9158a5d7a4590303ba7eb605c9341c60",
      url: "/ohif/917.bundle.82b9fb17f429d65fc8a2.js.map",
    },
    { revision: null, url: "/ohif/926.bundle.0920e6cd0aa69881ba57.js" },
    {
      revision: "ab19565c3c271f425eace54a300bccb4",
      url: "/ohif/926.bundle.0920e6cd0aa69881ba57.js.LICENSE.txt",
    },
    {
      revision: "edb68d747afcc7ba604f9d8912e423be",
      url: "/ohif/926.bundle.0920e6cd0aa69881ba57.js.map",
    },
    { revision: null, url: "/ohif/935.bundle.d0f4d7f26365c2ca1943.js" },
    {
      revision: "b8c18092f3bf63d89d1300e67392bef0",
      url: "/ohif/935.bundle.d0f4d7f26365c2ca1943.js.map",
    },
    {
      revision: "32368522777a3e9234effc3714bdb24c",
      url: "/ohif/945.min.worker.js",
    },
    {
      revision: "3aba0a4898e93871a7cd61b4d0216a18",
      url: "/ohif/945.min.worker.js.map",
    },
    { revision: null, url: "/ohif/953.bundle.b1d9a4e719e4c763b88a.js" },
    {
      revision: "330aab06b4b3ffd1098213827bd1addb",
      url: "/ohif/953.bundle.b1d9a4e719e4c763b88a.js.map",
    },
    { revision: null, url: "/ohif/973.bundle.5fce4d6d2781658be8fa.js" },
    {
      revision: "3a0c02edfd51537bd05be8cfca267a53",
      url: "/ohif/973.bundle.5fce4d6d2781658be8fa.js.map",
    },
    { revision: null, url: "/ohif/976.bundle.a2049a3b0cfeb7fd06a9.js" },
    {
      revision: "adb6320abc1bb750a6cc682f61810706",
      url: "/ohif/976.bundle.a2049a3b0cfeb7fd06a9.js.map",
    },
    { revision: null, url: "/ohif/984.bundle.4207c31c0fa159ba20e7.js" },
    {
      revision: "83aa8131fff1571cd1730f79fd5bcd57",
      url: "/ohif/984.bundle.4207c31c0fa159ba20e7.js.map",
    },
    { revision: "d1895aa7a4595dc279c382e5a31ef9f4", url: "/ohif/_headers" },
    { revision: "6839a719b6810111d8097998b11293a1", url: "/ohif/_redirects" },
    {
      revision: "7242e1fac9e75cd9f9af949377713514",
      url: "/ohif/app-config.js",
    },
    { revision: null, url: "/ohif/app.bundle.816796ac9bbb110bbe41.js" },
    {
      revision: "615b541ebacf1fb83543a0f1b18a65bf",
      url: "/ohif/app.bundle.816796ac9bbb110bbe41.js.LICENSE.txt",
    },
    {
      revision: "2908f2d43ada30e93d4e58b656b159dc",
      url: "/ohif/app.bundle.css",
    },
    {
      revision: "cb4f64534cdf8dd88f1d7219d44490db",
      url: "/ohif/assets/android-chrome-144x144.png",
    },
    {
      revision: "5cde390de8a619ebe55a669d2ac3effd",
      url: "/ohif/assets/android-chrome-192x192.png",
    },
    {
      revision: "e7466a67e90471de05401e53b8fe20be",
      url: "/ohif/assets/android-chrome-256x256.png",
    },
    {
      revision: "9bbe9b80156e930d19a4e1725aa9ddae",
      url: "/ohif/assets/android-chrome-36x36.png",
    },
    {
      revision: "5698b2ac0c82fe06d84521fc5482df04",
      url: "/ohif/assets/android-chrome-384x384.png",
    },
    {
      revision: "56bef3fceec344d9747f8abe9c0bba27",
      url: "/ohif/assets/android-chrome-48x48.png",
    },
    {
      revision: "3e8b8a01290992e82c242557417b0596",
      url: "/ohif/assets/android-chrome-512x512.png",
    },
    {
      revision: "517925e91e2ce724432d296b687d25e2",
      url: "/ohif/assets/android-chrome-72x72.png",
    },
    {
      revision: "4c3289bc690f8519012686888e08da71",
      url: "/ohif/assets/android-chrome-96x96.png",
    },
    {
      revision: "cf464289183184df09292f581df0fb4f",
      url: "/ohif/assets/apple-touch-icon-1024x1024.png",
    },
    {
      revision: "0857c5282c594e4900e8b31e3bade912",
      url: "/ohif/assets/apple-touch-icon-114x114.png",
    },
    {
      revision: "4208f41a28130a67e9392a9dfcee6011",
      url: "/ohif/assets/apple-touch-icon-120x120.png",
    },
    {
      revision: "cb4f64534cdf8dd88f1d7219d44490db",
      url: "/ohif/assets/apple-touch-icon-144x144.png",
    },
    {
      revision: "977d293982af7e9064ba20806b45cf35",
      url: "/ohif/assets/apple-touch-icon-152x152.png",
    },
    {
      revision: "6de91b4d2a30600b410758405cb567b4",
      url: "/ohif/assets/apple-touch-icon-167x167.png",
    },
    {
      revision: "87bff140e3773bd7479a620501c4aa5c",
      url: "/ohif/assets/apple-touch-icon-180x180.png",
    },
    {
      revision: "647386c34e75f1213830ea9a38913525",
      url: "/ohif/assets/apple-touch-icon-57x57.png",
    },
    {
      revision: "0c200fe83953738b330ea431083e7a86",
      url: "/ohif/assets/apple-touch-icon-60x60.png",
    },
    {
      revision: "517925e91e2ce724432d296b687d25e2",
      url: "/ohif/assets/apple-touch-icon-72x72.png",
    },
    {
      revision: "c9989a807bb18633f6dcf254b5b56124",
      url: "/ohif/assets/apple-touch-icon-76x76.png",
    },
    {
      revision: "87bff140e3773bd7479a620501c4aa5c",
      url: "/ohif/assets/apple-touch-icon-precomposed.png",
    },
    {
      revision: "87bff140e3773bd7479a620501c4aa5c",
      url: "/ohif/assets/apple-touch-icon.png",
    },
    {
      revision: "05fa74ea9c1c0c3931ba96467999081d",
      url: "/ohif/assets/apple-touch-startup-image-1182x2208.png",
    },
    {
      revision: "9e2cd03e1e6fd0520eea6846f4278018",
      url: "/ohif/assets/apple-touch-startup-image-1242x2148.png",
    },
    {
      revision: "5591e3a1822cbc8439b99c1a40d53425",
      url: "/ohif/assets/apple-touch-startup-image-1496x2048.png",
    },
    {
      revision: "337de578c5ca04bd7d2be19d24d83821",
      url: "/ohif/assets/apple-touch-startup-image-1536x2008.png",
    },
    {
      revision: "cafb4ab4eafe6ef946bd229a1d88e7de",
      url: "/ohif/assets/apple-touch-startup-image-320x460.png",
    },
    {
      revision: "d9bb9e558d729eeac5efb8be8d6111cc",
      url: "/ohif/assets/apple-touch-startup-image-640x1096.png",
    },
    {
      revision: "038b5b02bac8b82444bf9a87602ac216",
      url: "/ohif/assets/apple-touch-startup-image-640x920.png",
    },
    {
      revision: "2177076eb07b1d64d663d7c03268be00",
      url: "/ohif/assets/apple-touch-startup-image-748x1024.png",
    },
    {
      revision: "4fc097443815fe92503584c4bd73c630",
      url: "/ohif/assets/apple-touch-startup-image-750x1294.png",
    },
    {
      revision: "2e29914062dce5c5141ab47eea2fc5d9",
      url: "/ohif/assets/apple-touch-startup-image-768x1004.png",
    },
    {
      revision: "f692ec286b3a332c17985f4ed38b1076",
      url: "/ohif/assets/browserconfig.xml",
    },
    {
      revision: "f3d9a3b647853c45b0e132e4acd0cc4a",
      url: "/ohif/assets/coast-228x228.png",
    },
    {
      revision: "ad6e1def5c66193d649a31474bbfe45d",
      url: "/ohif/assets/favicon-16x16.png",
    },
    {
      revision: "84d1dcdb6cdfa55e2f46be0c80fa5698",
      url: "/ohif/assets/favicon-32x32.png",
    },
    {
      revision: "95fb44c4998a46109e49d724c060db24",
      url: "/ohif/assets/favicon.ico",
    },
    {
      revision: "5df2a5b0cee399ac0bc40af74ba3c2cb",
      url: "/ohif/assets/firefox_app_128x128.png",
    },
    {
      revision: "11fd9098c4b07c8a07e1d2a1e309e046",
      url: "/ohif/assets/firefox_app_512x512.png",
    },
    {
      revision: "27cddfc922dca3bfa27b4a00fc2f5e36",
      url: "/ohif/assets/firefox_app_60x60.png",
    },
    {
      revision: "2017d95fae79dcf34b5a5b52586d4763",
      url: "/ohif/assets/manifest.webapp",
    },
    {
      revision: "cb4f64534cdf8dd88f1d7219d44490db",
      url: "/ohif/assets/mstile-144x144.png",
    },
    {
      revision: "334895225e16a7777e45d81964725a97",
      url: "/ohif/assets/mstile-150x150.png",
    },
    {
      revision: "e295cca4af6ed0365cf7b014d91b0e9d",
      url: "/ohif/assets/mstile-310x150.png",
    },
    {
      revision: "cbefa8c42250e5f2443819fe2c69d91e",
      url: "/ohif/assets/mstile-310x310.png",
    },
    {
      revision: "aa411a69df2b33a1362fa38d1257fa9d",
      url: "/ohif/assets/mstile-70x70.png",
    },
    {
      revision: "5609af4f69e40e33471aee770ea1d802",
      url: "/ohif/assets/yandex-browser-50x50.png",
    },
    {
      revision: "cfea70d7ddc8f06f276ea0c85c4b2adf",
      url: "/ohif/assets/yandex-browser-manifest.json",
    },
    {
      revision: "52b9a07fe0541fe8c313d9788550bf51",
      url: "/ohif/b6b803111e2d06a825bd.wasm",
    },
    {
      revision: "7edb59d2be7c993050cb31ded36afa31",
      url: "/ohif/c22b37c3488e1d6c3aa4.wasm",
    },
    {
      revision: "ca9f5d753dc607c78468055a37fc171c",
      url: "/ohif/cornerstoneDICOMImageLoader.min.js",
    },
    {
      revision: "f85de7fd8a9a8d95833085a001a19345",
      url: "/ohif/cornerstoneDICOMImageLoader.min.js.map",
    },
    {
      revision: null,
      url: "/ohif/dicom-microscopy-viewer.bundle.6a8d5af44a1cb4a7c513.js",
    },
    {
      revision: "a32734d2bcb762bc2576581869d2a32c",
      url: "/ohif/dicom-microscopy-viewer.bundle.6a8d5af44a1cb4a7c513.js.LICENSE.txt",
    },
    {
      revision: "a8bda602e795d2deee010ff1667b801e",
      url: "/ohif/dicom-microscopy-viewer.bundle.6a8d5af44a1cb4a7c513.js.map",
    },
    {
      revision: "fa4dc6d260154109a901a1ac672bd6d2",
      url: "/ohif/dicomMicroscopyViewer.min.js",
    },
    {
      revision: "450494c199cf8dd8e8c34d5e98bf5334",
      url: "/ohif/dicomMicroscopyViewer.min.js.LICENSE.txt",
    },
    {
      revision: "8a01f4e4374adc87eb07850f350aea8f",
      url: "/ohif/es6-shim.min.js",
    },
    {
      revision: "020680fc0de257a26ef6c1df902f8d8f",
      url: "/ohif/es6-shim.min.js.LICENSE.txt",
    },
    { revision: "d30f97b3451e9c68df3c71eb1850e68c", url: "/ohif/google.js" },
    { revision: "72b32c69327140afe1ebf420bf73b86e", url: "/ohif/index.html" },
    {
      revision: "5d4c22bbf4862549e9b5e146e580b3e1",
      url: "/ohif/index.worker.1c69152d710fa7b84bce.worker.js",
    },
    {
      revision: "066fd130de42b02857b634de1dc49a73",
      url: "/ohif/index.worker.1c69152d710fa7b84bce.worker.js.map",
    },
    {
      revision: "dea2eed78c84c32cf7a90d565a289883",
      url: "/ohif/index.worker.min.worker.js",
    },
    {
      revision: "fd1116add443fee52a935df926396e0f",
      url: "/ohif/index.worker.min.worker.js.map",
    },
    {
      revision: "96664560310999eea0795ed980d33a97",
      url: "/ohif/init-service-worker.js",
    },
    {
      revision: "74fc9658b62903be2048c1f82a22b4d4",
      url: "/ohif/manifest.json",
    },
    {
      revision: "3fa71aa0af3e34b4ebd9a71eee0f4bdd",
      url: "/ohif/ohif-logo-light.svg",
    },
    {
      revision: "7e81da785c63e75650101db6c5d7560e",
      url: "/ohif/ohif-logo.svg",
    },
    {
      revision: "8032232e4e08184ee8a9e4c018c8ba55",
      url: "/ohif/oidc-client.min.js",
    },
    {
      revision: "b5a040ab8895994d381772e7fa6e3a84",
      url: "/ohif/oidc-client.min.js.LICENSE.txt",
    },
    {
      revision: "f5fd3850f3da362de535533e3803383f",
      url: "/ohif/polyfill.min.js",
    },
    {
      revision: "f528b6861c82ee4415fce0821fd695c1",
      url: "/ohif/silent-refresh.html",
    },
    { revision: "92392ae6884cecd987655aec61ff5661", url: "/ohif/sw.js.map" },
  ]);
//# sourceMappingURL=sw.js.map


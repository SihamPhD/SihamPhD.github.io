if (
  (navigator.serviceWorker.getRegistrations().then(function (e) {
    for (let o of e) o.unregister();
  }),
  "function" == typeof importScripts)
) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-window.prod.mjs"
  );
  var supportsServiceWorker = "serviceWorker" in navigator,
    isNotLocalDevelopment =
      -1 === ["localhost", "127"].indexOf(location.hostname);
  if (supportsServiceWorker && isNotLocalDevelopment) {
    const e = (window.PUBLIC_URL || "/") + "sw.js",
      o = new Workbox(e);
    o.addEventListener("waiting", (e) => {
      const r = !1 === e.wasWaitingBeforeRegister;
      console.log("isFirstTimeUpdatedServiceWorkerIsWaiting", r),
        o.addEventListener("controlling", (e) => {
          window.location.reload();
        }),
        o.messageSW({ type: "SKIP_WAITING" });
    }),
      o.register();
  }
}

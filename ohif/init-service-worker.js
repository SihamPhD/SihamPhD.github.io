if (navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (let registration of registrations) {
      registration.unregister();
    }
  }), "function" == typeof importScripts) {
    importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-window.prod.mjs");
    var supportsServiceWorker = "serviceWorker" in navigator,
        isNotLocalDevelopment = -1 === ["localhost", "127"].indexOf(location.hostname);
    if (supportsServiceWorker && isNotLocalDevelopment) {
      const swUrl = (window.PUBLIC_URL || "/") + "sw.js";
      const workbox = new Workbox(swUrl);
      workbox.addEventListener("waiting", (event) => {
        const isFirstTimeUpdatedServiceWorkerIsWaiting = !event.wasWaitingBeforeRegister;
        console.log("isFirstTimeUpdatedServiceWorkerIsWaiting", isFirstTimeUpdatedServiceWorkerIsWaiting);
        workbox.addEventListener("controlling", (event) => {
          window.location.reload();
        });
        workbox.messageSW({ type: "SKIP_WAITING" });
      });
      workbox.register();
    }
  }
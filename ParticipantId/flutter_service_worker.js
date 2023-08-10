'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-512.png": "eab993b8abda51517223b665aadfab2d",
"icons/Icon-maskable-512.png": "eab993b8abda51517223b665aadfab2d",
"icons/Icon-maskable-192.png": "1dec3d27d617498ddb4d55468cbc4378",
"icons/Icon-192.png": "1dec3d27d617498ddb4d55468cbc4378",
"splash/img/branding-3x.png": "a2472a996742061e3bf480b35c7fd696",
"splash/img/dark-2x.png": "e3c513d75301d93ffdb0020be78a176b",
"splash/img/branding-2x.png": "9c0fe9e966524ce7ed3dd09a640a7b73",
"splash/img/dark-4x.png": "0fae5c76da56d7ad8c6368a7e91fcd34",
"splash/img/branding-dark-2x.png": "cec132e4d14619f7ca28837a35502023",
"splash/img/light-4x.png": "dd50ac96f26a59e76ad84b12c2ccd8e1",
"splash/img/branding-4x.png": "11c9110896ed2e5c67ee0a8e1ac8540e",
"splash/img/dark-3x.png": "9832e312e3747556b5b2e4f494d67cf2",
"splash/img/dark-1x.png": "4b5229b35749489e19cb826871faef59",
"splash/img/branding-dark-4x.png": "1fdde2b078d342ceac58300177f513d6",
"splash/img/branding-dark-1x.png": "ce2613d76eb642874a072b17df6a753b",
"splash/img/light-3x.png": "cb71ea5362f392156cea48397d9e2a7e",
"splash/img/branding-1x.png": "40d486cf9519c660e2e6b9bb1a9fd8c5",
"splash/img/light-2x.png": "4331fb84b264249cf3aee212bfb35723",
"splash/img/light-1x.png": "9835637d5327874797f499a5748a9640",
"splash/img/branding-dark-3x.png": "3586cde7e705d1d7083931000ca33fc8",
"main.dart.js": "7f2f0f04c6063c0230b07f9484fe25eb",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"version.json": "b0e308241e6cec506971eb609968a7fb",
"favicon.png": "97e33b38340efbd09e7a0ff0192f58ce",
"index.html": "d201b9b08a29a4a054f31ce5fd953628",
"/": "d201b9b08a29a4a054f31ce5fd953628",
"assets/pubspec.yaml": "d4bc273723204cad72e78e86c8d29e2e",
"assets/FontManifest.json": "3845bee1ded990fecd1a2a6ee2710b65",
"assets/AssetManifest.bin": "f831b6c328afd3b8d4e94547fd57c291",
"assets/AssetManifest.json": "33ab872785276ff212929b2f467088af",
"assets/assets/translations/de.json": "eaad5eb81bfd2c49d01f3065acd5b1d5",
"assets/assets/translations/en.json": "ede3dfcd8e618afc054680766841d8a6",
"assets/assets/images/splash/brand.svg": "2aebdb4c72f79ff01cec6cbf74c9ddcf",
"assets/assets/images/splash/image_dark_a12.png": "5a45625b270e24162bd0e16ed8f0c1da",
"assets/assets/images/splash/brand_dark.png": "19f13049e98982c9f3dedfb6bfb6b2df",
"assets/assets/images/splash/brand.png": "4c7c1fadac50f2797b220325dfea0d3f",
"assets/assets/images/splash/image.png": "4084e0663aa24868347831b454ff2700",
"assets/assets/images/splash/image_a12.png": "e152038f75516fa370fea8dfbbb2b1f1",
"assets/assets/images/splash/image_dark.png": "73a398d1a6495bc294c1272c9ebeb8b1",
"assets/assets/images/misc/longest_index.svg": "636754632e077140e82bff59200253cf",
"assets/assets/images/misc/hand_both.svg": "1fae1e3083070b6b5a6480eebdd5f678",
"assets/assets/images/misc/longest_equal.svg": "4e3a04ea4e6c4f24a1254bf620f4a0c8",
"assets/assets/images/misc/icon.svg": "e00c6e561c14fd0e35788cd90775e7cd",
"assets/assets/images/misc/longest_ring.svg": "94317c74639b0b510ec7390f982ee594",
"assets/assets/images/misc/hand_right.svg": "fe7baa9042a02f9519d051e5c75e4fbf",
"assets/assets/images/misc/hand_left.svg": "1af663b1fe87ab58242e2de3a82c5540",
"assets/assets/images/launcher/icon.png": "ca5f784996c8e200d318e01b3529859c",
"assets/assets/images/launcher/icon_front.png": "34978ccf41b6b0528e3dec31981838f4",
"assets/assets/images/launcher/icon_back.png": "a9e80c95932ccf820e482434f13b0382",
"assets/fonts/MaterialIcons-Regular.otf": "321b3145e09da4db03572eb0e9ddda34",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/NOTICES": "70eb16da4028c4e60e8380a3b7bd4529",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1b974d6e87b53b9ffaad910ffea7da4d",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/flutter_remix/lib/fonts/FlutterRemix.ttf": "35f01f3d255b0e2d062df4cbe13c1098",
"manifest.json": "30074e37344903aaef2a3a69c507b503"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

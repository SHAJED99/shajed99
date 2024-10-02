'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"android/web_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"favicon.png": "9eaa84309394e9b970c7ffa3d01aec06",
"README.md": "d73674141a8962d39438fa88353e0cf4",
"version.json": "009c9e65172e010890f7f65fde438006",
"web.iml": "731a1a3080009db8d4572ef3fb1679c3",
"icons/Icon-192.png": "422853676a054600867f81c59b27e374",
"icons/Icon-maskable-192.png": "422853676a054600867f81c59b27e374",
"icons/Icon-512.png": "ca7456603d42459fe32d1779c2ff142d",
"icons/Icon-maskable-512.png": "ca7456603d42459fe32d1779c2ff142d",
"main.dart.js": "7437ca803f35b8fba21077769dfefac6",
"index.html": "a4ee4472ac58766f9ebd7d90bda06e81",
"/": "a4ee4472ac58766f9ebd7d90bda06e81",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/lib/assets/images/features/responsive_2.gif": "038cf201354a741cd34d3b163680f8ff",
"assets/lib/assets/images/features/mvc.jpeg": "9d096d43b52d6235ca7655e133d9a580",
"assets/lib/assets/images/features/parallax_2.gif": "d8089e24088b8c4e14a4fe0b9b50c91f",
"assets/lib/assets/images/features/responsive_3.gif": "81898955445b1028acfe679198c4e1cc",
"assets/lib/assets/images/features/responsive_1.gif": "90af454bc99980649d872b40096427d4",
"assets/lib/assets/images/features/parallax_1.gif": "d45a9c0fb406d7a644490c071e76d40f",
"assets/lib/assets/images/background/4.png": "eb4e1b9b470ee830cb7b3a258e3649f4",
"assets/lib/assets/images/background/0.png": "1726bc5836f349a30d6562a2f37b2c90",
"assets/lib/assets/images/background/1.png": "74828b53addeb6ffa5eb2a8e3e0e6820",
"assets/lib/assets/images/background/2.png": "26fbde36a32e2c9095c9f6c726249645",
"assets/lib/assets/images/background/3.png": "81e6bec9dfae72ade88dfd5ba267e58b",
"assets/lib/assets/images/projects/time_range_selector_widget/3.gif": "a798eaf7f495202a5eed507820f6c0b6",
"assets/lib/assets/images/projects/time_range_selector_widget/5.gif": "d278856069e1c72ce534c6d0d464221f",
"assets/lib/assets/images/projects/time_range_selector_widget/6.gif": "5ac0958c2c688e43d63167bf8ac03edc",
"assets/lib/assets/images/projects/time_range_selector_widget/1.gif": "cb7e86ab847afba89b9113a0df715523",
"assets/lib/assets/images/projects/time_range_selector_widget/4.gif": "c7c795b403cf18b3c270a0596bc8aaf5",
"assets/lib/assets/images/projects/time_range_selector_widget/2.gif": "3cab0e09b839fb6f8d12906bbb7814c4",
"assets/lib/assets/images/projects/ecommerce/4.png": "6ed86bbf169dd723d54fef6d53ae1e7f",
"assets/lib/assets/images/projects/ecommerce/5.png": "c15d08cdca760dfa8e9b415e876cbfb8",
"assets/lib/assets/images/projects/ecommerce/1.png": "c5bb7e3903fa061e6c3c397dc3637205",
"assets/lib/assets/images/projects/ecommerce/6.png": "e048307913c99bfc62c337e31c2c4775",
"assets/lib/assets/images/projects/ecommerce/2.png": "693c6ecb2dc4039d04b29379b3951b3f",
"assets/lib/assets/images/projects/ecommerce/3.png": "f84721a65e9d7be747b1757bf3479365",
"assets/lib/assets/images/projects/on_process_button_widget/3.gif": "596524bbe758be8a2f15ed5fa7b5956e",
"assets/lib/assets/images/projects/on_process_button_widget/5.gif": "7dfe5f1fbcd44c0bfee3cbb38e1fbef5",
"assets/lib/assets/images/projects/on_process_button_widget/6.gif": "b3009d35a2502e6a7ed7df292bc6a7bc",
"assets/lib/assets/images/projects/on_process_button_widget/1.gif": "8045843ec7d3dc26536ec32a72253008",
"assets/lib/assets/images/projects/on_process_button_widget/4.gif": "549b4c01187a4e131358217c0a2779d5",
"assets/lib/assets/images/projects/on_process_button_widget/2.gif": "04c19296a139820b55137337ef6c4e81",
"assets/lib/assets/images/projects/halda/1.png": "709f900371dce3cfc11badd7f1ff95a7",
"assets/lib/assets/images/projects/halda/2.png": "7d7fa2ce480552989c7ce111ff8ba9c3",
"assets/lib/assets/images/projects/halda/3.png": "1c8938559c587933b0aa4c9764c43dd1",
"assets/lib/assets/images/projects/efficient_app/4.png": "979ec08aff555ddebfa968a3d4c551da",
"assets/lib/assets/images/projects/efficient_app/5.png": "b850a31a755d289e46cc7e94755f7c88",
"assets/lib/assets/images/projects/efficient_app/1.png": "3aa26db82e89be74ffb8d8eb1b446795",
"assets/lib/assets/images/projects/efficient_app/7.png": "259ca0f15c77f2a351dd80d7cbcef136",
"assets/lib/assets/images/projects/efficient_app/6.png": "55d1ca22becf0520afbab026f545bdba",
"assets/lib/assets/images/projects/efficient_app/2.png": "c8a944d4cc5c8e028b05bc41f76e3b30",
"assets/lib/assets/images/projects/efficient_app/3.png": "fbd835163cb885f3e8b17a2329a72524",
"assets/lib/assets/images/projects/restaurant_management_system/4.png": "bc51320be393e8647c0997e1292a6e59",
"assets/lib/assets/images/projects/restaurant_management_system/5.png": "bab6b245ebbcfa747eac348fcb595115",
"assets/lib/assets/images/projects/restaurant_management_system/1.png": "a390723005a509c0d79345745bd92e9a",
"assets/lib/assets/images/projects/restaurant_management_system/2.png": "b952d4ba870dc5be4d54ca733f0b157c",
"assets/lib/assets/images/projects/restaurant_management_system/3.png": "22c75a5e220dd3db05b4a36a37b1caad",
"assets/lib/assets/images/projects/todo/1.png": "a7283374fd3989bc3f1081003ede7114",
"assets/lib/assets/images/projects/todo/2.png": "7f19f1e613440c35c6bcf148929cec4c",
"assets/lib/assets/images/projects/todo/3.png": "cab8355ab4cd50a378dfa7115aa70bc3",
"assets/lib/assets/images/projects/easy_hr/4.png": "e4e6d91f4756e8b5567ee41b05d836f9",
"assets/lib/assets/images/projects/easy_hr/5.png": "0f31375025d2d552d7d44300383bea90",
"assets/lib/assets/images/projects/easy_hr/1.png": "bd99c6ca5fe3903bb8b5d0aac2c8dac7",
"assets/lib/assets/images/projects/easy_hr/6.png": "d73bbd81ed8ea296c59b61e297b9e985",
"assets/lib/assets/images/projects/easy_hr/2.png": "3dcd16f3d423a6084e00b66bafbe7a71",
"assets/lib/assets/images/projects/easy_hr/3.png": "07308892441cd5cd328a35bfd856b3b7",
"assets/lib/assets/images/projects/foodPandu/4.jpg": "727d60063c9bb0b9e865e03d5bac0e97",
"assets/lib/assets/images/projects/foodPandu/2.jpg": "4e238f5ff51d3f03ac99ea98c1d2ffc8",
"assets/lib/assets/images/projects/foodPandu/7.jpg": "4ac550f577f22db81d421bacf3abc24b",
"assets/lib/assets/images/projects/foodPandu/8.jpg": "2c94819a5104c1fc42cc2b0f77d99b53",
"assets/lib/assets/images/projects/foodPandu/3.jpg": "31a90a192109662645545abdbeb05083",
"assets/lib/assets/images/projects/foodPandu/9.jpg": "7a4e162e5c3aae02837829c0096d22d9",
"assets/lib/assets/images/projects/foodPandu/1.jpg": "af58d50146a9a65bf25a4410688dbd01",
"assets/lib/assets/images/projects/foodPandu/5.jpg": "e69617ba6e867c01a3fd6eb43359c16d",
"assets/lib/assets/images/projects/foodPandu/6.jpg": "1cd723b1acde70951340173aa89b820d",
"assets/lib/assets/images/projects/on_popup_window_widget/3.gif": "69793b139165ea22af18fc771731fe6d",
"assets/lib/assets/images/projects/on_popup_window_widget/1.gif": "2a63a8140ed06511dec6d34ea20d5cc6",
"assets/lib/assets/images/projects/on_popup_window_widget/4.gif": "a12d681ed8b1cfc91ffab028a3288aea",
"assets/lib/assets/images/projects/on_popup_window_widget/2.gif": "ae2dec237047451f5efe781f63a65437",
"assets/lib/assets/images/projects/on_text_input_widget/3.gif": "508fd6712e8da1e34498d9c2c7ec488a",
"assets/lib/assets/images/projects/on_text_input_widget/5.gif": "a7f95296bb2e72b0721f2d8502488080",
"assets/lib/assets/images/projects/on_text_input_widget/6.gif": "4b52a01cba05e52e5b42ebd57cc3365f",
"assets/lib/assets/images/projects/on_text_input_widget/1.gif": "ced4412480877bbeff9a2abb5097c05f",
"assets/lib/assets/images/projects/on_text_input_widget/4.gif": "80d14b97218dbf3594b364e6c517adb6",
"assets/lib/assets/images/projects/on_text_input_widget/2.gif": "8b79828a4ff0d622bd6909502ad9f3cf",
"assets/lib/assets/images/projects/weather_app/1.png": "aa9649fb1899a9c3196ff7cdf6882147",
"assets/lib/assets/images/projects/task_manager/4.png": "de37ec9685179abe99db9f1c61ce37cb",
"assets/lib/assets/images/projects/task_manager/5.png": "afbcbc5140b30ea9ba685fb01264b78d",
"assets/lib/assets/images/projects/task_manager/1.png": "477e8be583147ac22bec485fb66b3159",
"assets/lib/assets/images/projects/task_manager/6.png": "c82e559d87fe0ad4b244d9867ef4328a",
"assets/lib/assets/images/projects/task_manager/2.png": "7a27a0749bbf28ab77bb298e18f10b61",
"assets/lib/assets/images/projects/task_manager/3.png": "de8cd367679ac2efb06254cc48b4409b",
"assets/lib/assets/images/projects/atrai/4.png": "9acbb1643c5f88adf3c1ab0e861aa5f8",
"assets/lib/assets/images/projects/atrai/5.png": "a68a2c3b5ccb4c659205a847605f21c3",
"assets/lib/assets/images/projects/atrai/8.png": "d734648fcc3904ef13432c3c7852408a",
"assets/lib/assets/images/projects/atrai/1.png": "59fdf504fe6c0330bd3ae74458269250",
"assets/lib/assets/images/projects/atrai/7.png": "c90c4ce66591817dafa683d8899b5035",
"assets/lib/assets/images/projects/atrai/6.png": "8c255c056401e01d0ccd1dc9b2fe6586",
"assets/lib/assets/images/projects/atrai/2.png": "ab937f948cf0c6af5f39016eee4a1390",
"assets/lib/assets/images/projects/atrai/3.png": "ed2138f33de0f0655cdf64922250e83d",
"assets/lib/assets/images/icons/pubDev.png": "54850b839965d62ea0acaf83fb9f7c65",
"assets/lib/assets/images/icons/linkedin.svg": "ea3c021a1898e3e5084e6c51a465246c",
"assets/lib/assets/images/icons/github.svg": "3806781283adde57dfbb6941fcccd8f6",
"assets/lib/assets/images/icons/playStore.png": "94fc3d47cccdd90b35c4aafc489482ed",
"assets/lib/assets/images/icons/moon.svg": "04aa72beef518a62c5699ee6903c092a",
"assets/lib/assets/images/icons/youtube.png": "b298be77f0452ff0de6bd2f12c30b621",
"assets/lib/assets/images/icons/more_icon.svg": "8644325aa9d961bbef92a197336efb64",
"assets/lib/assets/images/icons/fiverr.svg": "ec17635693b50471b8ebcd9941b580f7",
"assets/lib/assets/images/icons/sun.svg": "06e23ff58a111fb8c439ba1db033085a",
"assets/lib/assets/images/photos/%2523my_photo.png": "671f453cad67b39f5bed8caa5305d3a0",
"assets/lib/assets/images/photos/my_photo.png": "2d55a70ece7a8f2b58f9fffa70ec5c7a",
"assets/AssetManifest.bin.json": "c24dca55dfdcfacc86f0234864fd45ad",
"assets/AssetManifest.json": "53aac105b0f24ea77b693da1b00ab1b9",
"assets/fonts/MaterialIcons-Regular.otf": "6c3d106e939d6be1e98be76c678810a7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "7f13f36ab0588ec0af9eb843f9a66f66",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "ef79ab38e4b061a38e31683ec5dca2eb",
".idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769",
".idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
".idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
".idea/libraries/Dart_SDK.xml": "df46f2681374323165246992db844d4d",
".idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/heads/main": "3ad0609b20c7ceb9bc8072ec85bb627a",
".git/logs/refs/remotes/origin/HEAD": "a2529c7049d13155116be0df5faaa86f",
".git/logs/refs/heads/main": "a2529c7049d13155116be0df5faaa86f",
".git/logs/HEAD": "a2529c7049d13155116be0df5faaa86f",
".git/packed-refs": "a2ee455e51b3bb48ad8d3468f36227e4",
".git/FETCH_HEAD": "c9a4d9208be3e6f9c6c87f3f6e13322e",
".git/objects/pack/pack-f04879949de3e08a46e291c0f8655d753672c307.pack": "e9f96460ffe38635a4f5a9462c2ed6da",
".git/objects/pack/pack-f04879949de3e08a46e291c0f8655d753672c307.idx": "fbd44771ba143faf5f9e6f327bc7ebb3",
".git/objects/pack/pack-fdc85ecfd2b5788bab6df3cd2c898d102f6aa5fd.pack": "cbd0c6d332d68d15785c8b1b4ab5538c",
".git/objects/pack/pack-fdc85ecfd2b5788bab6df3cd2c898d102f6aa5fd.idx": "042a3fe31b826066ac7ccf02821e62d1",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "ae50a58f5ff17d29fc789e0e718b76eb",
".git/config": "920ebf11d07613668a6a937c889e0ad0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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

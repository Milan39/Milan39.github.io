'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4122e20e2a5a4872aecf7011b8e94f4a",
"version.json": "009c9e65172e010890f7f65fde438006",
"favicon.ico": "6cc61079b98777711810a11e552c6737",
"index.html": "785fd6fe101c5d172370547fd08db29a",
"/": "785fd6fe101c5d172370547fd08db29a",
"main.dart.js": "9e64413cd89ad6a713e8e1947f81218f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "f6149ade9b1a46c33f3fa516b477185b",
".git/objects/61/060dd81595ddd03b83cfded6371f26eb9a0696": "706c7f195c1a3d737c8f04680322fefa",
".git/objects/0d/df77c6bab97f17fa06bc544d6e38c8ae951db0": "71d25ff8b78fb19645ceacaeb6e05253",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/3e/d49b6e19666254d36fe1dea7e81d295e9ce572": "dcb5a774383694d3d3c61990481f1b96",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/b18f8f29f3493930fa71592e4571e7bf509a09": "9df5cc9dd6fd9afe195816c8666cbb61",
".git/objects/3c/1ed0f5c411c0fbbcce5569dd89d0b7fc3d142b": "edeee492063cc1094e7ee3dc2115ce8f",
".git/objects/34/8c617b48e78fff3f55a7abeac7edb1a5dd92d8": "c6c8989abc0c2a5cbbac8af9db968624",
".git/objects/02/49f436ac72940d42a1a44d54a22dac18f8fa09": "be36adeebb9d4a3d57cddcc6273de9b9",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/f2babd10b60acb28049a25f530c3ba25e5740a": "31fcf25d0da4945ec1636e8384ddaf4c",
".git/objects/a5/75de6930135512dec4da7c2f1b9b77d519bf3f": "df1fd788d28d4b77fe6e36ca10b6a495",
".git/objects/d1/b37851866f99074a708b242f12c267c96e14dd": "b2ba4070965c3ed9e3425871a845d3f5",
".git/objects/d1/a0cbc4374f643b8262de4afb80c4474c2f6d54": "0d1e92366552730856d343cc2b901d8e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/aa75da2ac88a81c18b171b369970386dfe893e": "520454680d24ed137e7a3eff01ade668",
".git/objects/ae/3128d69b3ce55328f2b24f7ddf756d8434f8e7": "b16d4d698a7216e2fe5318afbc28b4f3",
".git/objects/ae/96db2aee5d5afca4203e6486975600f294e653": "de9e88f4a0bfff97d643e874629b93c5",
".git/objects/ab/774c805b1709a4d71106ce988786698849d775": "8b13ccccc4ad812c32e6fc3303854fd4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/18b367338bb647f63a2628ed928f3bf6068b9c": "28e90c9a53226194dc00d0c48cfe7bd7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/375f3bf2310732a2d64b324a0fecefdcf16d71": "0e219c225c07a3431bd6bd4be61fb82c",
".git/objects/ca/c641e28b7a853a76ff7b7bd35fb899f0800ea7": "644daa86198157f9532350f9039c4fca",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fb/601b233c542e04b33333ae93804e8b9fadbd05": "834ff98b19d9710e857a854184303158",
".git/objects/ed/b3d8bf87a5651953da329e8c10e88653a1a68e": "408c8969f5357994b988a7495c3eed1b",
".git/objects/20/7a9d1f946ee06658295f8bc0f48faf2bdf611c": "b3d92a6f2753f8e98791779c713f3121",
".git/objects/4b/573ebed422de956f646f6132fa03175e3cdb96": "b039937332760fba62834610324f8519",
".git/objects/89/4145ea5c86c51d7c339d4302bb5a16b4a4cb14": "af1175c9e43c746d24c2e3dbfd14fd7c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/b13cf4b4d7b3e6d84d44f087fcafa4b1e8e4e0": "069c9001d78c9125809841ce1e6ea8a8",
".git/objects/17/dc8b8f90d0ed92020ca4d8eebc29743b130ab6": "4812affddff0b20af3de692a414c64d9",
".git/objects/4d/9e9917271cbbdba4b2e24eeb432c4355a56f5b": "f32bca55a1776b44e15cf4c72fe95f4b",
".git/objects/75/28cca2aad2e759835c6fa83bdd6a18fd8c3e47": "e32a563adae6ee00d162711efb8475a7",
".git/objects/81/5413f1ffdb38612d0e19df733da83eeb46d0a1": "cf5e1b206dcaaee43684c7de876ec3ac",
".git/objects/72/3199831eee228edda15eed3ec6d5a41f423aa1": "657130d81f04c9ff0535dd72b2793311",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/6341a226894c035317444a2ff10390a856320e": "d9a66783a4987e36656bc6a311caa399",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/4a72d3aed2e99e4d5e22b120189b28147c03f6": "c735b1d4905e3af1052f3694a1c83aaa",
".git/objects/88/e5fe8b1a4f67414040f906d60212362f9f85f9": "f9adef0ce382bec47f40a7f8c5ca43db",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/31/e61cff2143cfd87a50e3b2d8e6c910445afd23": "68c9b73fbbc8e9f00c2cb3f84d7be2bd",
".git/objects/62/454616c272bd2392634fc9df101c13f206a50c": "7d930e586927f27d97a12f4f7345f699",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/5efdd94a0324e2c746ada341e81628e9acef48": "d7cacb89212995b836dd7094858036e6",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/fff06cc11613952e5192cce656baed798f5cb9": "f98ad02ec87c67c70b25647f481cff65",
".git/objects/52/7d915eddcb4bbdf4a67484650f9ffb87e84a29": "bb9e2e1fd70aa006d82c8bc93534cd6c",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/90/b5dbb435f0c83e8da82fb2aa87f9a709649639": "4e9b55f4e4c52173f1ebb9c15ec15342",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/a7a82cbf9b810944ffb8334d20965c34910eda": "de141a9503c946da4ac6d6f6dea75064",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/408f2c729ddcea9973558053f6d1c3f713e2ac": "ec9478a4a3aab39baf550f33f45a8e9c",
".git/objects/b0/4e22f0a3445055fa47b7201b8c30ae9b8a9cb6": "d7256e6531a7dab8b8166b880416b4ed",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/3ff0737b2ce55b1d274159543ce298430787c7": "c79593ab230c0d16b5d76aa6d7bf7292",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/84/46be5e15fc6d8d0dbefa52782b7d62275cd3a5": "1d26c33d44ed8a075aa346e5cf1f03ef",
".git/objects/84/86faca609ea9c7cc3f02d24abc466fc93e493f": "a76f0ca3b7d7897debd98468d498d193",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/22/2f9336382a6c36cc050e32446b626c11e02a77": "e0f30b919c6cfb819897b0fe58294c93",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3f3413ea675f403799e489db5ab0ae7c",
".git/logs/refs/heads/main": "baf6b6c35f96c4945ca85316ddce036f",
".git/logs/refs/remotes/origin/main": "75617859efd3e6032578505b84361e54",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "da80dc56486dda0e85345cdad61b84d9",
".git/refs/remotes/origin/main": "da80dc56486dda0e85345cdad61b84d9",
".git/index": "23c3067d5b8a7fcac968519efbdb1930",
".git/COMMIT_EDITMSG": "3287a820b37502acb7c097aeba58c3cb",
"assets/AssetManifest.json": "4ffa2204c2fde01b7a2fb35d4d4b67dc",
"assets/NOTICES": "0a5c6d1733108b2d6596359bc04f2a44",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "da1f55e5b25d65fefe0925d0815be390",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4655496372e22e93554de30649b61e9b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f39ae12d6ae441b2e1a3538ac2304e70",
"assets/fonts/MaterialIcons-Regular.otf": "5999b18659b3413534a35fd1350d0bf8",
"assets/assets/images/me.png": "e455ba4ba4a21d4df3db33736e7f468d",
"assets/assets/images/gpast1.png": "e3fa8fee4ebb2c5dd4585f3dad55e5cf",
"assets/assets/images/revel1.png": "5ce4416aa43f6a4edcfd23ff6f593d7f",
"assets/assets/images/arjun.png": "e1315e4f9226816fd63cf1f22a697b33",
"assets/assets/images/revel2.png": "48bc6f4486653bca130c04b3e0e52541",
"assets/assets/images/revel3.png": "c277f1d8c02157776c9e7a1904fa059c",
"assets/assets/images/partner2.png": "df9e46db803c3eb4a2d38cf47919daf9",
"assets/assets/images/guide.png": "57e39e7901467366ab3b558e6d17b6c5",
"assets/assets/images/websoft.png": "a6f4f7fa5ba30ce7dcf08ce65db77d7b",
"assets/assets/images/partner3.png": "845f23e4a423b11e52d80e6a1b86588f",
"assets/assets/images/partner1.png": "25a87514b9573c15b0ff8b20538ad824",
"assets/assets/images/connect.png": "5b0b0fa31b33f03bd70bde9b2aaac614",
"assets/assets/images/dhiraj.png": "eb3c67cb80104ca8fb9b62e65dda0e11",
"assets/assets/images/bishnu.jpg": "8d145051e2419bdcb2bfcb47f5d99011",
"assets/assets/images/dvorak.svg": "700efa6f3c48f5e0760d8ab119f352a4",
"assets/assets/images/teispace.png": "cfbf52e0dfc58837d5b309c15f2d431f",
"assets/assets/images/krishna.png": "71ba2331945be4260404d2428ea90022",
"assets/assets/icons/milan_Logo.svg": "380504890cc82abaf9bf6020db38a409",
"assets/assets/icons/connect_together_logo.png": "448e854ccfd767f40e906a3a90820b12",
"assets/assets/icons/revel_partner_logo.svg": "d1b28883c4a2757673c15d82c4907327",
"assets/assets/icons/guide_logo.png": "3ef879dd9229b1b97a181d5c7289653a",
"assets/assets/icons/revel_logo.svg": "1feafca6356134bdc9eb8fe489600643",
"assets/assets/icons/gpast_logo.png": "1ca1c32af51557b61abcda9e36745514",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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

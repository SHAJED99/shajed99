'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ba1f2511fc30423bdbb183fe33f3dd0f",
".git/config": "fdaa5bd84bec67978747198dffeb5ce7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f82bd40fb2c99d2369ef3cd9a2841daf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "10102fa938af85d027178d3f9dc6cad3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "120f0546e915e3c638f83b2832782abe",
".git/logs/refs/heads/main": "120f0546e915e3c638f83b2832782abe",
".git/logs/refs/remotes/origin/HEAD": "217247e9b76fc76fe02e885c3f564a1d",
".git/logs/refs/remotes/origin/main": "f353e790d3219bb70b0449d232c47230",
".git/objects/01/8aced3ed932839f0a872717595420cc76631ac": "ccd6f3753ffdb3688b4cf43a7327e362",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/64ec0bbb28fe1f48ff2c054b11293824379065": "e764323ec65fc8543a24e357456f5e7b",
".git/objects/0a/14a402d03a15a17143338b36d15779168ff16a": "e0afc1cff667ab285b882fc5f0493302",
".git/objects/11/b42e1162ecc27fb4a65e63cbd53499dfbbd843": "f1b7bb2227efb767d4fd27b4e6eda463",
".git/objects/12/1f6881120e2418099198c999b38ad7c6dbfb35": "3d2edc9d6f24af7044b180c889f8cb0b",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/0359156c96243ae2b767317b3229220859702f": "397f1bba9822f76ec7c0098a1707e9b3",
".git/objects/18/04256dc3d61766a360a220963cdb7c123195ef": "436912dd4069e09707ffccc265c070e6",
".git/objects/18/999696a6a38a49db82f0985800071ee2884f24": "15ff2aaff6fa253e9eb74b984ee2a81c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2b/96ac4b75c02b556cd5829e3d9e2fa629342b12": "18e9b461987ce9a0ed410d0e376f6e24",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/13a1025985872dab6b89e7aacd23df0357c6b7": "096c891d2291ead722280884d202fc06",
".git/objects/38/ef4d2c316820b2ba382c6e61d9e82d4ac3646a": "3719bc36cde125f260ad494929f1ff8e",
".git/objects/3a/81bf70e2d13fbe56e9a0404a993770298f551a": "586328f55d00956a78a647ee7f339359",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/43/fdbb3a8b5e94cc2a24977008d8416b22bf9f11": "83376efa5b2cbfb14819ed8d4f2a42c0",
".git/objects/48/6a572f4706273d0a93780d702b9acec570108b": "430b33d93367d5ce6b41c39e2460a701",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/702fecb8db43a3f1df3b666be153a375729ea4": "83ca4dc698f393049598523e61c502eb",
".git/objects/53/304929b528c38018781f47150ef4480d6fe7c4": "601a37908f89f69e794cf736226b52de",
".git/objects/55/16d5bd6adda437e8c6e054bb19408b2a1835e5": "ec6b813c1f8871c84effd9f768cf04c8",
".git/objects/56/a4333fda3501a2c804164b782d98b6dcac8bcb": "f53ad2404269def5efe2ba386bd258ef",
".git/objects/58/dc549388cc2eaec4715249b026887c086513b8": "59d834c8ba80400218b4c24e1d3989fd",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/3388cc1afe59399989af57ab870fba219cf804": "adb93a4c8546837b314b2f863fc1d748",
".git/objects/62/f8fa59369c5244c9de19d628a0b85e49bcadb9": "18247717460d979cbfc99fdacbf917bd",
".git/objects/6b/1bc9e14c131884da40d1136a338e9c2f00b967": "8284a587d4a9400bc4ba15c510734461",
".git/objects/6b/244b9082600daf49b7ed0fb2abce46b10db78b": "ee2af4989c59e647d7380c280cf6a4d6",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/020d152a75bea28d0daee61b782bcd8087cfe1": "52b8a052a6c873a5d05dde1aea9244bc",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7b/213817ec08f930916fd5fbccc871cf6b230ebb": "18dd499494322ae7f2fcf2a827f7dc49",
".git/objects/80/3bcb25b46a950db444359ab7a29d20f0cd7c5a": "aa74543ac0d7470ae7037f05993fb1f5",
".git/objects/81/627cd37e7596da15c893e3657c08ea28fbcbcb": "daa8f9a319d131a7eaf81dd5d67d1983",
".git/objects/82/f3d573d6e36c71b6cde846a80d316c9efaef76": "41d92c8b51c3dcb11b74969ab1261bd0",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/c6d1cf0f3207683dfb3a8981e348032c0bc7b3": "92451f38927fdca9a1bccefc12d0ee94",
".git/objects/89/36ee013d9db04ee600f79ae6b1c683ed80dc79": "49db853b981c94a0b44c5195b618732b",
".git/objects/89/ab5b9b5921026b8a5e29a657d2b4eefd7c958e": "521ba81120419c22067077863634e710",
".git/objects/8b/cbda5a398677847fce7737ac500ba2f059cb0f": "24c4d1eb3f27c7dc17d5cd8e05cc34f3",
".git/objects/92/1d4d75d9a747f3efbfc2945a9614dcc4bfa860": "875c4b1a238249b28bccfbb4394d6985",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/8145aacdcd5da9808c490e3bcc32cf788f983e": "847e46513c8187602a4b8425e10dda96",
".git/objects/9a/547823f5fe1bcd1a72264273ab8f70258ead74": "14565a786af9d95b5c36530b54aa0ae0",
".git/objects/a4/09ef4c0aeb535717d7971b9b13aa054ffd0255": "8c78018eac2167cdd16991a890a8ef0b",
".git/objects/a4/f9c7394bd73b0100dab23525a3fcb9fbc629d2": "cfa5441bdd45d4e4550fe55202e2386e",
".git/objects/a6/b269c2dd814fc7e6d6a45bc50fa138a4dabbfa": "c8de04125bfe05bd877b39e4542448b5",
".git/objects/aa/b7b5cd8325696835286f195527e16ffb1f675a": "0d8d9b7eecd0a6c366a36a9db157ff8b",
".git/objects/ad/d901ffe0a2ef8d5cd967c767e3dbd4960b9261": "99029ed0aa59b1d49c35c4e0818a23d6",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/9431d6ead1c9051241f75f98479a983be6da24": "eda42e1d8f9b5eefcb1a2735478d2a7e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/9f36bfb04f55a150a583a5983b4ab3e59c2232": "ace4842bef7d198e3f84da77ccc89cf8",
".git/objects/bf/0426d00692371ac5f93052a053e9580f2eceb4": "2695bdbba7d033689f08bab3ed443a71",
".git/objects/bf/0baea339996022016ab1630d80e446c52d38f2": "3d83c21234544063cfae3fdc8ed444b5",
".git/objects/bf/f2d88d332dac2ee512b8e6c38e1fbcdfd0c762": "04ded86fe4c9014d8db7370f2ed65e91",
".git/objects/c3/2f3ad9800f1a2da7e90461ea757787c34cf924": "f38568be6942f243d0bc006dab76635f",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/c8/791c5ae8047273e705b8e3dbac904639011b2e": "e7caa304f4f31e5b1fbbbbd1c60f9579",
".git/objects/ca/e59f4dd3e457db1c08de9d6137b142bc9a6023": "1c9b5d02b31e6e3783fabb78cca59306",
".git/objects/cb/ced072bd6c778a9700ecedcedb04caa5925a1f": "84727ba6933d5a3422e701a4461c5de5",
".git/objects/ce/0839dcad64d0ece6090553c0e12abeccf175a3": "3dd29b86511bccb1edb4dfcd0a1e8471",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/d3/096cc2a02d90099fe802f738b6c0728958660e": "92e4179657c437e5d3367bfa1df3e3c0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/c9c633ac3021e81114355f902e518871c43145": "e9c6b75e39ee739aeb3ccb1c7ec31903",
".git/objects/de/bfabf19b7d802ad3d27148f6c5dcde07a6b076": "933cf483dd5584d8e25f96b59c9ca724",
".git/objects/e1/b4f6f62d181fc5075b909257a5e1386731d5f5": "98fae7383bc958d1278bd0738914300a",
".git/objects/e4/01827b9e13aa616913e20cd1d24cf9144c92b2": "8941562d2344a187a64ce3eda9da851d",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ec/c07ac237bf99f767158a37ab71ce7b8cec3f1c": "9298c88682f888a845b42e8d23a51101",
".git/objects/ee/e5e9180165d92aa99a5ee3098601349b3c8c2f": "bd9b7ab0fea13c0c2db4b3fb7aba6d9b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/8857231c16ef12df08850823ba8282012aaa95": "2e0f3cb6c41696881544ef7a0636d84c",
".git/objects/f6/6303d5303cad853ed5f0cbceeb742c6bc9a025": "7602d386264ed46f4c0c251eff8fd776",
".git/objects/fd/e512046b4fdabe0eabc336c017bd293e0d80e4": "6e274116c58a22569c17940269422cff",
".git/objects/pack/pack-398b9a5b90fa34a8b7e5e2a329fe92eec5692c2e.idx": "aea38206bb05f3e7f6c79334c7dfa0b3",
".git/objects/pack/pack-398b9a5b90fa34a8b7e5e2a329fe92eec5692c2e.pack": "4fb6f57ff76f5b8a13354f371e1fc315",
".git/objects/pack/pack-398b9a5b90fa34a8b7e5e2a329fe92eec5692c2e.rev": "8d37f7bc64667e30be77803877f72aff",
".git/packed-refs": "d1f355eda05d98684d46fcccdcf32d28",
".git/refs/heads/main": "54f4d5651d6c23da4e240fb657a46f59",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "54f4d5651d6c23da4e240fb657a46f59",
".idea/libraries/Dart_SDK.xml": "85f3356455370e45b2522e273d94dab7",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"android/web_android.iml": "273d851cbe25579b8e6ee48886fa4d6a",
"assets/AssetManifest.bin": "134cec83bb6f555cf82bf3cce838ec92",
"assets/AssetManifest.bin.json": "687a54c5cde2b90bd8598c634b4e7ebe",
"assets/AssetManifest.json": "e0f5c7788926f807c0ed10605475c855",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6c3d106e939d6be1e98be76c678810a7",
"assets/lib/assets/images/background/0.png": "1726bc5836f349a30d6562a2f37b2c90",
"assets/lib/assets/images/background/1.png": "74828b53addeb6ffa5eb2a8e3e0e6820",
"assets/lib/assets/images/background/2.png": "26fbde36a32e2c9095c9f6c726249645",
"assets/lib/assets/images/background/3.png": "81e6bec9dfae72ade88dfd5ba267e58b",
"assets/lib/assets/images/background/4.png": "eb4e1b9b470ee830cb7b3a258e3649f4",
"assets/lib/assets/images/features/mvc.jpeg": "9d096d43b52d6235ca7655e133d9a580",
"assets/lib/assets/images/features/parallax_1.gif": "d45a9c0fb406d7a644490c071e76d40f",
"assets/lib/assets/images/features/parallax_2.gif": "d8089e24088b8c4e14a4fe0b9b50c91f",
"assets/lib/assets/images/features/responsive_1.gif": "90af454bc99980649d872b40096427d4",
"assets/lib/assets/images/features/responsive_2.gif": "038cf201354a741cd34d3b163680f8ff",
"assets/lib/assets/images/features/responsive_3.gif": "81898955445b1028acfe679198c4e1cc",
"assets/lib/assets/images/icons/fiverr.svg": "ec17635693b50471b8ebcd9941b580f7",
"assets/lib/assets/images/icons/github.svg": "3806781283adde57dfbb6941fcccd8f6",
"assets/lib/assets/images/icons/linkedin.svg": "ea3c021a1898e3e5084e6c51a465246c",
"assets/lib/assets/images/icons/moon.svg": "4f0e29fc6196218a25335fa0423cd1c9",
"assets/lib/assets/images/icons/more_icon.svg": "5a14c6c003e030faf2edfdbde5d00eed",
"assets/lib/assets/images/icons/playStore.png": "94fc3d47cccdd90b35c4aafc489482ed",
"assets/lib/assets/images/icons/pubDev.png": "54850b839965d62ea0acaf83fb9f7c65",
"assets/lib/assets/images/icons/sun.svg": "ccbca7504d8af193c979c87a1156e97f",
"assets/lib/assets/images/icons/youtube.png": "b298be77f0452ff0de6bd2f12c30b621",
"assets/lib/assets/images/photos/%2523my_photo.png": "671f453cad67b39f5bed8caa5305d3a0",
"assets/lib/assets/images/photos/my_photo.png": "2d55a70ece7a8f2b58f9fffa70ec5c7a",
"assets/lib/assets/images/projects/atrai/1.png": "59fdf504fe6c0330bd3ae74458269250",
"assets/lib/assets/images/projects/atrai/2.png": "ab937f948cf0c6af5f39016eee4a1390",
"assets/lib/assets/images/projects/atrai/3.png": "ed2138f33de0f0655cdf64922250e83d",
"assets/lib/assets/images/projects/atrai/4.png": "9acbb1643c5f88adf3c1ab0e861aa5f8",
"assets/lib/assets/images/projects/atrai/5.png": "a68a2c3b5ccb4c659205a847605f21c3",
"assets/lib/assets/images/projects/atrai/6.png": "8c255c056401e01d0ccd1dc9b2fe6586",
"assets/lib/assets/images/projects/atrai/7.png": "c90c4ce66591817dafa683d8899b5035",
"assets/lib/assets/images/projects/atrai/8.png": "d734648fcc3904ef13432c3c7852408a",
"assets/lib/assets/images/projects/easy_hr/1.png": "bd99c6ca5fe3903bb8b5d0aac2c8dac7",
"assets/lib/assets/images/projects/easy_hr/2.png": "3dcd16f3d423a6084e00b66bafbe7a71",
"assets/lib/assets/images/projects/easy_hr/3.png": "07308892441cd5cd328a35bfd856b3b7",
"assets/lib/assets/images/projects/easy_hr/4.png": "e4e6d91f4756e8b5567ee41b05d836f9",
"assets/lib/assets/images/projects/easy_hr/5.png": "0f31375025d2d552d7d44300383bea90",
"assets/lib/assets/images/projects/easy_hr/6.png": "d73bbd81ed8ea296c59b61e297b9e985",
"assets/lib/assets/images/projects/ecommerce/1.png": "c5bb7e3903fa061e6c3c397dc3637205",
"assets/lib/assets/images/projects/ecommerce/2.png": "693c6ecb2dc4039d04b29379b3951b3f",
"assets/lib/assets/images/projects/ecommerce/3.png": "f84721a65e9d7be747b1757bf3479365",
"assets/lib/assets/images/projects/ecommerce/4.png": "6ed86bbf169dd723d54fef6d53ae1e7f",
"assets/lib/assets/images/projects/ecommerce/5.png": "c15d08cdca760dfa8e9b415e876cbfb8",
"assets/lib/assets/images/projects/ecommerce/6.png": "e048307913c99bfc62c337e31c2c4775",
"assets/lib/assets/images/projects/efficient_app/1.png": "3aa26db82e89be74ffb8d8eb1b446795",
"assets/lib/assets/images/projects/efficient_app/2.png": "c8a944d4cc5c8e028b05bc41f76e3b30",
"assets/lib/assets/images/projects/efficient_app/3.png": "fbd835163cb885f3e8b17a2329a72524",
"assets/lib/assets/images/projects/efficient_app/4.png": "979ec08aff555ddebfa968a3d4c551da",
"assets/lib/assets/images/projects/efficient_app/5.png": "b850a31a755d289e46cc7e94755f7c88",
"assets/lib/assets/images/projects/efficient_app/6.png": "55d1ca22becf0520afbab026f545bdba",
"assets/lib/assets/images/projects/efficient_app/7.png": "259ca0f15c77f2a351dd80d7cbcef136",
"assets/lib/assets/images/projects/foodPandu/1.jpg": "af58d50146a9a65bf25a4410688dbd01",
"assets/lib/assets/images/projects/foodPandu/2.jpg": "4e238f5ff51d3f03ac99ea98c1d2ffc8",
"assets/lib/assets/images/projects/foodPandu/3.jpg": "31a90a192109662645545abdbeb05083",
"assets/lib/assets/images/projects/foodPandu/4.jpg": "727d60063c9bb0b9e865e03d5bac0e97",
"assets/lib/assets/images/projects/foodPandu/5.jpg": "e69617ba6e867c01a3fd6eb43359c16d",
"assets/lib/assets/images/projects/foodPandu/6.jpg": "1cd723b1acde70951340173aa89b820d",
"assets/lib/assets/images/projects/foodPandu/7.jpg": "4ac550f577f22db81d421bacf3abc24b",
"assets/lib/assets/images/projects/foodPandu/8.jpg": "2c94819a5104c1fc42cc2b0f77d99b53",
"assets/lib/assets/images/projects/foodPandu/9.jpg": "7a4e162e5c3aae02837829c0096d22d9",
"assets/lib/assets/images/projects/halda/1.png": "709f900371dce3cfc11badd7f1ff95a7",
"assets/lib/assets/images/projects/halda/2.png": "7d7fa2ce480552989c7ce111ff8ba9c3",
"assets/lib/assets/images/projects/halda/3.png": "1c8938559c587933b0aa4c9764c43dd1",
"assets/lib/assets/images/projects/on_popup_window_widget/1.gif": "2a63a8140ed06511dec6d34ea20d5cc6",
"assets/lib/assets/images/projects/on_popup_window_widget/2.gif": "ae2dec237047451f5efe781f63a65437",
"assets/lib/assets/images/projects/on_popup_window_widget/3.gif": "69793b139165ea22af18fc771731fe6d",
"assets/lib/assets/images/projects/on_popup_window_widget/4.gif": "a12d681ed8b1cfc91ffab028a3288aea",
"assets/lib/assets/images/projects/on_process_button_widget/1.gif": "8045843ec7d3dc26536ec32a72253008",
"assets/lib/assets/images/projects/on_process_button_widget/2.gif": "04c19296a139820b55137337ef6c4e81",
"assets/lib/assets/images/projects/on_process_button_widget/3.gif": "596524bbe758be8a2f15ed5fa7b5956e",
"assets/lib/assets/images/projects/on_process_button_widget/4.gif": "549b4c01187a4e131358217c0a2779d5",
"assets/lib/assets/images/projects/on_process_button_widget/5.gif": "7dfe5f1fbcd44c0bfee3cbb38e1fbef5",
"assets/lib/assets/images/projects/on_process_button_widget/6.gif": "b3009d35a2502e6a7ed7df292bc6a7bc",
"assets/lib/assets/images/projects/restaurant_management_system/1.png": "a390723005a509c0d79345745bd92e9a",
"assets/lib/assets/images/projects/restaurant_management_system/2.png": "b952d4ba870dc5be4d54ca733f0b157c",
"assets/lib/assets/images/projects/restaurant_management_system/3.png": "22c75a5e220dd3db05b4a36a37b1caad",
"assets/lib/assets/images/projects/restaurant_management_system/4.png": "bc51320be393e8647c0997e1292a6e59",
"assets/lib/assets/images/projects/restaurant_management_system/5.png": "bab6b245ebbcfa747eac348fcb595115",
"assets/lib/assets/images/projects/task_manager/1.png": "477e8be583147ac22bec485fb66b3159",
"assets/lib/assets/images/projects/task_manager/2.png": "7a27a0749bbf28ab77bb298e18f10b61",
"assets/lib/assets/images/projects/task_manager/3.png": "de8cd367679ac2efb06254cc48b4409b",
"assets/lib/assets/images/projects/task_manager/4.png": "de37ec9685179abe99db9f1c61ce37cb",
"assets/lib/assets/images/projects/task_manager/5.png": "afbcbc5140b30ea9ba685fb01264b78d",
"assets/lib/assets/images/projects/task_manager/6.png": "c82e559d87fe0ad4b244d9867ef4328a",
"assets/lib/assets/images/projects/time_range_selector_widget/1.gif": "cb7e86ab847afba89b9113a0df715523",
"assets/lib/assets/images/projects/time_range_selector_widget/2.gif": "3cab0e09b839fb6f8d12906bbb7814c4",
"assets/lib/assets/images/projects/time_range_selector_widget/3.gif": "a798eaf7f495202a5eed507820f6c0b6",
"assets/lib/assets/images/projects/time_range_selector_widget/4.gif": "c7c795b403cf18b3c270a0596bc8aaf5",
"assets/lib/assets/images/projects/time_range_selector_widget/5.gif": "d278856069e1c72ce534c6d0d464221f",
"assets/lib/assets/images/projects/time_range_selector_widget/6.gif": "5ac0958c2c688e43d63167bf8ac03edc",
"assets/lib/assets/images/projects/todo/1.png": "a7283374fd3989bc3f1081003ede7114",
"assets/lib/assets/images/projects/todo/2.png": "7f19f1e613440c35c6bcf148929cec4c",
"assets/lib/assets/images/projects/todo/3.png": "cab8355ab4cd50a378dfa7115aa70bc3",
"assets/lib/assets/images/projects/weather_app/1.png": "aa9649fb1899a9c3196ff7cdf6882147",
"assets/NOTICES": "87aa8d409a5daaf3fb08136551317b46",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "9eaa84309394e9b970c7ffa3d01aec06",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "422853676a054600867f81c59b27e374",
"icons/Icon-512.png": "ca7456603d42459fe32d1779c2ff142d",
"icons/Icon-maskable-192.png": "422853676a054600867f81c59b27e374",
"icons/Icon-maskable-512.png": "ca7456603d42459fe32d1779c2ff142d",
"index.html": "4d3f7dfa3bf90085e3644558260af031",
"/": "4d3f7dfa3bf90085e3644558260af031",
"main.dart.js": "b204c924ea521b576676afbe87235547",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006",
"web.iml": "f9bf5c490675c84d098e6772a6f2a796"};
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

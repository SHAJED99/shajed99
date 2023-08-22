'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bb8b50c8c9dd39cfca80c7c97d221799",
".git/config": "fdaa5bd84bec67978747198dffeb5ce7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "40241d1b5560e6a8b75104899c07b062",
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
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e904ccabb1e19d2e7c9cdb1db95388ee",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3942e49c45569822a5adfb0da52ab701",
".git/logs/refs/heads/main": "3942e49c45569822a5adfb0da52ab701",
".git/logs/refs/remotes/origin/HEAD": "3bb24d670c3da7c5aee3b0eca9895923",
".git/logs/refs/remotes/origin/main": "ece9d2c68b1e4f5ab871b0a567d7bf48",
".git/objects/00/cbd2bc708ce822dd3f64e6be606c4b05c804e3": "3276db6b239deb96bcad8368f0474a3b",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/58d792754b9e1a810ecb27f54b1e508a2b6ce7": "7d735d1750e73240b52e7c3ca907f0b5",
".git/objects/05/030712759f0aaf2ae85c3e4658f1e2e9055be6": "fd0b90f8e9e90e82675200757f54f027",
".git/objects/05/5f76affaacaccc0d1a4e9630191577dad1f457": "d2b84166cc6fba0dfdb2a122c137dce3",
".git/objects/06/54997fbc4f27ba54552e2d78897a7eabbfe574": "2dd33c25fe97ee57c2d15108acec67a1",
".git/objects/09/124c8235aa40a859a87af039253ada43a32551": "cce101c30755bc9d80a1174d2dc5f031",
".git/objects/0a/f33e40d6657d94d8ef4f79b20e1c0f80df63b7": "889c0f3542d8f57cb2f6ee0dbac824c5",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/3ae3bc8c35649350d42002b1cdf8b00ecd98fc": "e12592db7edd2d7cc733a0ea7ea6658d",
".git/objects/0d/d608e78d2ae9ef3e38f578fc14b18164e1eaf9": "8387cbe831004e817ecd036c01b54b8e",
".git/objects/0d/fa2ec8bba261da0a1a3b77cc7e3b102ae3a74d": "67317869fd7e1cf746791fa4f33c2e33",
".git/objects/0e/65b74dd69e131952be0bce7c8c3c704a78cd70": "9feaf1529c2fd61340dbfa9bd74c7627",
".git/objects/0f/383e4d664d6d224c0550450824503dec8be032": "bae55a1c7e86281a0f50df4afa520b2f",
".git/objects/0f/ec0b8831c677903011e116e3c8bb7fac6bbf71": "36f4b0a2b249df56202a4ac7cb73b61b",
".git/objects/10/2de65dc9ed651dd2e1ab2f4bf6099636177fd1": "4c2cd8540b156c50e7f3aeb2d485bdd8",
".git/objects/11/9164a6d8bc2b42ecd096b947d473122f9daef9": "f573cc3c1573b719ebc308e442930f24",
".git/objects/12/d5857cd27cfe8f0ee7ca17fb13f867d0e7ee5c": "d0a8aa599d44d2b746a64ec8c8b432e2",
".git/objects/15/d305fde6d54b11078b60f5ea9f62ec1ef1126f": "b266a613368580a243a7229d373bbb1f",
".git/objects/17/4fc39032f468b2b562c764041207d20365387e": "05b904d7cd9b6dbc163f954755671f0c",
".git/objects/1b/e879dee711df8a8ca7e886e46666ca21887b15": "079bdcefb2eb37ef72cc40c63922af9d",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/31ba7831d684e693aa781e382e72105beaacb1": "c2dd78b1170e4540fb37041f3073dd94",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/23/44230614b96bb7e5fe2b934b3ec83018352a74": "124d630e49868d69c260b6e7b1e09e39",
".git/objects/24/760c22659e54afbaca2fcd71c7dee2a9b09558": "30b87a1e35a6bbe235e1198002234bbe",
".git/objects/26/6c2a5ccd2aff355c985b9b20057a727a56f799": "f9c34324d7db0c13ea10f7b81f85a0e9",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/29/84cd3783b5e09b2454297ea7b0bbca7526eaac": "348e9954ba0fa1ed918d7a93b7c6c835",
".git/objects/2b/4a283d8b0047cca541ba74d63d860ba21801a3": "9188adcbf2c8b962d272eb871b845c8c",
".git/objects/2b/b6dbd43a53a7e1d7d5745e3deb9a8df008f129": "b4d1749123fa7f3776f96cb3b898f969",
".git/objects/2c/80def58958a9276e08ff740a3cc9dd137337f1": "4091dbd10cd968f581cce247917fb82c",
".git/objects/2d/d20060ff55ce0a0daf862b2ea77576947e6155": "feea66dd9d7a92308e3be298b5429533",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/2f/f86b6a8558996b150124cfb71caccc5ade58c4": "cbc3f178cafa8e161cbd18d34cd07e20",
".git/objects/30/6d40faa79fd42f94242357c17c2838bead86a5": "48014c8236f44fadfb6d54eedcb59a57",
".git/objects/32/16c64134421d95ad7ae9259e05db2df688370e": "d5e2a0d8c4ae362cb3d7298c6a9a6002",
".git/objects/33/9893f6db776e6577f5ee4c496ff27908162290": "83c6adfa1e253b7e0d2c6a40d4f170df",
".git/objects/34/5497794a35af928c07fdb353dc10098f830bc7": "220c4c6fe84686ae4ed2425e69d5704d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/6826ed0adb1fd418d20f5457c19605fe04eea7": "1b5eac94ee5d27b7710f0cccbb5723e9",
".git/objects/36/824a2d5ac29238041f9ae63c9e3349e2c3b32f": "4572938636b510a87d3ab62fc9db60b4",
".git/objects/37/3f5faf505de1cb2b19ba08ab54a0d5fd5acacc": "179811309c6e6ff57970be541bfffbc9",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/d333bd38e8f3913fc4016f81bdc487d34ac38b": "a1f25a7ffc965a843638da6a8758f028",
".git/objects/45/04fe6b2be91ad2324a6cac0bca98979e543bdf": "562d52033fc89fe0b2f6a82862a5eb73",
".git/objects/45/a8cebed9f98fb97a86132e5f21145b35dee103": "d51da57b4abb1097818dc17938faa166",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/1194245fdf55a7c2909de589524f10705eb265": "b1e26d991b51d21189d4cf2fd24025a5",
".git/objects/4c/7e4fcd532c48a676815b9ef59f7adfd4cd693a": "ce296ee4a692e0aaad8ee32e70afb14d",
".git/objects/4e/0e7f9d8a01b402a2df109191098a5e12822a8f": "8f790a864dbc0e6a180124c8e7bc29a0",
".git/objects/4e/68f09936c428fd18b3a6d4707e3029075dc6bd": "c4af695cf7c2d0e4b5a81adf8d93aa73",
".git/objects/4f/88c2ed66555624e6b82b6023d04a70c987125d": "e118c4649e0ad7bcfbe8f942bff5259c",
".git/objects/4f/e0720e40ac39486e2ac19d47b71ad52a5353c4": "14ffcafab660128a11573a1d13f6105b",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/ae91e4a817f18efc1c5431cb022aebc3d172b5": "5b7772150d76cc6423080ec062ddf33a",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/d36132cdb2fc4eb34501974e27f3bae474cc8a": "df22a73474d3fd74770ba11dd210c0a8",
".git/objects/63/541b0932ffb66e3367a62e2e8905b3705a1bef": "8acbc73e3d0982046ca21eb4b0023127",
".git/objects/64/43b6332682537f021aad1e6b19c6f966f9deaf": "c2ae1f760c1753b2c7a9cf939cbd1da5",
".git/objects/64/76f320ee1fef3e9c74944157ac09f40fcc5a30": "7d69c3da5830d2bea401701e033673bb",
".git/objects/65/b6ec43424264b54958f894522e31b8df234e0f": "f013cceef53dc431d39f7f766617e3e3",
".git/objects/66/232c1a53c11d142a6264cb46e3bd95a12eae8a": "ad5103da7804e63f542f4cca8806e221",
".git/objects/67/713c0f225308f88d361af72eb75bc1ce005576": "35637fbad9bfee59e2d8fd77a7c01d99",
".git/objects/67/8131fedb3a73a98196bfb4e7e9592a88581070": "e699abe95da86ef55ca4e02bf8263041",
".git/objects/6c/1eb011f298960bc2e92c36b1aae38ca4e9d153": "7c041767f44d14143b9a241dea1d067e",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/74/f670829ffb701781482eccaa4eba3ea3b1afaa": "db8a1fa2dba6fb764f227e3aac01e3f5",
".git/objects/75/08b524bae35a5641a4b84eff2f75b7f11ba61f": "36cf28350326219e83f866fb3c04af68",
".git/objects/76/bc472c10cfcc4fbd10a205f242ddf10c9ebfcd": "ffc34097b09cc3487bdc745008dd3f39",
".git/objects/78/4d5da6156aab53b2039c5c91a98632a2c26a1b": "cee655985bd2bee847833b011639b069",
".git/objects/78/c469bef7c563d3e2aab234ef1e90331d44b9d4": "5bf0a7324ef8ff4cfe032031a6c7f60f",
".git/objects/7c/b00470057b1086fbf2f7947385ac17f36c8c19": "237621af3c4e83f438b2c3d1d93be18d",
".git/objects/7d/982fc2c9a18f861a39db38059555156ea1cdf9": "c8adfa1a6966229231dc621c61d40b4a",
".git/objects/83/242fad5ad61b57a48f2aa1d3c9c6b609616d34": "0e1aa8458e24d5a6bd1f528355755e73",
".git/objects/87/1089bff09f901d4425c0e5419c496cd2eacc62": "4538e8a48095799ba42ddeb0ea019c35",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/92/f05ff511db6c8fa79b319fe333b5fd902c762c": "a4c78961d31b9ce4ae53ddea8b825c19",
".git/objects/96/33e1b2468a43896c0ab44c8eb99031638cf2a2": "07752263d9e3ed2ed3a8a54e4b27c527",
".git/objects/98/325adc7327c1297a48ac7ea70faa6a90ad153e": "793a320e22062dab8a3f83fa1638d21c",
".git/objects/9b/a35f089029f356a4eeb65b2eecb5a9b3a040b4": "783cce159c98358d16e1c3581cb78601",
".git/objects/9d/3d4253fed6f03a04f90299bebff2792337a091": "1a0a2ec41e3af1c9756cea5c1cae8e68",
".git/objects/a3/e9f7e80d53fac1068eafcf0612605774947688": "5f611295e360c9a893a1348df70234df",
".git/objects/a4/f3636b8d7001b1ac5504b8d35956bf91bce524": "75fc55f535eefad53116567bc821ff17",
".git/objects/a7/957096ed67684a0dbd3f52523ea43965535055": "9de1c5fe1544f3f1c497164bc35d13cd",
".git/objects/aa/9b71b7bca9b3be9c1f5aa92adc6e16960a1e2d": "e2182b23a30d809d866dc093de56d836",
".git/objects/ad/a56948b3ff6e7aa8530b48b83a2ea9115c7e30": "5121772cd8523fbbfb99f9f733c4fd5d",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/e68236f12632f01be3e8992324a903b21aecbe": "537151ca2e2494172dddd1a06ebb9321",
".git/objects/b7/3e417bdf6c17114471545a63eb380fb4ba118a": "637aaf8e830bd78fcdee1afe023b9eee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e4641005629fff8636b571e85eab62cbe1ca2a": "96053bd50a914a6386df234c32222224",
".git/objects/b8/062a954c387224cc7de36634d64a6da1cbccfe": "90ca87f5ab8d81180bc02337212d29ed",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/32d5235b55cab1dc23cd2871f0c6d47a2e3d90": "80ffd8bda3e26d99a0b95adbf8e66290",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/d290669aecd46b385986f55b3973e2804e2031": "7d1990d809768be21d8c0af135bc5118",
".git/objects/be/f7a7fa22df2df1d04bc67518026e3e83decb3b": "c8ac30b03bc45e249f99800546a95493",
".git/objects/c2/d02566b8e6e99ac4900f77a0f5c8cc4160f3d9": "eb6326f263577e2f6ba58b54f9ad9645",
".git/objects/c3/b1ff2f0c9aca72350cf8f894cd72ec2ff62b3b": "a0ca1ae69258e1356f7c17c9710e2010",
".git/objects/c3/ea6bc6b96d683cf28b171c2b5049f21bdc3547": "c0335e98e8fc83d8ea588a1bb02d8bb3",
".git/objects/c4/4f514deedf80f0fb812d97fa0332f9020f9202": "bfa70314a5f10d726ddab22273bd4674",
".git/objects/c5/0ce6d77d9011b2e740c938807a689c889db250": "957e248d24081e313fb612e22901548f",
".git/objects/c5/12a78fa5a111ec7410a8a01fb4a33ee00fb4ea": "468205804283b30ea787fb2f45b9bd44",
".git/objects/c5/41d7c750f97c58ce5996a429abcb3839ef25ed": "0eefc5ca7f908b5452c13233a55d991e",
".git/objects/c8/b9429497ebbd3cd3538285a89145a241240bdc": "3979e06aed98e672dfdccd966d9ca58e",
".git/objects/c9/2f0a9a95bc5b48c71685bca572b19eaf3a99cc": "24acdfb6b77b7c065591a9ac1740239a",
".git/objects/ce/9bb04cef7193f754ec28f0bd7181e9faed46cb": "3a7bae0e5e4b72b6aa9e426d261ac25a",
".git/objects/ce/a80144fb84625d1903a376a5ebf8cc743c97f7": "afb8c9d084aca2fab30ccbb3d4e9cedc",
".git/objects/cf/bed8525916665bbde28418e402b4ed609002ba": "c6b2acf9aa9fb1351ee6c5a5814c9704",
".git/objects/cf/d1f0da67058dfaa99bbeebab5aa03fd505706b": "819dd24f7151f5eb3f8b1f17431ce445",
".git/objects/d0/bced5b5780d310aacc59a42c9d15b38792092b": "253fb23ac92f622fe9aa6799195ef563",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/45af77ced968ffc5a2782a4f7efa0b6c4d6fb7": "7f73b9e53a4a04545d0c99c67f5aa958",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/110c1334784564f624594817953436cd1e865b": "ec774381a9a68eedba5f2b4d588a8a6f",
".git/objects/dc/5ffa100afd09153f0fc118faf9ad1661087647": "35c2a68a510ffd3cd358f50530c3575b",
".git/objects/de/6fc6f741eff45cb86f869b149529ce1e343206": "78ff2edd2c0b2c9c6d1f97c6b71537bd",
".git/objects/de/9a3d571f8fd7e0f2d69bda1c9ba078dc14a5b1": "fae67a0d2b9b2f1ab73a1c8a2c5ea07e",
".git/objects/e0/754f83c84c879a87f5eba62fef00112e27380f": "9e300fe7b881bf3043783429d6ec3cc2",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/6063a545712243743385d177c11bb46d09a672": "ad902566b24ac5e117947b1385ef1ecb",
".git/objects/ec/b349004d525fdba29f9dda7c999c8a892254fe": "61afd8b8ded0768e9b223ff4c5dd59d6",
".git/objects/ec/d5bb28a3c7b9ec0fbbec9aa4c61fa79ecbfb10": "84932b65d8a400c3534b500a79839bbf",
".git/objects/ee/99e30bbc2353a5ddabacab0dbfb45b79a2f5e6": "a026ce2adac5d9cfbe7690d063d1ece4",
".git/objects/f1/77a45b85299e24dc93f256fb26fd607ada1ac5": "ba68f8506754f7c94a6c0d7d1e138b11",
".git/objects/f6/a1f6b81960187989b2cc5fbb43d12c050b7bf4": "ebf09c0bb32b3b10b96590bdcbd42cf3",
".git/objects/f7/f1e289129fb9823e611327a32e38dc6bc849fa": "d1be9d3ec8d06c24b93d95522203ee62",
".git/objects/f9/494b9840e99acf04c9a7e2091573b3161b8fec": "1675214b76a0985b8d5153272c2bd9c6",
".git/objects/fb/10213de21fec07155b9416ea62375e555fca8d": "1ccc1df61c0fc561e4125baef1021255",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/49342cba8889643f2fa3d649369fb4a1e9983a": "26ee8b35146da23fc506a937bf6741bb",
".git/objects/fe/e2fa7c8e131bbcaad2749773cf8f5dea803cd3": "b51d419d33dcc1a683340e7f49909e1e",
".git/refs/heads/main": "b9c97d19402d2ba766669d200f364863",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b9c97d19402d2ba766669d200f364863",
"assets/AssetManifest.bin": "8a725d791136a9b4910d8515910688d7",
"assets/AssetManifest.json": "18ffefe9df7749de8d2c4379fa606686",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cacb2ba1380947be357bdf42106c6c5a",
"assets/lib/assets/images/background/0.png": "9c0de735d28e3f9048e19836593e9170",
"assets/lib/assets/images/background/1.png": "9c72c1207f69208f647c712e57926b74",
"assets/lib/assets/images/background/2.png": "2158f0bf2e8b54d5346b215f4de960b5",
"assets/lib/assets/images/background/3.png": "9c80c900185317cabe12cf6870c66afc",
"assets/lib/assets/images/background/4.png": "0d41044954119adff53aad89b1290035",
"assets/lib/assets/images/icons/more_icon.svg": "8b69c18ef11d65ea363ea33aadf75e3b",
"assets/lib/assets/images/photos/my_photo.png": "2d55a70ece7a8f2b58f9fffa70ec5c7a",
"assets/lib/assets/images/projects/foodPandu/1.jpg": "af58d50146a9a65bf25a4410688dbd01",
"assets/lib/assets/images/projects/foodPandu/2.jpg": "4e238f5ff51d3f03ac99ea98c1d2ffc8",
"assets/lib/assets/images/projects/foodPandu/3.jpg": "31a90a192109662645545abdbeb05083",
"assets/lib/assets/images/projects/foodPandu/4.jpg": "727d60063c9bb0b9e865e03d5bac0e97",
"assets/lib/assets/images/projects/foodPandu/5.jpg": "e69617ba6e867c01a3fd6eb43359c16d",
"assets/lib/assets/images/projects/foodPandu/6.jpg": "1cd723b1acde70951340173aa89b820d",
"assets/lib/assets/images/projects/foodPandu/7.jpg": "4ac550f577f22db81d421bacf3abc24b",
"assets/lib/assets/images/projects/foodPandu/8.jpg": "2c94819a5104c1fc42cc2b0f77d99b53",
"assets/lib/assets/images/projects/foodPandu/9.jpg": "7a4e162e5c3aae02837829c0096d22d9",
"assets/NOTICES": "03651c25bdfd3b4e9c5f5e6441365eb0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f2975a1d72e83d5d2b90032d11b75755",
"/": "f2975a1d72e83d5d2b90032d11b75755",
"main.dart.js": "3ec543072479f090fea8124e62f74859",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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

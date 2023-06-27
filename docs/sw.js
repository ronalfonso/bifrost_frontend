importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute( [{"revision":"f0123432bd93ec1b49908d97a16fc5d1","url":"asset-manifest.json"},{"revision":"faea458e37c2bef27b044c64346386eb","url":"favibiforst.svg"},{"revision":"639a2e94fda1f8ded8b03f0ce1af4788","url":"index.html"},{"revision":"d421960fb348eda33f0db30a6547864a","url":"logo192.png"},{"revision":"a8041980f24ed86574083202a972d3bc","url":"logo512.png"},{"revision":"c557619d66e78d4a3839777c7032e69c","url":"manifest.json"},{"revision":"61c27d2cd39a713f7829422c3d9edcc7","url":"robots.txt"},{"revision":"f67a2ce4ab57008dd79a028a43bdbe89","url":"static/css/main.6b207dda.css"},{"revision":"9a4b4646d880183baffa027697f2af59","url":"static/js/181.e81a426e.chunk.js"},{"revision":"f7b599e3f88bf94d2af5d3f60873a311","url":"static/js/181.e81a426e.chunk.js.LICENSE.txt"},{"revision":"9c91368010981f6ef6d6315f96c6656c","url":"static/js/301.d992d7ff.chunk.js"},{"revision":"a917c72e86ef5ba0522bbd17e2244a43","url":"static/js/42.f24ae28a.chunk.js"},{"revision":"98d739c5b59bc690a1eca104ef91064f","url":"static/js/767.927fa2c0.chunk.js"},{"revision":"4c69e24cf210ea5da5ffa13698bdd2ba","url":"static/js/Contacts list.896deb5f.chunk.js"},{"revision":"f7b599e3f88bf94d2af5d3f60873a311","url":"static/js/Contacts list.896deb5f.chunk.js.LICENSE.txt"},{"revision":"09679eac231f8414f8853cd345adfdb4","url":"static/js/Home.b11737c2.chunk.js"},{"revision":"e7a54f7d3ded10cd18932f9868b05e72","url":"static/js/Invitations list.1ca19768.chunk.js"},{"revision":"4e34babb2abc8a20a575a2250ce687b4","url":"static/js/Invitations.11e68369.chunk.js"},{"revision":"7e99c53ed932050c03924f4242ff342f","url":"static/js/main.3ec94b72.js"},{"revision":"6df55cd328681876b1db9944e5d230bd","url":"static/js/main.3ec94b72.js.LICENSE.txt"},{"revision":"cecbad4cca4c230f10a92a13bf7efc53","url":"static/js/Profile.82997058.chunk.js"},{"revision":"9c6c2290963897af825e92b7124435a5","url":"static/media/403-forbidden-1.255e1a094a99e56f4edc.jpg"},{"revision":"4da225b991664a685f78fb9f7beffc0e","url":"static/media/bifrost_color.ca683f838008ac058539.png"},{"revision":"8a8f2088b6f8a078c3ea15bd513b195c","url":"static/media/bifrost_delimited.24572f52cda9fab18df0.png"},{"revision":"22c55a1a0926d1f26e3406fec22565ba","url":"static/media/confirm.0b14dabdb71412f308e3.jpg"},{"revision":"2642fbc9058422a5e8a20ec5d85e8c23","url":"static/media/house_background.b188bdcf3300180319e5.jpg"},{"revision":"41c5f3996bfcab41aff6188e76d8c867","url":"static/media/register.f484738a24227d1e287a.jpg"},{"revision":"1f4d51b9223fa0e1aca8a61a5a8b1d8e","url":"static/media/success.d12d994763e3cfca6367.jpg"}] );

const {registerRoute} = workbox.routing;
const {CacheFirst, NetworkFirst} = workbox.strategies;

const animate = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

registerRoute(
    new RegExp(`${animate}`),
    new CacheFirst()
)

const residentByUser = 'http://192.168.1.103:3030/residents/find/resident-by-user'

registerRoute(
    new RegExp(`${residentByUser}`),
    new NetworkFirst()
)

const condosByUser = 'http://192.168.1.103:3030/condos/list-by-user'

registerRoute(
    new RegExp(condosByUser),
    new NetworkFirst()
)



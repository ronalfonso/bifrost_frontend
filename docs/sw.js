importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute( [{"revision":"a4ff6e9d200558389826d2049b10ced8","url":"asset-manifest.json"},{"revision":"faea458e37c2bef27b044c64346386eb","url":"favibiforst.svg"},{"revision":"8f18fe7da387d6547af9e6cce82f8658","url":"index.html"},{"revision":"d421960fb348eda33f0db30a6547864a","url":"logo192.png"},{"revision":"a8041980f24ed86574083202a972d3bc","url":"logo512.png"},{"revision":"c557619d66e78d4a3839777c7032e69c","url":"manifest.json"},{"revision":"61c27d2cd39a713f7829422c3d9edcc7","url":"robots.txt"},{"revision":"851050d621e1784cf99ebc44e8351235","url":"static/css/main.e593891b.css"},{"revision":"9a4b4646d880183baffa027697f2af59","url":"static/js/181.e81a426e.chunk.js"},{"revision":"f7b599e3f88bf94d2af5d3f60873a311","url":"static/js/181.e81a426e.chunk.js.LICENSE.txt"},{"revision":"9c91368010981f6ef6d6315f96c6656c","url":"static/js/301.d992d7ff.chunk.js"},{"revision":"a917c72e86ef5ba0522bbd17e2244a43","url":"static/js/42.f24ae28a.chunk.js"},{"revision":"98d739c5b59bc690a1eca104ef91064f","url":"static/js/767.927fa2c0.chunk.js"},{"revision":"ce1189040976ce4fb453530234ac2d55","url":"static/js/Contacts list.2996819e.chunk.js"},{"revision":"f7b599e3f88bf94d2af5d3f60873a311","url":"static/js/Contacts list.2996819e.chunk.js.LICENSE.txt"},{"revision":"0a150aa3d5f1986a01f5a4df15f03b2e","url":"static/js/Home.86e305b2.chunk.js"},{"revision":"4374a0c3ec911e913fa15ad6cced5af7","url":"static/js/Invitations list.73df1da4.chunk.js"},{"revision":"1211098acab0a3cdfeb7aedb16ba46b9","url":"static/js/Invitations.30543253.chunk.js"},{"revision":"7d2e093e4feeadb7a758ed10214451cd","url":"static/js/main.5417635a.js"},{"revision":"6df55cd328681876b1db9944e5d230bd","url":"static/js/main.5417635a.js.LICENSE.txt"},{"revision":"8eb19e595a249526da719179d2a61652","url":"static/js/Profile.601b15ab.chunk.js"},{"revision":"9c6c2290963897af825e92b7124435a5","url":"static/media/403-forbidden-1.255e1a094a99e56f4edc.jpg"},{"revision":"4da225b991664a685f78fb9f7beffc0e","url":"static/media/bifrost_color.ca683f838008ac058539.png"},{"revision":"8a8f2088b6f8a078c3ea15bd513b195c","url":"static/media/bifrost_delimited.24572f52cda9fab18df0.png"},{"revision":"22c55a1a0926d1f26e3406fec22565ba","url":"static/media/confirm.0b14dabdb71412f308e3.jpg"},{"revision":"2642fbc9058422a5e8a20ec5d85e8c23","url":"static/media/house_background.b188bdcf3300180319e5.jpg"},{"revision":"41c5f3996bfcab41aff6188e76d8c867","url":"static/media/register.f484738a24227d1e287a.jpg"},{"revision":"1f4d51b9223fa0e1aca8a61a5a8b1d8e","url":"static/media/success.d12d994763e3cfca6367.jpg"}] );

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



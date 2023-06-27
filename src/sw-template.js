importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute( self.__WB_MANIFEST );

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



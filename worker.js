import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    // Pass the request through KV asset handler
    return await getAssetFromKV(event, {
      mapRequestToAsset: req => {
        // Serve index.html for root requests
        const url = new URL(req.url);
        if (url.pathname === '/') {
          return new Request('/index.html', req);
        }
        return req;
      }
    });
  } catch (err) {
    return new Response('Not found', { status: 404 });
  }
}
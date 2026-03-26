import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    // Map root "/" to "/index.html"
    const url = new URL(event.request.url);
    if (url.pathname === "/") {
      return await getAssetFromKV(event, { mapRequestToAsset: req => new Request(new URL('/index.html', req.url).toString(), req) });
    }
    return await getAssetFromKV(event);
  } catch (err) {
    return new Response('Not found', { status: 404 });
  }
}
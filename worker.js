import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    let response = await getAssetFromKV(event);

    // Fix MIME type for JS modules
    const url = new URL(event.request.url);
    if (url.pathname.endsWith('.js')) {
      response = new Response(await response.text(), {
        status: 200,
        headers: { 'Content-Type': 'application/javascript' },
      });
    }

    return response;
  } catch (err) {
    return new Response('Not found', { status: 404 });
  }
}
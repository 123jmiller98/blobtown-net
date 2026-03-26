import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    let response = await getAssetFromKV(event);

    // Ensure JS files are served as modules
    const url = new URL(event.request.url);
    if (url.pathname.endsWith('.js')) {
      response = new Response(await response.text(), {
        headers: { 'Content-Type': 'application/javascript' }
      });
    }

    return response;
  } catch (err) {
    return new Response('Not found', { status: 404 });
  }
}
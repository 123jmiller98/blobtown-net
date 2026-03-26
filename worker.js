import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    let response = await getAssetFromKV(event);
    const url = new URL(event.request.url);

    // Force .js files to be served with the right MIME type
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
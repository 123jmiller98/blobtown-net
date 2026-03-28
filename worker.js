import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event))
})

async function handleRequest(event) {
  try {
    // Try to serve the requested asset normally
    return await getAssetFromKV(event)
  } catch (e) {
    // If the asset is not found, serve index.html instead
    try {
      return await getAssetFromKV(event, {
        mapRequestToAsset: req => {
          const url = new URL(req.url)
          return new Request(`${url.origin}/index.html`, req)
        }
      })
    } catch (err) {
      return new Response('Error loading page', { status: 500 })
    }
  }
}
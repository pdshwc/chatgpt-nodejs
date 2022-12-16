/// <reference lib="dom" />
// Use `fetch` for node.js >= 18
// Use `fetch` for all other environments, including browsers
import globalFetch from 'node-fetch'

var fetch: any = globalThis.fetch
if (typeof fetch !== 'function') {
  fetch = globalFetch
}
export { fetch }

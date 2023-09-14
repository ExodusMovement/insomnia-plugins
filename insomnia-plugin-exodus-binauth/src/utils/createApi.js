exports.createApi = function createApi({ baseUrl }) {
  return async function request(url, { body, headers, ...rest }) {
    const newUrl = baseUrl ? `${baseUrl}${url}` : url
    const newBody = JSON.stringify(body) 
    const newHeaders = { 'Content-Type': 'application/json', ...headers }
    const res = await fetch(newUrl, { ...rest, body: newBody, headers: newHeaders })
    if (!res.ok) {
      throw new Error(`fetch '${newUrl}' failed: ${res.status} ${res.statusText}`)
    }
    return await res.json()
  }
}

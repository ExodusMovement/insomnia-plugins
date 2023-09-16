const stringify = require('json-stable-stringify-without-jsonify')
const crypto = require('./crypto')

async function createSignature({ secretKey: rawSecretKey, requestBody }) {
  const secretKey = Buffer.from(rawSecretKey, 'hex')
  const { privateKey } = await crypto.deriveKeys(secretKey)
  const message = Buffer.from(stringify(JSON.parse(requestBody)))
  const signature = await crypto.sign(message, privateKey)
  return signature.toString('hex')
}

module.exports = {
  createSignature
} 


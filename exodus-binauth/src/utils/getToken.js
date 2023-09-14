const sodium = require('@exodus/sodium-crypto')
const { createApi } = require('./createApi')

exports.getToken = async function getToken({ baseUrl, publicKey, privateKey }) {
  const api = createApi({ baseUrl })

  const { challenge } = await api('/auth/challenge', {
    method: 'POST', 
    body: {
      publicKey,
    }
  })

  const signedChallenge = await sodium.sign({
    message: Buffer.from(challenge, 'base64'),
    privateKey: Buffer.from(privateKey, 'hex'),
  })

  const { token } = await api('/auth/token', {
    method: 'POST',
    body: {
      publicKey,
      signedChallenge: signedChallenge.toString('base64'),
    }
  })

  return token
}
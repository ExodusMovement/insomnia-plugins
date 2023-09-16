const sodium = require('@exodus/sodium-crypto')

async function sign(rawMessage, privateKey) {
  const message = Buffer.from(rawMessage)
  return sodium.signDetached({ message, privateKey })
}

async function deriveKeys(seed) {
  const keys = await sodium.getSodiumKeysFromSeed(seed)
  return keys.sign
}

module.exports = { sign, deriveKeys }

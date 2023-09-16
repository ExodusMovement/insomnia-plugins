const { createSignature } = require('./utils/createSignature')

exports.templateTag = {
  name: 'exodusSignatureAuthentication',
  displayName: 'Exodus Signature Authentication',
  description: 'Generate signature',
  args: [
    {
      displayName: 'Secret Key',
      type: 'string',
      placeholder: 'e.g. hex string',
    }, 
  ],
  async run(context, secretKey) {
    if (!secretKey) {
      return ''
    }
    const requestBody = (await context.util.models.request.getById(context.meta.requestId))?.body?.text
    if (!requestBody) {
      throw new Error('no body')
    }
    return createSignature({ secretKey, requestBody })
  }
}
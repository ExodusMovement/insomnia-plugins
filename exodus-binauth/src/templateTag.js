const { getToken } = require('./utils/getToken')

exports.templateTag = {
  name: 'exodusBinauth',
  displayName: 'Exodus Binauth',
  description: 'Get token from binauth server',
  args: [
    {
      displayName: 'Base URL',
      type: 'string',
      placeholder: 'e.g. http://localhost:3000/api',
    }, 
    {
      displayName: 'Public Key',
      type: 'string',
      placeholder: 'e.g. eaa61a52c5be65b9b0d0241f4d0575a27fa4f4478c69772b37f714d09764cb79',
    },
    {
      displayName: 'Private Key',
      type: 'string',
      placeholder: 'e.g. ae094d74ac8c666bda5f287c7124de50134a2060b8543d6c77d4ff71228b2d96eaa61a52c5be65b9b0d0241f4d0575a27fa4f4478c69772b37f714d09764cb79'
    }
  ],
  async run (context, baseUrl, publicKey, privateKey) {
    if (!baseUrl) {
      return ''
    }
    return getToken({ baseUrl, publicKey, privateKey })
  }
}
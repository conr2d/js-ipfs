'use strict'

const HttpApi = require('../../src')

module.exports = async (request, { ipfs } = {}) => {
  const api = new HttpApi(ipfs)
  const server = await api._createGatewayServer('127.0.0.1', 8080, ipfs)

  return server.inject(request)
}

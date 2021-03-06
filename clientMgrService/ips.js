const axios = require('axios')

const logger = require('./logger')

const tokenUrl = 'https://api.weixin.qq.com/cgi-bin/getcallbackip?access_token='

const get = (accessToken) => {
  return axios.get(tokenUrl + accessToken)
    .then(response => response.data)
    .then(({ errcode, errmsg, ip_list}) => {
      if (errcode && errmsg) {
        throw new Error(`errcode=${errcode}, errmsg=${errmsg}`)
      } else {
        return ip_list
      }
    })
}

module.exports = { get }

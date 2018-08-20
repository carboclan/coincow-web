const SERVER_MODE = 'API_ONLINE'
const SERVER_PORT = '80'

const SERVER_MAP = {
    API_ONLINE: 'http://cache.coincow.farm'
}

const apiServer = SERVER_MAP[SERVER_MODE] + ':' + SERVER_PORT

export function getCowList (onAuction, farmId) {
  let url = '/cow/list?onAuction=' + onAuction
  if (farmId) {
    url += `&farmId=${farmId}`
  }
  return fetch(apiServer + url).then(response => response.json())
}

export function getFarmList () {
  let url = '/farm/list'
  return fetch(apiServer + url).then(response => response.json())
}

export function getFarmMember (farmId) {
  let url = '/farm/query?farmId=' + farmId
  return fetch(apiServer + url).then(response => response.json())
}

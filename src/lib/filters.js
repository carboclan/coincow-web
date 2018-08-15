import { web3, coinMap } from './eth'

export function milk (value, contractAddress) {
  value = Math.floor(web3.fromWei(value) * 1e6) / 1e6
  return value + ' ' + coinMap[contractAddress].profitUnit
}

export function hashrate (value, contractAddress) {
  return value + ' ' + coinMap[contractAddress].contractUnit
}

export function ether (value) {
  value = Math.floor(web3.fromWei(value) * 1e6) / 1e6
  return value + 'ETH'
}

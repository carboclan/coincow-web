import { web3 } from 'web3-api-wrap'

const addresses = require('../../coincow-contracts/build/contract_addresses.json')

const userInfoAbi = require('../../coincow-contracts/build/contracts/UserInfo.json').abi

export {web3}
export const contracts = {
  userInfo: web3.loadContract(userInfoAbi, addresses.userInfo)
}

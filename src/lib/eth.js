import { web3 } from 'web3-api-wrap'

const addresses = require('../../coincow-contracts/build/contract_addresses.json')
const userInfoAbi = require('../../coincow-contracts/build/contracts/UserInfo.json').abi
const TestCowAbi = require('../../coincow-contracts/build/contracts/TestCow.json').abi
const coinCowCoreAbi = require('../../coincow-contracts/build/contracts/CoinCowCore.json').abi
const farmAbi = require('../../coincow-contracts/build/contracts/Farm.json').abi
const auctionHouseAbi = require('../../coincow-contracts/build/contracts/AuctionHouse.json').abi

export { web3 }
export const contracts = {
  userInfo: web3.loadContract(userInfoAbi, addresses.userInfo),
  EtherCow: web3.loadContract(TestCowAbi, addresses.testEthCow),
  BitcoinCow: web3.loadContract(TestCowAbi, addresses.testBtcCow),
  coinCowCore: web3.loadContract(coinCowCoreAbi, addresses.coinCowCore),
  farm: web3.loadContract(farmAbi, addresses.farm),
  auctionHouse: web3.loadContract(auctionHouseAbi, addresses.auctionHouse)
}
export const coinMap = {
  [addresses.testEthCow]: {
    type: 'ether',
    contract: contracts.EtherCow
  },
  [addresses.testBtcCow]: {
    type: 'bitcoin',
    contract: contracts.BitcoinCow
  }
}

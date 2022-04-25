import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'

import CZCoreAbi from '~/abi/CZCore.json'

// # @dev below is storage and get/set for cz state
// # cz state stores
// # lp_total - total lp tokens in issue
// # capital_total - total USDC reserves, notional number, not reduced by loans
// # loan_total - total loans made, the capital total - loan total gives you the remaining liquidity this should recon to actual USDC in CZCore
// # insolvency_total - if a loan is liquidated at a loss, the loss is accumulated
// # reward_total - is the current rewards accrued so far

export function useCZCoreContract() {
  return useContract({
    abi: CZCoreAbi as Abi[],
    address: '0x0750ed5b80ddf957e947956a2ef47b99cbb7cf841791ff517e9bb527542cf8b2',
  })
}

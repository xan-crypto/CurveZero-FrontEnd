import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'

import CZCoreAbi from '~/abi/CZCore.json'

export function useCZCoreContract() {
  return useContract({
    abi: CZCoreAbi as Abi[],
    address: '0x0750ed5b80ddf957e947956a2ef47b99cbb7cf841791ff517e9bb527542cf8b2',
  })
}

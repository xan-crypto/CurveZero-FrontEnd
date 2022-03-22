import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'

import WETH from '~/abi/ERC20_base.json'

export function useWETHContract() {
  return useContract({
    abi: WETH as Abi[],
    address: '0x0642a8136749d9f1d5495e4f02f57fb8e13a01287dd924722ee45362162e5144',
  })
}

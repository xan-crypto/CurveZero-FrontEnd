import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'

import Settings from '~/abi/Settings.json'

export function useSettingsContract() {
  return useContract({
    abi: Settings as Abi[],
    address: '0x025136c1d3169b537268b35182b75928dddd2820b21ae1b9b15c4f226855d94c',
  })
}

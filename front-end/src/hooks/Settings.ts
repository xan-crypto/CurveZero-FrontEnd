import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'

import Settings from '~/abi/Settings.json'

// Useful call: get_utilization

export function useSettingsContract() {
  return useContract({
    abi: Settings as Abi[],
    address: '0x049ac49aeb13a9f564a36c3bdc9daaeda94ae16787787c03276bce271b013b51',
  })
}

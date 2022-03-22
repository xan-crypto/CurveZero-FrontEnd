import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'

import Oracle from '~/abi/Oracle.json'

export function useOracleContract() {
  return useContract({
    abi: Oracle as Abi[],
    address: '0x050c4055afde603ee98470ec2b4f83a76ab849057f92d60b01fb2b89bf54388c',
  })
}

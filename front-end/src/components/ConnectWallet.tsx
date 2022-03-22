import { useStarknet } from '@starknet-react/core'
import { Button } from 'antd'

export function ConnectWallet() {
  const { account, connectBrowserWallet } = useStarknet()

  if (account) {
    const sub = `${account.substr(0, 4)}...${account.substr(-4)}`
    return <Button>{sub}</Button>
  }

  return (
    <Button type="primary" onClick={connectBrowserWallet}>
      Connect
    </Button>
  )
}

//import { useStarknet, useStarknetInvoke } from '@starknet-react/core'
//import React from 'react'
//import { useCounterContract } from '~/hooks/counter'

//export function IncrementCounter() {
//const { account } = useStarknet()
//const { contract: counter } = useCounterContract()
//const { invoke } = useStarknetInvoke({ contract: counter, method: 'incrementCounter' })

//if (!account) {
//return null
//}

//return (
//<div>
//<button onClick={() => invoke({ args: { amount: '0x1' } })}>Increment Counter by 1</button>
//</div>
//)
//}

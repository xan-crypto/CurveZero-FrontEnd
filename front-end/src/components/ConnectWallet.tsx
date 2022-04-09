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

import { useStarknet, useStarknetCall } from '@starknet-react/core'
import { Divider, Row, Col, Statistic } from 'antd'
import { useWETHContract } from '~/hooks/WETH'
import { useOracleContract } from '~/hooks/Oracle'
import { useSettingsContract } from '~/hooks/Settings'
import { formatUnits } from '~/helpers/formatUnits'

function maxLoan(balance, ltv, price) {
  if (!balance || !ltv || !price) return
  return (balance * price * ltv) / 100
}

export function UserData() {
  const { account } = useStarknet()
  const { contract: weth } = useWETHContract()
  const { contract: oracle } = useOracleContract()
  const { contract: settings } = useSettingsContract()

  const { data: settingsData } = useStarknetCall({
    contract: settings,
    method: 'get_weth_ltv',
    args: {},
  })
  const ltv = formatUnits(settingsData?.ltv, 6)

  const { data: oracleData } = useStarknetCall({
    contract: oracle,
    method: 'get_oracle_price',
    args: {},
  })
  const price = formatUnits(oracleData?.price, 18)

  const { data: balanceData } = useStarknetCall({
    contract: weth,
    method: 'ERC20_balanceOf',
    args: { account },
  })
  const balance = formatUnits(balanceData?.balance.low, 18)

  return (
    <>
      <Divider orientation="left" orientationMargin="0">
        <h3>Your Assets</h3>
      </Divider>
      <Row justify="start">
        <Col span={4}>
          <Statistic title="WETH Balance" value={balance ?? '...'} />
        </Col>
        <Col span={4}>
          <Statistic title="WETH Price" value={price ?? '...'} />
        </Col>
        <Col span={4}>
          <Statistic title="WETH Loan-to-Value" value={ltv ?? '...'} suffix="%" />
        </Col>
        <Col span={4}>
          <Statistic title="Max Loan (USDC)" value={maxLoan(balance, ltv, price) ?? '...'} />
        </Col>
      </Row>
    </>
  )
}

import { Row, Col, Card, Statistic } from 'antd'
import { useStarknetCall } from '@starknet-react/core'
import { useCZCoreContract } from '~/hooks/CZCore'
import { useSettingsContract } from '~/hooks/Settings'
import { formatUnits } from '~/helpers/formatUnits'

export function EarnInterest() {
  const { contract: czcore } = useCZCoreContract()
  const { contract: settings } = useSettingsContract()
  const { data: czcoreData } = useStarknetCall({
    contract: czcore,
    method: 'get_cz_state',
    args: {},
  })
  const { data: settingsData } = useStarknetCall({
    contract: settings,
    method: 'get_utilization',
    args: {},
  })
  const utilization = formatUnits(settingsData?.stop, 6)

  return (
    <Row justify="start">
      <Col span={16}>
        <Card title="Total Capital (USDC)" bordered={true}>
          <Statistic title="Total Capital (USDC)" value={'...'} />
          <Statistic title="Lenders" value={'...'} />
          <Statistic title="Utilization Rate" value={utilization ?? '...'} suffix="%" />
          <Statistic title="Estimated APY" value={200} />
          <Statistic
            title="Lockup Period"
            value={czcoreData ? formatUnits(czcoreData.capital_total, 8).toFixed(2) : '...'}
          />
        </Card>
      </Col>
    </Row>
  )
}

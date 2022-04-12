// import { useStarknetCall } from '@starknet-react/core'
import { Row, Col, Card } from 'antd'
// import { useCZCoreContract } from '~/hooks/CZCore'
import { YieldCurve } from './YieldCurve'

export function CardTest() {
  // const { contract: czcore } = useCZCoreContract()

  // const { data } = useStarknetCall({ contract: czcore, method: 'get_cz_state', args: {} })

  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Earn Interest by Depositing USDC" bordered={true}>
          Card content
        </Card>
      </Col>
      <Col span={16}>
        <Card title="Historic Rates by Term" bordered={true}>
          <YieldCurve />
        </Card>
      </Col>
    </Row>
  )
}

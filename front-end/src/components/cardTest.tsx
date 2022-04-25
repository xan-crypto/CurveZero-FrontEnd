import { Row, Col, Card } from 'antd'
import { YieldCurve } from './plots/YieldCurve'

export function CardTest() {
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

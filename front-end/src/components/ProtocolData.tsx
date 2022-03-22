import { useStarknetCall } from '@starknet-react/core'
import { Divider, Row, Col, Statistic } from 'antd'
import { useCZCoreContract } from '~/hooks/CZCore'
import { formatUnits } from '~/helpers/formatUnits'

export function ProtocolData() {
  const { contract: czcore } = useCZCoreContract()

  const { data } = useStarknetCall({ contract: czcore, method: 'get_cz_state', args: {} })

  return (
    <>
      <Divider orientation="left" orientationMargin="0">
        <h3>Protocol Data</h3>
      </Divider>
      <Row justify="start">
        <Col span={4}>
          <Statistic
            title="Total Capital (USDC)"
            value={data ? formatUnits(data.capital_total, 8).toFixed(2) : '...'}
          />
        </Col>
        <Col span={4}>
          <Statistic
            title="Total Loans (USDC)"
            value={data ? formatUnits(data.loan_total, 8) : '...'}
          />
        </Col>
        <Col span={4}>
          <Statistic title="Available Liquidity" value={23000} />
        </Col>
        <Col span={4}>
          <Statistic title="Active Loans" value={34} />
        </Col>
        <Col span={4}>
          <Statistic title="Average rate" value={2.3} suffix="%" />
        </Col>
        <Col span={4}>
          <Statistic title="Average term" value={6} suffix="months" />
        </Col>
      </Row>
    </>
  )
}

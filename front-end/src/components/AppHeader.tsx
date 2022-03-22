import { Menu, Row, Col } from 'antd'
import { ConnectWallet } from '~/components/ConnectWallet'

export function AppHeader() {
  return (
    <Row justify="space-between" align="middle">
      <Col span={12}>
        <Menu theme="dark" selectedKeys={['borrow']} mode="horizontal">
          <Menu.Item key="deposit">Deposit</Menu.Item>
          <Menu.Item key="borrow">Borrow</Menu.Item>
          <Menu.Item key="stake">Stake</Menu.Item>
          <Menu.Item key="oracles">Pricing Oracles</Menu.Item>
          <Menu.Item key="liquidations">Liquidate Loans</Menu.Item>
          <Menu.Item key="insurance">Insurance Fund</Menu.Item>
          <Menu.Item key="docs">Docs</Menu.Item>
        </Menu>
      </Col>
      <Col span={2}>
        <ConnectWallet />
      </Col>
    </Row>
  )
}

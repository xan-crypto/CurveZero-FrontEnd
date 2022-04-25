import { Menu, Row, Col } from 'antd'
import Link from 'next/link'
import { ConnectWallet } from '~/components/ConnectWallet'

import { useRouter } from 'next/router'
import { NextPage } from 'next'

export const AppHeader: NextPage = () => {
  const Router = useRouter()

  return (
    <Row justify="space-between" align="middle">
      <Col span={12}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[Router.asPath]}
          defaultSelectedKeys={[Router.asPath]}
        >
          <Menu.Item key="deposit">
            <Link href="/deposit">Deposit</Link>
          </Menu.Item>
          <Menu.Item key="borrow">
            <Link href="/borrow">Borrow</Link>
          </Menu.Item>
          <Menu.Item key="stake">Stake</Menu.Item>
          <Menu.Item key="pp">
            <Link href="/pp">PP Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="docs">Docs</Menu.Item>
        </Menu>
      </Col>
      <Col span={2}>
        <ConnectWallet />
      </Col>
    </Row>
  )
}

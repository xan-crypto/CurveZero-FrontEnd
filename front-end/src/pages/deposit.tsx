import type { NextPage } from 'next'
import { Layout, PageHeader } from 'antd'
import { AppHeader } from '~/components/AppHeader'
import { EarnInterest } from '~/components/cards/EarnInterest'

const { Header, Content } = Layout

const deposit: NextPage = () => {
  return (
    <Layout>
      <Header>
        <AppHeader />
      </Header>
      <Content
        style={{
          padding: '0 50px',
          background: 'white',
          // background: 'linear-gradient(to bottom, #5738c7 0% 8% , white 0% 100%)',
        }}
      >
        <PageHeader title="Deposit UI" style={{ paddingLeft: '0' }} />
        <EarnInterest />
      </Content>
    </Layout>
  )
}

export default deposit

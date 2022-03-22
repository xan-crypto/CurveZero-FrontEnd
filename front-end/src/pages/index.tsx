import type { NextPage } from 'next'
import { Layout, PageHeader } from 'antd'
import { AppHeader } from '~/components/AppHeader'
import { ProtocolData } from '~/components/ProtocolData'
import { UserData } from '~/components/UserData'
import { RequestLoan } from '~/components/RequestLoan'

const { Header, Content } = Layout

const Home: NextPage = () => {
  return (
    <Layout>
      <Header>
        <AppHeader />
      </Header>
      <Content style={{ padding: '0 50px', backgroundColor: 'white' }}>
        <PageHeader title="Borrow USDC" style={{ paddingLeft: '0' }} />
        <ProtocolData />
        <UserData />
        <RequestLoan />
      </Content>
    </Layout>
  )
}

export default Home

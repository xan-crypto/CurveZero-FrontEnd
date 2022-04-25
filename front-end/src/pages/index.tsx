import type { NextPage } from 'next'
import { Layout } from 'antd'
import { AppHeader } from '~/components/AppHeader'
import { CardTest } from '~/components/cardTest'

const { Header, Content } = Layout

const Home: NextPage = () => {
  return (
    <Layout>
      <Header>
        <AppHeader />
      </Header>
      <Content
        style={{
          padding: '0 50px',
          // background: 'white',
          background: 'linear-gradient(to bottom, #5738c7 0% 0% , white 0% 100%)',
        }}
      >
        <h1>Testing some cards in /</h1>
        <CardTest />
      </Content>
    </Layout>
  )
}

export default Home

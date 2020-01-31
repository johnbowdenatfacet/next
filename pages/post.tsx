import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'

type Props = {}

const Page: NextPage<Props> = () => {
  const router = useRouter()

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  )
}

export default Page

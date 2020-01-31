import { NextPage } from 'next'

import Layout from '../../components/Layout'

type Props = {}

const Post: NextPage<Props> = () => (
  <Layout>
    <h1>Some blog</h1>
    <div>Some blog info here.</div>
  </Layout>
)

export default Post

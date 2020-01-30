import { NextPage } from 'next'
import Link from 'next/link'

import Layout from '../components/Layout'

type Props1 = {
  id: string;
}
type Props2 = {}

const PostLink: NextPage<Props1> = props => (
  <li>
    <Link href='/p/[id]' as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)

const Blog: NextPage<Props2> = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id='hello-nextjs' />
        <PostLink id='learn-nextjs' />
        <PostLink id='deploy-nextjs' />
      </ul>
    </Layout>
  )
}

export default Blog

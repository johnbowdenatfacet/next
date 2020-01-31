import { NextPage } from 'next'
import Link from 'next/link'
import { connect } from 'react-redux'

import Layout from '../components/Layout'

type Props1 = {
  id: string;
}
type Props2 = {
  count: number;
}

const PostLink = ({ id }: Props1) => (
  <li>
    <Link href={`/p/${id}`}>{id}</Link>
  </li>
  // <li>
  //   <Link href='/p/[id]' as={`/p/${props.id}`}>
  //     <a>{props.id}</a>
  //   </Link>
  // </li>
)

const Blog: NextPage<Props2> = ({ count }) => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <p>renders: {count}</p>
      <ul>
        <PostLink id='hello-nextjs' />
        <PostLink id='learn-nextjs' />
        <PostLink id='deploy-nextjs' />
      </ul>
    </Layout>
  )
}

const mapStateToProps = (state: any) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Blog)

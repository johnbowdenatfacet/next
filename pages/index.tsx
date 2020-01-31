import { NextPage } from 'next'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import Layout from '../components/Layout'
// import Link from '../components/Link'

type Props1 = {
  id: string;
}

const Li = styled.li`
  color: red;
`

const PostLink = ({ id }: Props1) => (
  <Li>
    <Link href={`/p/${id}`}>{id}</Link>
  </Li>
)

type Props2 = {
  count: number;
}

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

const X = connect(mapStateToProps)(Blog)

const Wrapped = () => <div><X /></div>

export default Wrapped

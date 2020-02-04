import { NextPage } from 'next'
import { connect } from 'react-redux'

import Layout from '../components/Layout'

type Props = {
  abc?: string;
  count: number;
}

const About: NextPage<Props> = ({ abc, count }) => {
  return (
    <Layout>
      <p>This is the about page</p>
      <div>{abc}|{count}</div>
    </Layout>
  )
}

const mapStateToProps = (state: any) => {
  return {
    count: state.count
  }
}

const ConnectedNextPage = connect(mapStateToProps)(About)

const Wrapped = () => <div><ConnectedNextPage /></div>

export default Wrapped

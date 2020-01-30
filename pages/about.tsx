import { NextPage } from 'next'

import Layout from '../components/Layout'

type Props = { abc: string; }

const a = 'a123'

const About: NextPage<Props> = (props) => {
  return (
    <Layout>
      <p>This is the about page</p>
      <div>{props.abc}</div>
    </Layout>
  )
}

export default About

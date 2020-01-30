import { NextPage } from 'next'
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

type Props = {}

const Header: NextPage<Props> = () => (
  <div>
    <Link href='/'>
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href='/about'>
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)

export default Header

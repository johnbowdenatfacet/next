import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

type Props = {
  children: any;
}

const Layout = ({ children }: Props) => (
  <div style={layoutStyle}>
    <Header />
    {children}
  </div>
)

export default Layout

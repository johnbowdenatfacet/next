import Router from 'next/router'

type Props = {
  href: string;
  children: any;
}

const Link = ({ href, children }: Props) => {
  return (
    <a
      style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
      onClick={() => Router.push(href)}
    >
      {children}
    </a>
  )
}

export default Link

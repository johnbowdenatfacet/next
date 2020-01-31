import Router from 'next/router'
import styled from 'styled-components'

type AProps = {
  color?: string;
}

const A = styled.a`
  cursor: pointer;
  color: ${(props: AProps) => props.color || 'blue'};
  text-decoration: underline;
`

type Props = {
  href: string;
  children: any;
  color?: string;
}

const Link = ({ href, children, color }: Props) => {
  return (
    <A color={color} onClick={() => Router.push(href)}>
      {children}
    </A>
  )
}

export default Link

import { useEffect } from 'react'
import { connect } from 'react-redux'

import counter from './'

type WrapperProps = {
  children: any;
  increment: Function;
}

const Wrapper = ({ children, increment }: WrapperProps) => {
  useEffect(() => {
    increment()
  })

  return (
    <div>
      {children}
    </div>
  )
}

export default connect(null, {
  increment: () => counter.actions.increment()
})(Wrapper)

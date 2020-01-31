// import App from 'next/app'

// class MyApp extends App {
//   static async getInitialProps ({ Component, ctx }) {
//     const pageProps = Component.getInitialProps
//       ? await Component.getInitialProps(ctx)
//       : {}

//     return { pageProps }
//   }

//   render () {
//     const { Component, pageProps } = this.props
//
//     return (
//       <Component {...pageProps} />
//     )
//   }
// }

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { NextPage } from 'next'

import counter from '../features/counter'
import Wrapper from './../features/counter/Wrapper'

const store = configureStore({
  reducer: {
    count: counter.reducer
  }
})

type Props = {
  Component: any;
  pageProps: any;
}

const MyApp: NextPage<Props> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>
  )
}

export default MyApp

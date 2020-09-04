import React from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import ApolloClient from '@components/common/apollo-client'
import { Provider as ReduxProvider } from 'react-redux'
import reduxStore from '@modules/redux'
import { initI18next } from '@components/common/globalization'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'

initI18next().then()

const RootApp = ({ Component, pageProps }: AppProps) => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <ApolloProvider client={ApolloClient}>
        <ReduxProvider store={reduxStore}>
          <Component {...pageProps} />
        </ReduxProvider>
      </ApolloProvider>
    </>
  )
}

export default RootApp

import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
    
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head>
        <title>Advice generator - Nextjs</title>
      </Head>
      <main className='ag-container'>
        {children}
      </main>
    </>
  )
}
import React, { useState, useEffect, useCallback  } from 'react'
import Head from 'next/head'
import Box from '../components/Box'

 
const Home = () => {
  const [advice, setAdvice] = useState({});
  const [renderDone, setRenderDone] = useState(false);

  const handleClick = useCallback (async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice ( data.slip ); 
      setRenderDone(true);

    } catch (err) {
      console.log(err);
    }
  },[advice])

  useEffect(() => {
    handleClick();
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Advice generator app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { renderDone  && <Box handleClick={handleClick} advice={advice.advice} AdviecId={advice.id} key={advice.id} /> }
       
    </>
  )
}

export default Home
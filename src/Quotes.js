import { useCallback, useEffect, useState } from 'react';

function Quote() {

  const [quote, setQuote] = useState('');

  // 1
  // useEffect(() => {
  //   getQuote()
  // }, [])

  // const getQuote = async () => {
  //   const responce = await fetch('https://api.quotable.io/random');
  //   const data = await responce.json();
  //   setQuote(data.content)
  // }

  // 2
  useEffect(() => {
    const getQuote = async () => {
      const responce = await fetch('https://api.quotable.io/random');
      const data = await responce.json();
      setQuote(data.content)
    }
    getQuote()
  }, [])

  // 3
  // const getQuote = useCallback(async () => {
  //   const responce = await fetch('https://api.quotable.io/random');
  //   const data = await responce.json();
  //   setQuote(data.content)
  // }, [])

  // useEffect(() => {
  //   getQuote()
  // }, [getQuote])
 
  return (
    <div>
      <p>{quote}</p>
    </div>
  );
}

export default Quote;

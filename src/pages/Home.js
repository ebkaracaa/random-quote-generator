import { useEffect, useState } from "react";

// const wordle_API_URL = 'https://api.frontendexpert.io/api/fe/wordle-words';

const temp_api = 'https://type.fit/api/quotes'

/* function Home() {

  const [quotes, setQuote] = useState('');

  useEffect(() => {
    const getQuote = async () => {
      const response = await fetch(temp_api);
      const quotes = await response.json(); // .then(res => res.json() )
      // .then (data => console.log(data))
      let randomNumber = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomNumber]);

    };
    getQuote();

  }, []); */

function Home() {

  const [quotes, setQuote] = useState('');

  const getQuote = () => {
    fetch(temp_api)
      .then((res) => res.json())
      .then((quotes) => {
        let randomNumber = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomNumber]);
      });
  };
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="Home">
      <div className="quote">
        <p>{quotes.text}</p>
        <p>{quotes.author} </p>
        <div className="btnContainer">
          <button onClick={getQuote} className="btn">Get Random Quote</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

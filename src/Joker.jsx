import React, { useEffect, useState } from "react";

function Joker() {
  const [joke, setjoke] = useState({});

  const URL = "https://official-joke-api.appspot.com/jokes/random";
 
  const newJoke = async () => {
    let response = await fetch(URL);
    let jsonresponse = await response.json();
    console.log(jsonresponse);
    setjoke({
      setup: jsonresponse.setup,
      punchline: jsonresponse.punchline,
    });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonresponse = await response.json();
      console.log(jsonresponse);
      setjoke({
        setup: jsonresponse.setup,
        punchline: jsonresponse.punchline,
      });
    }
    getFirstJoke();
  },[]);

  return (
    <div>
      <h1 className="text-5xl font-bold mb-8 text-red-500">Joker !</h1>
      <h2 className="text-xl font-bold mb-4">{joke.setup}</h2>
      <h2 className="text-xl font-bold mb-8">{joke.punchline}</h2>
      <button onClick={newJoke}>New Joke</button>
    </div>
  );
}

export default Joker;

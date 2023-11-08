import { useEffect, useState, } from "react";
import { SecondCounter } from "./SecondCounter";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <SecondCounter counter={counter} />
    </>
  );
}
export default App;

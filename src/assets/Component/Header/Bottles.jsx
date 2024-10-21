import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
    // .then((data) => console.log(data));
  }, []);

  return (
    <div
      style={
        {
          // display: "grid",
          // gridTemplateColumns: "3fr 1fr",
        }
      }
    >
      {bottles.map((bottle) => (
        <Bottle key={bottle.id} bottle={bottle}></Bottle>
      ))}
    </div>
  );
};

export default Bottles;
// {bottles.map((bottle) => (
//   <Bottles key={bottles.id} bottle={bottle}></Bottles>
// ))}

import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [purchase, setPurchase] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
    // .then((data) => console.log(data));
  }, []);

  const handlePurchase = (bottle) => {
    console.log("Purchase added going on.");
    const newPurchase = [...purchase, bottle];
    setPurchase(newPurchase);
  };

  return (
    <div
      style={
        {
          // display: "grid",
          // gridTemplateColumns: "3fr 1fr",
        }
      }
    >
      <h2>Purchase: {purchase.length}</h2>
      {bottles.map((bottle) => (
        <Bottle
          key={bottle.id}
          bottle={bottle}
          handlePurchase={handlePurchase}
        ></Bottle>
      ))}
    </div>
  );
};

export default Bottles;
// {bottles.map((bottle) => (
//   <Bottles key={bottles.id} bottle={bottle}></Bottles>
// ))}

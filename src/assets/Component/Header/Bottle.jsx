const Bottle = ({ bottle }) => {
  // console.log(bottle);
  const { name, img, price } = bottle;
  return (
    <div
      style={{
        border: "2px solid blue",
        borderRadius: "15px",
        margin: "15px",
        padding: "10px",
        width: "400px",
      }}
    >
      <h2>Bottle Name: {name}</h2>
      <img style={{ width: "380px", borderRadius: "15px" }} src={img} alt="" />
      <p>Price: ${price}</p>
      <button>Purchase</button>
    </div>
  );
};

export default Bottle;

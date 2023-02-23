import SHOP_DATA from "../../shop-data.json";

const shop = () => {
  return (
    <div>
      {SHOP_DATA.map(({ id, name }) => (
        <div>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

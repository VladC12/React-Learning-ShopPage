import classes from "./AvailableSKU.module.css";
import SKUItem from "./SKUItem/SKUItem";
import Card from "../UI/Card";

const DUMMY_SKU = [
  {
    id: "s1",
    name: "Coffee",
    description: "Coffee because look at the banner",
    price: 69.69,
  },
  {
    id: "s2",
    name: "Sand",
    description: "Don't turks put that in their coffee?",
    price: 0.322,
  },
  {
    id: "s3",
    name: "Lead",
    description: "Eat lead!",
    price: 6.99,
  },
];

const AvailableSKU = () => {
  const SKUList = DUMMY_SKU.map((SKU) => (
    <SKUItem
      id = {SKU.id}
      key={SKU.id}
      name={SKU.name}
      description={SKU.description}
      price={SKU.price}
    />
  ));

  return (
    <section className={classes.SKU}>
      <Card /* Wrapper component. Can be considered like a custom container/div that also takes props.children */
      >
        <ul>{SKUList}</ul>
      </Card>
    </section>
  );
};

export default AvailableSKU;

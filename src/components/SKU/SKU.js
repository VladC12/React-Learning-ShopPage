import SKUSummary from "./SKUSummary";
import AvailableSKU from "./AvailableSKU";
import { Fragment } from "react";

const SKU = () => {
  return (
    <Fragment>
      <SKUSummary />
      <AvailableSKU />
    </Fragment>
  );
};

export default SKU;

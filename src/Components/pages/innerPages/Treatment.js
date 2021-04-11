import React from "react";
import "../../../sass/treatments.scss";

const procedures = [
  {
    name: "lorem",
    price: "37",
  },
  {
    name: "lorem2",
    price: "51",
  },
  {
    name: "lore3",
    price: "44",
  },
  {
    name: "lorem4",
    price: "117",
  },
  {
    name: "lorem5",
    price: "380",
  },
  {
    name: "lorem6",
    price: "71",
  },
  {
    name: "lorem7",
    price: "65",
  },
  {
    name: "lorem8",
    price: "105",
  },
];
const currencyName = "złotych";
const classNames = [
  "treatmentContainer",
  "treatmentTable",
  "treatmentTableThead",
  "treatmentTableTbody",
  "treatmentTableTr",
  "treatmentTableTh",
  "treatmentTableTd",
];
const Treatment = () => {
  const singleItem = procedures.map(({ name, price }) => (
    <tr className={classNames[4]} key={name}>
      <td className={classNames[6]}>{name}</td>
      <td className={classNames[6]}>
        {price} {currencyName}
      </td>
    </tr>
  ));
  return (
    <>
      <div className="producstMainContainer">
        <div className={classNames[0]}>
          <table className={classNames[1]}>
            <thead className={classNames[2]}>
              <tr className={classNames[4]}>
                <th className={classNames[5]}>Zabieg</th>
                <th className={classNames[5]}>Cena</th>
              </tr>
            </thead>
            <tbody className={classNames[3]}>{singleItem}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Treatment;

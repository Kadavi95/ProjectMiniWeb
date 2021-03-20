import React from "react";

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
const currencyName = 'złotych'
const Treatment = () => {
    const singleItem = procedures.map(({name, price}) => (
        <tr>
            <td>{name}</td>
            <td>{price}{currencyName}</td>
        </tr>
    ))
  return (
    <>
      <table>
        <tr>
          <th>Zabieg</th>
          <th>Cena</th>
        </tr>
        {singleItem}

      </table>
    </>
  );
};

export default Treatment;

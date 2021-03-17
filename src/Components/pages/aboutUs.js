import React, { useEffect, useState } from "react";
import fakeData from "../../Elements/fakeData";

const rowNumber = 3;
const organizationsName = fakeData.map(({ type }) => type);
console.log(organizationsName);

const ListRow = ({ name, description, items }) => (
  <div >
    <div >
      <p>{name}</p>
      <p>{description}</p>
    </div>
    <div >
      {items.map((item) => (
        <div  style={{ marginLeft: ".3rem" }}>
          {item}
        </div>
      ))}
    </div>
  </div>
);
console.log(ListRow);

const paginate = (array, pageNumber) => {

  console.log(array.slice((pageNumber - 1) * rowNumber));
  return array.slice((pageNumber - 1) * rowNumber, pageNumber * rowNumber);
};
const Buttons = ({ totalItems, setCurrentPage }) => {
  const arr = [];
  const numberOfButtons = totalItems / rowNumber;
  for (let i = 0; i < numberOfButtons; i++) {
    arr.push(i);
  }
  return arr.map((i) => (
    <button className="switch_button" onClick={() => setCurrentPage(i + 1)}>
      {i + 1}
    </button>
  ));
};

const AboutUs = () => {
  // indexOrganization-do przerzucania między zawartością main buttonów, domyślnie od 0(lleft)//
  //set Data -przechowuje jeden z 3 obieków, domyślnie pierwszy, meetoda setDate to zmiany//
  //Pieerwszy useEffeect- po pierwsze domyślnie po każdej zmiannie indexOrganization zmiani wartość currentPage na 1 (tak by przeskakiwaniu między strronami, gdy jedna ma większą zawartość od drugie nie doszło do błędów.) Po drugie ustawi obiekt wykorzystuje metodę setDate, tak by wskazywało na dany obiekt  po indexie)//
    //Drugi useEffect ustawi odpowiednie dane, wyskozystując fukcjn paginate która przyjmuje dwa parametry- array i page number. Pod parametr 

  const [indexOrganization, setIndexOrganization] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(fakeData[0]);
  const [currentPageData, setCurrentPageData] = useState(null);
  console.log(data);
  useEffect(() => {
    setCurrentPage(1);
    setData(fakeData[indexOrganization]);
  }, [indexOrganization]);

  useEffect(() => {
    setCurrentPageData(paginate(data.organizations, currentPage));
  }, [data, currentPage]);

  console.log(indexOrganization);
  return (
    <>
      <main >
        <div >
          {organizationsName.map((name, i) => (
            <button
              key = {i}
              className="fundations_main-button"
              onClick={() => setIndexOrganization(i)}
            >
              {name}
            </button>
          ))}
        </div>
        <div >
          {currentPageData?.map(({ name, description, items }) => (
            <ListRow name={name} description={description} items={items} />
          ))}
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
        >
          <Buttons
            totalItems={data.organizations.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </main>
    </>
  );
};

export default AboutUs;

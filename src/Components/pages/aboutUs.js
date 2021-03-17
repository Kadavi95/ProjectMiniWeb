import React, { useEffect, useState } from "react";
import fakeData from "../../Elements/fakeData";

//stała równa 3//
const row = 3;
//Tworze tablicę zawierającą 3 stringi-każdego użyję do oddzielnego mainButtonu, kaźdy string ma swój własny index-obvious//
const organizationsNames = fakeData.map(({ type }) => type);



const AboutUs = () => {
// indexOrganization-do przerzucania między zawartością main buttonów, domyślnie od 0(lleft)//
//set Data -przechowuje jeden z 3 obieków, domyślnie pierwszy, meetoda setDate to zmiany//
//Pieerwszy useEffeect- po pierwsze domyślnie po każdej zmiannie indexOrganization zmiani wartość currentPage na 1 (tak by przeskakiwaniu między strronami, gdy jedna ma większą zawartość od drugie nie doszło do błędów.) Po drugie ustawi obiekt wykorzystuje metodę setDate, tak by wskazywało obekt po indexie)//

  const [indexOrganization, setIndexOrganization] = useState(0);
  const [data, setData] = useState(fakeData[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState(null)

  useEffect(() => {
    setCurrentPage(1)
    setData(fakeData[indexOrganization])
  }, [indexOrganization] )

  useEffect(() => {
      setCurrentPage(paginate(data.organizations.currentPage))
  }, [data, currentPage])

  console.log(indexOrganization);
  console.log(data);
  return (
    <>
      <main className="aboutUsContainer">
        {/* Tworzę  div'a a w nim mapuję po tablicy organizationNames. Każdy button dostaje name jako zawartość oraz onClick który wywoła setIndexOrganization(z indexem) po kliknięciu. Dla wyjęcia błędów, każdemu buttonowi daję ID równemu indeksowi */}
        <div className="organisationsContainer">
          {organizationsNames.map((name, i) => (
            <button id={i}onClick={() => setIndexOrganization(i)}>{name}</button>
          ))}
        </div>
        <div className='dataContainer'>

        </div>
        <div className="buttonsContainer">

        </div>
      </main>
    </>
  );
};

export default AboutUs;

import React, { useEffect, useState } from "react";
import fakeData from "../../Elements/fakeData";
import "../../sass/aboutUs.scss";

const rowNumber = 3;
const organizationsName = fakeData.map(({ type }) => type);
console.log(organizationsName);

//komponent funkcyjny-nazwa, opis, i jego dzieci dla któ®ych iteruje po każdym twojrza dla niego diva z kluczem//
const ListRow = ({ name, description, items }) => (
  <div className="ListRowMainCointainer">
    <div className="NameAndDestriptionContainer">
      <p>{name}</p>
      <p>{description}</p>
    </div>
    <div className="ItemsContainer">
      {items.map((item) => (
        <div key={item} className="singleItem">
          {item}
        </div>
      ))}
    </div>
  </div>
);

//funkcja paginate-  w tym wypadku,pod parametr array pobierany drugi klucz każdego obiektu który ma w sobie nablicę obiektów, oraz pageNumber-tutaj podstawia się currentPage. Dla talicy wykonuje metodę tablicową slice- od do. Gdzie od jest równe page number - 1 * liczba rzędów, a do currentNumber * row (3). Domyślnie od 0 do 3, potem od 3 do 6, i tak dalej...//
const paginate = (array, pageNumber) => {
  return array.slice((pageNumber - 1) * rowNumber, pageNumber * rowNumber);
};
//Komponent klasowy ze spredowaniem zamiast props, ma własną tablicę. Oblicza ilość przycisków na powstawie długość tablicy data. orgqnisations.  Następnie fukcja for do wartośći maks numberofbuttons, wpycha type numeber których użyję później do literowania. Następnie z tablicy arr, literuję mapą, tworząc dla każdego buttona, z metodą do zmiany currentPage  i + 1 dla każdego.
const Buttons = ({ totalItems, setCurrentPage }) => {
  const arr = [];
  const numberOfButtons = totalItems / rowNumber;
  for (let i = 0; i < numberOfButtons; i++) {
    arr.push(i);
    console.log(i);
  }
  return arr.map((i) => (
    <button
      key={i}
      className="aboutUsChanePageSingleButton"
      onClick={() => setCurrentPage(i + 1)}
    >
      {i + 1}
    </button>
  ));
};

const AboutUs = () => {
  // indexOrganization-do przerzucania między zawartością main buttonów, domyślnie od 0(lleft)//
  //set Data -przechowuje jeden z 3 obieków, domyślnie pierwszy, meetoda setDate to zmiany//
  //Pieerwszy useEffeect- po pierwsze domyślnie po każdej zmiannie indexOrganization zmiani wartość currentPage na 1 (tak by przeskakiwaniu między strronami, gdy jedna ma większą zawartość od drugie nie doszło do błędów.) Po drugie ustawi obiekt wykorzystuje metodę setDate, tak by wskazywało na dany obiekt  po indexie)//
  //Drugi useEffect ustawi odpowiednie dane, wykorzystując funkcję paginate która przyjmuje dwa parametry- array i page number. Pod parametr pierwszy podstawiane będzie drugi klucz obiektu (zawierający tablicę obiektów), a pod drugi parametr current page//

  const [indexOrganization, setIndexOrganization] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(fakeData[0]);
  const [currentPageData, setCurrentPageData] = useState(null);

  useEffect(() => {
    setCurrentPage(1);
    setData(fakeData[indexOrganization]);
  }, [indexOrganization]);

  useEffect(() => {
    setCurrentPageData(paginate(data.organizations, currentPage));
  }, [data, currentPage]);

  return (
    <>
      <main className="aboutUsContainer">
        <div className="aboutUsSmallContainer">
          {/* mapuję pod wcześniej utworzonej tablicy (w tym wypadku 3 obekt.) dla każdego tworzę btn  który ma key z indexu. Każdy btn ma swój classNam i metodę onCLick która ustawi indexOrganization wedle wartości indexu. To z kolei inicjować pierwszą metodę useEffect  */}
          <div className="aboutUsMainButtons">
            {organizationsName.map((name, i) => (
              <button
                key={i}
                className="aboutUsSingleMainButton"
                onClick={() => setIndexOrganization(i)}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="aboutUsDateContainer">
            {currentPageData?.map(({ name, description, items }) => (
              <ListRow name={name} description={description} items={items} />
            ))}
          </div>
          <div className="aboutUsChangePageButtons">
            <Buttons
              totalItems={data.organizations.length}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;

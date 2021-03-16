import React, { useEffect, useState } from "react";
import fakeData from "../../Elements/fakeData";

//stała równa 3//
const row = 3;
//Tworze tablicę zawierającą 3 stringi-każdego użyję do oddzielnego mainButtonu, kaźdy string ma swój własny index-obvious//
const organizationsNames = fakeData.map(({ type }) => type);

const AboutUs = () => {
  const [indexOrganization, setIndexOrganization] = useState(0);
  console.log(indexOrganization);
  return (
    <>
      <main className="aboutUsContainer">
        {/* Tworzę  div'a a w nim mapuję po tablicy organizationNames. Każdy button dostaje name jako zawartość oraz onClick który wywoła setIndex po kliknięciu */}
        <div className="organisationsContainer">
          {organizationsNames.map((name, i) => (
            <button onClick={() => setIndexOrganization(i)}>{name}</button>
          ))}
        </div>
      </main>
    </>
  );
};

export default AboutUs;

import React from "react";

const date = [
  {
    type: "Nr tel",
    content: "0987654234",
  },
  {
    type: "Adres email",
    content: "lorem@lorem.pl",
  },
  {
    type: "Adres:",
    content: "Loremowa 13, Loremów Dolny",
  },
  {
    type: "NIP",
    content: "90-123-0142-13123",
  },
  {
    type: "KRS",
    content: "0001000300423612",
  },
];
const classNames = ["contactus_container", "mainContainer", 'singleDateContainer'];
const contactUs = () => {
  const singleDataContainer = date.map(({ type, content }) => (
    <div key={type} className={classNames[2]}>
      <p>{type}</p>
      <p>{content}</p>
    </div>
  ));
  return (
    <>
      <div className={classNames[0]}>
        <div className={classNames[1]}>
          {singleDataContainer}
          </div>
      </div>
    </>
  );
};

export default contactUs;

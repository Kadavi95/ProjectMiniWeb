import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import "../../sass/cms.scss";

const CMS = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    firestore
      .collection("appointments")
      .get()
      .then((querySnapshot) => {
        const arr = [];
        querySnapshot.forEach((doc) => {
          const obj = {
            id: doc.id,
            ...doc.data(),
            
          };
          arr.push(obj);
          console.log(obj);

        });
        setAppointments(arr);
      });
  }, []);
  console.log(appointments);

  const singleMessage = appointments.map((item, i) => (
    <li key={i}>
      <div>
        <span>{item.id}</span>

      </div>
      <div>{item.messageValue}</div>
    </li>
  ));
  return (
    <>
      <div className="cms_container">
      
      </div>
    </>
  );
};

export default CMS;

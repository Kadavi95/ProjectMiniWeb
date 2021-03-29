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
    <>
    <tr key={i} className = 'cms_tbody_firstRow'>
        <td className='firstRow_date'>{i}</td>
        <td className='firstRow_date'>{item.name}</td>
        <td className='firstRow_date'>{item.surName}</td>
        <td className='firstRow_date'>{item.day}</td>
        <td className='firstRow_date'>{item.hour}</td>
        <td className='firstRow_date'>{item.telephoneNumber}</td>
    </tr>
    <tr className="cms_tbody-secondRow">
        <td className='secondRow_message'>Wiadomość</td>
        <td className='secondRow_message-content'>{item.messageValue !== '' ? item.messageValue : <p>Brak uwag</p>}</td>
    </tr>
    </>
  ));
  return (
    <>
      <div className="cms_container">
        <div className="cms_table_container">
            <table className='cms_table'>
                <thead className='cms_table-thead'>
                    <tr className='cms_table-firstrow'>
                        <th className='cms_table-th'>ID</th>
                        <th className='cms_table-th'>Imię</th>
                        <th className='cms_table-th'>Nazwisko</th>
                        <th className='cms_table-th'>Dzień</th>
                        <th className='cms_table-th'>Godzina</th>
                        <th className='cms_table-th'>Number tel</th>
                    </tr>
                </thead>
                <tbody className='cms_table-tbody'>
                    {singleMessage}
                </tbody>
            </table>
        </div>
      </div>
    </>
  );
};

export default CMS;

import React, {useState, useEffect} from "react";
import { firestore } from '../firebase';
import '../../sass/cms.scss';

const CMS = () => {
const [appointments, setAppointments] = useState([]);
useEffect(() => {
    firestore.collection("appoint")
})
  return (
    <>
      <div className="cms_container">

      </div>
    </>
  );
};

export default CMS;

import React from 'react';
import {Link} from 'react-router-dom';
import '../sass/Buttons.scss';

const linkTo= ['vaccinate', 'treatment', 'appointments'];
const linkTextContent = ['Szczepienia',  'Zabiegi', 'Wizyty' ];
const linkClassName = 'productsButton';


const Buttons = () => {

    const singleLink = linkTo.map((link,i) => (
        <button>
            <Link className={linkClassName} to ={link}>{linkTextContent[i]}</Link>
        </button>
    ))
    // console.log(linkTo);
    return ( 
        <div className='buttonsContainer'>
            {singleLink}
        </div>
     );
}
 
export default Buttons;
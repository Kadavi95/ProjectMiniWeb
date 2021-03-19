import React from 'react';
import {Link} from 'react-router-dom';
import '../sass/Buttons.scss';

const linkTo= ['vaccinate', 'treatment', 'appointments'];
const linkTextContent = ['Szczepienia',  'Zabiegi', 'Wizyty' ];
const linkClassName = 'productsButton';

const object = {
    firstKey: ['vaccinate', 'treatment', 'appointments'],
    secondKey: ['Szczepienia',  'Zabiegi', 'Wizyty' ]
}

console.log(object.firstKey);


const Buttons = () => {
    const singleItem = object.firstKey.map(item => (
        <button>
            <Link to = {item}>{object.secondKey.map(name => name)}</Link>
        </button>
    ))

    // const singleLink = linkTo.map(link => (
    //     <button>
    //         <Link className={linkClassName} to ={link}>{linkTextContent}</Link>
    //     </button>
    // ))
    // console.log(linkTo);
    return ( 
        <div className='buttonsContainer'>
            {/* <button>
                <Link className
                ='productsButton' to='vaccinate'>Szczepienia</Link>
            </button>
            <button>
                <Link className
                ='productsButton' to='treatment'>Zabiegi</Link>
            </button>
            <button>
                <Link className
                ='productsButton' to='appointments'>Wizyty</Link>
            </button> */}
            {/* {singleLink} */}
            {singleItem}
        </div>
     );
}
 
export default Buttons;
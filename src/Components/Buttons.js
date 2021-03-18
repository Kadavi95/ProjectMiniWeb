import React from 'react';
import {Link} from 'react-router-dom';

const Buttons = () => {
    return ( 
        <div className='buttonsConatiner'>
            <button>
                <Link to='szczepienia'>Szczepienia</Link>
            </button>
            <button>
                <Link>Zabiegi</Link>
            </button>
            <button>
                <Link>Wizyty</Link>
            </button>
        </div>
     );
}
 
export default Buttons;
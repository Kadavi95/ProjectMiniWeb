import React from 'react';
const google = 'http://www.google.pl';
const rpPl = 'http://www.rp.pl';
const weszloCom = 'http://www.weszlo.com';
const linksToPages = ['http://www.google.pl', 'http://www.rp.pl', 'http://www.weszlo.com'];
const linksAndIcons = [
    {
        links: 'http://www.google.pl',
        icons: 'fab fa-facebook'
    },
    {
        links: 'http://www.rp.pl',
        icons: 'fab fa-facebook'
    },
    {
        links: 'http://www.weszlo.com',
        icons: 'fab fa-facebook'
    },
]




const Footer = () => {
    const singlePage = linksAndIcons.map(({links, icons}) => (
        <a href={links} className={icons} target='_blank'></a>
    ))
    return ( <>
    <div className="footer_container">
        <div className="vet_conteiner">
            <h3>Vet</h3>
        </div>
        <div className="icons_container">
            {singlePage}
        </div>
      
    </div>
     </>);
}
 
export default Footer;
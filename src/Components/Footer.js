import React from 'react';
import '../sass/footer.scss';
const linksAndIcons = [
    {
        links: 'http://www.facebook.pl',
        icons: 'fab fa-facebook',
        artificialID: 'abc'
    },
    {
        links: 'http://www.instagram.com',
        icons: 'fab fa-instagram',
        artificialID: 'abc'
    },
    {
        links: 'http://www.twitter.com',
        icons: 'fab fa-twitter',
        artificialID: 'abc'
    },
]

const Footer = () => {
    const singlePage = linksAndIcons.map(({links, icons, artificialID}) => (
        <a href={links} className={icons} id={artificialID} target='_blank'></a>
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
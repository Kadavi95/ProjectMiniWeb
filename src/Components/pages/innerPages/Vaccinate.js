import React from "react";
import '../../../sass/Vaccinate.scss';
const VaccinatesBase = [
    {
        type: 'lorem0',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quas nam reiciendis dolorum ex! Iste sint libero eos, nemo reiciendis quia sapiente expedita autem consequatur assumenda ex. Quae, eum dolorum?',
    },
    {
        type: 'lorem1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officiis repellat facere vero qui deserunt ipsam amet.',
    },
    {
        type: 'lorem2',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quas nam reiciendis dolorum ex! Iste sint libero eos, nemo reiciendis quia sapiente expedita autem consequatur assumenda ex. Quae, eum dolorum?',
    },
    {
        type: 'lorem3',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt adipisci earum veniam corporis nobis!',
    },
    {
        type: 'lorem4',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam iste adipisci impedit voluptatum ipsum veritatis necessitatibus at, obcaecati fugit totam hic accusamus, blanditiis illo soluta sed reiciendis optio veniam iusto! Maiores, dolorem. Provident eius asperiores, enim aut placeat aliquam sed!',
    },
    {
        type: 'lorem5',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt adipisci earum veniam corporis nobis!',
    },
    {
        type: 'lorem5',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt adipisci earum veniam corporis nobis!',
    },
   

];

const vaccinneLiClassName = 'singleVaccineLiElement';
const vaccinneHClassName = 'singleVaccineHElement';
const vaccinePClassName = 'singleVaccinePElement';
const vaccineUlClassName = 'singleVaccineUlElement'

const Vaccinate = () => {
    const singleVaccine = VaccinatesBase.map(({type, description}) => (
        <li className={vaccinneLiClassName}>
            <h3 className={vaccinneHClassName}>
                {type}
            </h3>

            <p className={vaccinePClassName}>
                {description}
            </p>
        </li>
    ))

  return (
    <>
      <div className="vaccinateContainer">
            <ul className={vaccineUlClassName}>
                {singleVaccine}
            </ul>
      </div>
    </>
  );
};

export default Vaccinate;

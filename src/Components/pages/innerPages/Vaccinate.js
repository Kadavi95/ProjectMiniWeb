import React from "react";
import '../../../sass/Vaccinate.scss';
const VaccinatesBase = [
    {
        type: 'lorem0',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat voluptatibus itaque ea reprehenderit delectus, voluptates non vitae nostrum nobis voluptatum, quos temporibus corporis aut quo suscipit! Ratione repudiandae quas minima enim hic labore distinctio. At aspernatur, ut laboriosam enim excepturi fugit natus repellat, aut, quos ex sequi optio animi? Nulla, alias sapiente officiis consequuntur sit quidem animi laboriosam nihil et quas optio ut eius ratione, voluptatem cum voluptates sint.',

        
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
        type: 'lorem6',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nemo officia sapiente vel esse iure quidem reiciendis culpa atque porro? Neque sit perspiciatis minus aliquam blanditiis numquam beatae sunt quis saepe nobis magnam quisquam, repellendus nisi ducimus dolores iusto aperiam dignissimos doloribus possimus. Nemo eos, officia ut quibusdam nisi blanditiis quis autem sunt hic, eveniet voluptatem doloremque!',
        
    },
    {
        type: 'lorem7',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam iste adipisci impedit voluptatum ipsum veritatis necessitatibus at, obcaecati fugit totam hic accusamus, blanditiis illo soluta sed reiciendis optio veniam iusto! Maiores, dolorem. Provident eius asperiores, enim aut placeat aliquam sed!'
    }
   

];

const vaccinneLiClassName = 'singleVaccineLiElement';
const vaccinneHClassName = 'singleVaccineHElement';
const vaccinePClassName = 'singleVaccinePElement';
const vaccineUlClassName = 'singleVaccineUlElement'

const Vaccinate = () => {
    const singleVaccine = VaccinatesBase.map(({type, description}) => (
        <li key= {type} className={vaccinneLiClassName}>
            <h3 className={vaccinneHClassName}>
                {type}
            </h3>

            <div className={vaccinePClassName}>
                {description}
            </div>
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

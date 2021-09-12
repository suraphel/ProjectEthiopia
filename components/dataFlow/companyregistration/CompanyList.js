import React from 'react';

import Companies from '../../companies/Companies';
import classes from './CompanyList.module.css';

const CompanyList = (props) => {
  return (
    <ul className={classes['company-list']}>
      {props.movies.map((companies) => (
        <Companies
          key={companies.id}
          namedata={companies.namedata}
          contactData={companies.contactData}
          teleData={companies.teleData}
        />
      ))}
    </ul>
  );
};

export default CompanyList;
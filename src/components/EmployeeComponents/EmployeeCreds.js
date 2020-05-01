import React from 'react';

import './EmployeeCreds.scss';

const EmployeeCreds = () => {
  return (
    <section className="employee-creds-wrapper">
      <div className="employee-name">
        <h1>Dan Sample</h1>
      </div>
      <div className="employee-id-wrapper">
        {/* these will need to be dynamic */}
        <h1>Employee ID#</h1>
        <h1 className="employee-id">4321</h1>
      </div>
    </section>
  );
};

export default EmployeeCreds;

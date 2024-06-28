import * as React from 'react';

function App() {
  const university = {
    year: "2024",
    expected: "2026",
    degree: "MS Computer Science"
  };

  const person = {
    ...university,
    firstName: "Jimmy",
    lastName: "Puli",
    employer: "Chopt Creative Salads Co."
  };

  return (
    <div>
      <p>Stony Brook University</p>
      <Catalog personObj={person} />
    </div>
  );
}

const Catalog = ({ personObj }) => {
  const { year, expected, degree, firstName, lastName, employer } = personObj;

  return (
    <div>
      <p>{`University Year: ${year}`}</p>
      <p>{`Expected Graduation: ${expected}`}</p>
      <p>{`Degree: ${degree}`}</p>
      <p>{`Name: ${firstName} ${lastName}`}</p>
      <p>{`Employer: ${employer}`}</p>
    </div>
  );
}

export default App;

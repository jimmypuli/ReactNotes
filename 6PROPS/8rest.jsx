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
  const {firstName, lastName, employer, ...universityDetails } = personObj;
  console.log(universityDetails)
}

export default App;

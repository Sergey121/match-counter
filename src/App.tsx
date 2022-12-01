import React from 'react';
import './App.css';
import Field from './components/field/Field';
import Team from './components/team/Team';
import Timer from './components/timer/Timer';

function App() {
  return (
    <Field>
      <Team id={'blue'} />
      <Team id={'red'} />
      <Timer />
    </Field>
  );
}

export default App;

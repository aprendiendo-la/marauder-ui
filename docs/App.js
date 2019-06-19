import React from "react";

import { H1, H2, H3, H4, Button, CourseCard, Plan } from "marauder";

const App = () => (
  <div>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <Button>Comprar</Button>
    <CourseCard title="hola" />
    <Plan plan={{ id: 1, name: "Seminario", amount: 109, features: [] }} />
  </div>
);

export default App;

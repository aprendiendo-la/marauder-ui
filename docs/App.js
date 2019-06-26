import React from "react";

import { H1, H2, H3, H4, Button, CourseCard, Plan, Avatar } from "marauder";
import { StudentCard } from "../src";

const App = () => (
  <div>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <Button>Comprar</Button>
    <CourseCard title="hola" />
    <Plan plan={{ id: 1, name: "Seminario", amount: 109, features: [] }} />
    <Avatar
      src="https://live.staticflickr.com/3463/3365970885_13fa424b96.jpg"
      size="large"
      round
      borderStyle="1px solid #000"
    />
    <StudentCard />
  </div>
);

export default App;

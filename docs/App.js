import React from "react";

import { H1, H2, H3, H4, Button, CourseCard, Plan, Avatar } from "marauder";
import { StudentCard, CourseList } from "../src";

const courseListMock = [
  {
    id: 1,
    name: "Matemática Financiera",
    teacher: "Pancho Lombardi"
  },
  {
    id: 2,
    name: "Estadística I",
    teacher: "Steve Wonder"
  },
  {
    id: 3,
    name: "Estadística II",
    teacher: "Steve Wonder"
  },
  {
    id: 4,
    name: "Física I",
    teacher: "Norbit Saldaña"
  },
  {
    id: 5,
    name: "Psicología Corporativa",
    teacher: "Leonardo di Caprio"
  }
];

const App = () => (
  <div>
    <h1>Tipografía</h1>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <h1>Botones</h1>
    <Button>Comprar</Button>
    <CourseCard title="hola" />
    <Plan plan={{ id: 1, name: "Seminario", amount: 109, features: [] }} />
    <h1>Avatar</h1>
    <Avatar
      src="https://live.staticflickr.com/3463/3365970885_13fa424b96.jpg"
      size="small"
      round
      borderStyle="1px solid #000"
    />
    <Avatar
      src="https://live.staticflickr.com/3463/3365970885_13fa424b96.jpg"
      size="medium"
      round
      borderStyle="1px solid #000"
    />
    <Avatar
      src="https://live.staticflickr.com/3463/3365970885_13fa424b96.jpg"
      size="large"
      round
      borderStyle="1px solid #000"
    />
    <h1>Cards de Estudiante</h1>
    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
      <StudentCard avatarImage="https://live.staticflickr.com/3463/3365970885_13fa424b96.jpg" />
      <StudentCard
        title="Ashton Kutcher"
        subtitle="Universidad del Pacífico"
        slogan="En netflix..."
        avatarImage="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/iowa-ashton-kutcher-1502221590.jpg?crop=1.00xw:0.667xh;0,0.0545xh&resize=480:*"
      />
      <StudentCard
        title="Ricardo Milos"
        subtitle="PUCP"
        slogan="Dancing babe"
        avatarImage="https://res.cloudinary.com/teepublic/image/private/s--S7R-TD3L--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1550842727/production/designs/4261210_0.jpg"
      />
    </div>
    <br />
    <h1>Lista de cursos</h1>
    <CourseList items={courseListMock} />
  </div>
);

export default App;

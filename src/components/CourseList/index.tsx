import * as React from "react";
import styled from "styled-components";
import { H4, H5, Paragraph } from "../Typography";
import Avatar from "../Avatar";

interface ContainerProps {
  // readonly src: string;
  // readonly width: number;
  // readonly height: number;
  // readonly round: boolean;
  // readonly borderStyle: string;
}

const Container = styled.div<ContainerProps>`
  width: 210px;
  text-align: left;
  border-radius: 5px;
  box-shadow: 0px 0px 12px 1px rgba(197, 197, 197, 0.75);
`;

interface Course {
  id: string | number;
  name: string;
  teacher: string;
}

interface Props {
  title: string;
  items: Array<Course>;
}

const CourseList: React.SFC<Props> = ({ title, items }) => {
  return (
    <Container>
      <div style={{ padding: "5px 15px" }}>
        <H4>{title}</H4>
      </div>
      <div>
        {items.length > 0 ? (
          items.map(e => {
            return (
              <div
                style={{
                  padding: "5px 15px",
                  borderTop: "1px solid #dadada"
                }}
              >
                <H4>{e.name}</H4>
                <H5>{e.teacher}</H5>
              </div>
            );
          })
        ) : (
          <div
            style={{
              padding: "5px 15px",
              borderTop: "1px solid #dadada"
            }}
          >
            <H5>Sin contenido.</H5>
          </div>
        )}
      </div>
    </Container>
  );
};

CourseList.defaultProps = {
  title: "Lista de cursos",
  items: []
};

export default CourseList;

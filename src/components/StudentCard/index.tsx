import * as React from "react";
import styled from "styled-components";
import { H3, H5, Paragraph } from "../Typography";
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
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 0px 12px 1px rgba(197, 197, 197, 0.75);
`;

const getSize = (size: string) => {
  if (size === "small") {
    return 45;
  }
  if (size === "medium") {
    return 75;
  }
  if (size === "large") {
    return 105;
  }
};

interface Props {
  title: string;
  subtitle: string;
  slogan: string;
  avatarImage: string;
}

const StudentCard: React.SFC<Props> = ({
  title,
  subtitle,
  slogan,
  avatarImage
}) => {
  return (
    <Container>
      <div
        style={{
          position: "relative",
          height: 150
        }}
      >
        <div
          style={{
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            height: "60%",
            background:
              "linear-gradient(90deg, rgba(36,92,250,1) 0%, rgba(64,144,255,1) 100%)"
          }}
        />
        <div style={{ height: "40%", opacity: 0 }} />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -40%)"
          }}
        >
          <Avatar
            src={avatarImage}
            round
            size="large"
            borderStyle="2px solid #fff"
          />
        </div>
      </div>
      <H3>{title}</H3>
      <H5>{subtitle}</H5>
      <div style={{ padding: "8px 0px" }}>
        <Paragraph>- {slogan} -</Paragraph>
      </div>
    </Container>
  );
};

StudentCard.defaultProps = {
  title: "Jennifer Aniston",
  subtitle: "Universidad de Lima",
  slogan: "Estudiando"
};

export default StudentCard;

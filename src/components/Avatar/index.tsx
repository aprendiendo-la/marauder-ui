import * as React from "react";
import styled from "styled-components";

interface ContainerProps {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly round: boolean;
  readonly borderStyle: string;
}

const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  background-image: url('${props => props.src}');
  background-repeat: no-repeat; 
  background-size: cover;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: ${props => (props.round ? "50%" : "0%")};
  border: ${props => props.borderStyle || "none"};
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
  round?: boolean;
  src?: string;
  size?: string;
  borderStyle?: string;
}

const Avatar: React.SFC<Props> = ({ round, src, size, borderStyle }) => {
  return (
    <Container
      src={src}
      width={getSize(size)}
      height={getSize(size)}
      round={round}
      borderStyle={borderStyle}
    />
  );
};

Avatar.defaultProps = {
  src:
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
  size: "medium",
  round: false,
  borderStyle: "none"
};

export default Avatar;

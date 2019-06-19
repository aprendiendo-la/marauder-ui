import * as React from "react";

interface Props {
  title: string;
  subtitle: string;
  description: string;
}

const CouseCard: React.SFC<Props> = props => {
  return (
    <div>
      <h1>Hello, {props.title}</h1>
      <p>Pasa la nee</p>
    </div>
  );
};

CouseCard.defaultProps = {
  title: "Guest User"
};

export default CouseCard;

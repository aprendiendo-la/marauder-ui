import * as React from "react";

interface Props {
  name: string;
  amount: string;
  features: Array<string>;
}

const Plan: React.SFC<Props> = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.amount}</p>
    </div>
  );
};

Plan.defaultProps = {
  name: "..."
};

export default Plan;

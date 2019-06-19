import * as React from "react";
import { IPlan } from "./Plan";

interface Props {
  plan: IPlan;
}

const Plan: React.SFC<Props> = ({ plan }) => {
  return (
    <div>
      <h1>{plan.name}</h1>
      <p>{plan.amount}</p>
    </div>
  );
};

// Plan.defaultProps = {
//   plan: {
//     id: 0,
//     name: '',
//     amount: 0,
//     features: []
//   }
// };

export default Plan;

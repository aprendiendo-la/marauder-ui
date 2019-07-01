import * as React from "react";
import { shallow } from "enzyme";

import Avatar from "../index";

it("renders the heading", () => {
    const result = shallow(<Avatar />).contains(<h1>Hello!</h1>);
    expect(result).toBeTruthy();
});
import * as React from "react";
import { shallow } from "enzyme";

import Avatar from "../index";

const setUp = (props = {}) => {
    const component = shallow(<Avatar {...props}/>)
    return component;
}

describe('Avatar Component', () => {
    let component : any;

    beforeEach(() => {
        component = setUp();
    })

    it("Renders Avatar component", () => {
        expect(component).toMatchSnapshot()
    });
})

import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Foo from "./Foo";

describe("<Foo />", () => {
  let fooWrapper: ShallowWrapper;

  const name = "@fellowDeveloper";

  beforeEach(() => {
    fooWrapper = shallow(<Foo name={name} />);
  });

  it("greets the user", () => {
    const expectedGreetMessage = `Hello ${name}!`;

    expect(fooWrapper.find("h1").text()).toEqual(expectedGreetMessage);
  });
});

import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Foo from "./Foo";
import { FooDiv } from "./Foo.style";

describe("<Foo />", () => {
  let fooWrapper: ShallowWrapper;

  const name = "@fellowDeveloper";

  beforeEach(() => {
    fooWrapper = shallow(<Foo name={name} />);
  });

  it("renders `FooDiv`", () => {
    expect(fooWrapper.find(FooDiv)).toHaveLength(1);
  });

  it("greets the user", () => {
    const expectedGreetMessage = `Hello ${name}!`;

    expect(fooWrapper.find(FooDiv).text()).toEqual(expectedGreetMessage);
  });
});

import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import renderer from "react-test-renderer";
import Foo from "./Foo";
import { FooDiv } from "./Foo.style";
import "jest-styled-components";

describe("<Foo />", () => {
  let fooWrapper: ShallowWrapper;

  const name = "@fellowDeveloper";

  beforeEach(() => {
    fooWrapper = shallow(<Foo name={name} />);
  });

  it("renders `FooDiv`", () => {
    expect(fooWrapper.find(FooDiv)).toHaveLength(1);
  });

  it("sets `fontSize`", () => {
    const tree = renderer.create(<FooDiv fontSize="40px" />).toJSON();

    expect(tree).toHaveStyleRule("font-size", "40px");
  });

  it("greets the user", () => {
    const expectedMessage = `Hello ${name}!`;

    expect(fooWrapper.find(FooDiv).text()).toEqual(expectedMessage);
  });
});

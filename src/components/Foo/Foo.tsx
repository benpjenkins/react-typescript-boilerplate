import React from "react";
import { FooDiv } from "./Foo.style";

interface IFooProps {
  name: string;
}

const foo: React.FC<IFooProps> = ({ name }) => (
  <FooDiv fontSize="25px">Hello {name}!</FooDiv>
);

export default foo;

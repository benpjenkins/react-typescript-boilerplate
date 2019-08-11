import React from "react";

interface IFooProps {
  name: string;
}

const foo: React.FC<IFooProps> = props => <h1>Hello {props.name}!</h1>;

export default foo;
